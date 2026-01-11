import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "../Componets/Hook/useAuth";

const Profile = () => {
  const { user, dbUser } = useAuth(); // dbUser = user from database
  const queryClient = useQueryClient();

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: dbUser?.name || "",
    photoURL: dbUser?.photoURL || "",
  });

  // ✅ Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: (data) => axios.put(`http://localhost:3000/users/${user.email}`, data),
    onSuccess: () => {
      Swal.fire("Success", "Profile updated!", "success");
      queryClient.invalidateQueries(["user", user.email]);
      setEditing(false);
    },
    onError: () => Swal.fire("Error", "Update failed", "error"),
  });

  // ✅ Make premium mutation
  const makePremiumMutation = useMutation({
    mutationFn: () => axios.put(`http://localhost:3000/users/premium/${user.email}`),
    onSuccess: () => {
      Swal.fire("Success", "You are now a premium user!", "success");
      queryClient.invalidateQueries(["user", user.email]);
    },
    onError: () => Swal.fire("Error", "Payment failed", "error"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfileMutation.mutate(formData);
  };

  const handleSubscribe = () => {
    Swal.fire({
      title: "Subscribe for 1000tk?",
      showCancelButton: true,
      confirmButtonText: "Pay",
    }).then((result) => {
      if (result.isConfirmed) {
        makePremiumMutation.mutate();
      }
    });
  };

  if (dbUser?.blocked) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 text-red-800 rounded text-center">
        <h2 className="text-xl font-bold mb-2">Account Blocked</h2>
        <p>Please contact the authorities for assistance.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <div className="flex flex-col items-center mb-6">
        <img
          src={dbUser?.photoURL || "https://via.placeholder.com/80"}
          alt="Profile"
          className="w-20 h-20 rounded-full mb-2"
        />
        <h2 className="text-xl font-semibold">{dbUser?.name}</h2>
        <p className="text-gray-500 text-sm">{dbUser?.email}</p>
        {dbUser?.premium && (
          <span className="text-green-600 font-bold text-sm mt-1">
            Premium User
          </span>
        )}
      </div>

      {editing ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            value={formData.photoURL}
            onChange={(e) =>
              setFormData({ ...formData, photoURL: e.target.value })
            }
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
          <div className="flex gap-2">
            <button type="submit" className="btn btn-primary w-full">
              Save
            </button>
            <br />
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="btn btn-outline w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          className="btn btn-outline w-full mb-4"
          onClick={() => setEditing(true)}
        >
          Edit Profile
        </button>
      )}

      {!dbUser?.premium && (
        <button
          className="btn btn-success w-full"
          onClick={handleSubscribe}
        >
          Subscribe for 1000tk
        </button>
      )}
    </div>
  );
};

export default Profile;
