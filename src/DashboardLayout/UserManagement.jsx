import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import UseAxiosSecure from "../Componets/Hook/UseAxiosSecure";
import Swal from "sweetalert2";
import { FiShieldOff } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa";

const UserManagement = () => {
  const userAxcios = UseAxiosSecure();

  const [searchText, setSearchText] = useState("");
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await userAxcios.get(`/users?search=${searchText}`);
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    userAxcios.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.displayName} has been Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const heandleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };

    userAxcios.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.displayName} is removed from Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <div>
      <h1 className="font-black text-2xl"> User Management Page</h1>
      <h1>The Search Text : {searchText}</h1>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          placeholder="Search"
        />
      </label>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admon Actions</th>
              <th>Others</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => (
              <tr key={users._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={users.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{users.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{users.email}</td>
                <td>{users.role}</td>
                <td>
                  {users.role === "admin" ? (
                    <button
                      onClick={() => heandleRemoveAdmin(users)}
                      className="btn bg-red-400 "
                    >
                      <FiShieldOff></FiShieldOff>
                    </button>
                  ) : (
                    <button
                      className="btn bg-green-400"
                      onClick={() => handleMakeAdmin(users)}
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <th>Actions</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
