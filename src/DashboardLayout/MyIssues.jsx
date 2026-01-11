import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../Componets/Hook/useAuth";

const MyIssues = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // 🔹 Get my issues
  const { data: myIssues = [], isLoading } = useQuery({
    queryKey: ["issues", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/issuess/${user.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  // 🔹 Delete issue
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return axios.delete(`http://localhost:3000/issues/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["issues"]);
      Swal.fire("Deleted!", "Issue deleted successfully", "success");
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This issue will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Reported Issues</h2>

      {myIssues.length === 0 ? (
        <p>No issues reported yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myIssues.map((issue) => (
                <tr key={issue._id}>
                  <td>{issue.title}</td>
                  <td>{issue.category}</td>
                  <td>
                    <span className="badge badge-info">
                      {issue.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        issue.priority === "high"
                          ? "badge-error"
                          : "badge-success"
                      }`}
                    >
                      {issue.priority}
                    </span>
                  </td>
                  <td className="space-x-2">
                    {/* View */}
                    <Link
                      to={`/issues/${issue._id}`}
                      className="btn btn-xs btn-outline"
                    >
                      View
                    </Link>

                    {/* Edit (only pending) */}
                    {issue.status === "pending" && (
                      <button className="btn btn-xs btn-warning">
                        Edit
                      </button>
                    )}

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(issue._id)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyIssues;
