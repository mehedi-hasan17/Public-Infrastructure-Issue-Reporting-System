import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Componets/Hook/UseAxiosSecure";
import Swal from "sweetalert2";

const Allissues = () => {
  const axiosSecure = useAxiosSecure();

  // 🔹 Fetch issues
  const { data: issues = [], refetch, isLoading } = useQuery({
    queryKey: ["issues-all"],
    queryFn: async () => {
      const res = await axiosSecure.get("/issues/state");
      return Array.isArray(res.data.issues) ? res.data.issues : [];
    },
  });

  // 🔹 Resolve issue
  const handleResolve = async (id) => {
    const result = await Swal.fire({
      title: "Resolve this issue?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, resolve",
    });

    if (result.isConfirmed) {
      await axiosSecure.patch(`/issues/resolve/${id}`);
      Swal.fire("Resolved!", "Issue marked as resolved", "success");
      refetch();
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Issues</h2>

      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {issues.map((issue) => (
            <tr key={issue._id}>
              <td>{issue.title}</td>
              <td>{issue.category}</td>

              <td>
                {issue.status === "resolved" ? (
                  <span className="text-green-600 font-bold">Resolved</span>
                ) : (
                  <span className="text-yellow-600 font-bold">Pending</span>
                )}
              </td>

              <td>
                {issue.priority === "high" ? (
                  <span className="text-red-600 font-bold">High</span>
                ) : (
                  "Normal"
                )}
              </td>

              <td>
                {issue.status !== "resolved" ? (
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleResolve(issue._id)}
                  >
                    Resolve
                  </button>
                ) : (
                  <span className="text-gray-400">Done</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allissues;
