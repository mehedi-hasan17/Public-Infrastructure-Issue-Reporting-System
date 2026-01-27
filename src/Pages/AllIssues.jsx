// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAuth from "../../Hooks/useAuth";
// import Swal from "sweetalert2";

import { useQuery } from "@tanstack/react-query";
import useAuth from "../Componets/Hook/useAuth";
import useAxiosSecure from "../Componets/Hook/UseAxiosSecure";
import Swal from "sweetalert2";

const AllIssues = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // 🔹 Fetch all issues
  const {
    data: issues = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-issues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-issues");
      return res.data;
    },
  });

  // 🔹 Upvote handler
  const handleUpvote = async (id) => {
    if (!user) {
      Swal.fire("Login required", "Please login to upvote", "warning");
      return;
    }

    try {
      const res = await axiosSecure.patch(`/issues/upvote/${id}`);
      if (res.data.success) {
        refetch();
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "Already upvoted",
        "error"
      );
    }
  };

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5">All Issues</h2>

      <div className="grid gap-4">
        {issues.map((issue) => {
          const alreadyUpvoted = issue.upvotes?.includes(user?.email);

          return (
            <div
              key={issue._id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                {issue.title}
              </h3>

              <p className="text-gray-600 my-2">
                {issue.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Posted by: {issue.userEmail}
                </span>

                <button
                  onClick={() => handleUpvote(issue._id)}
                  disabled={alreadyUpvoted}
                  className={`btn btn-sm ${
                    alreadyUpvoted
                      ? "btn-disabled"
                      : "btn-outline"
                  }`}
                >
                  👍 {issue.upvoteCount || 0}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllIssues;
