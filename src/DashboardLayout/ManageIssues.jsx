// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import Swal from "sweetalert2";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Componets/Hook/UseAxiosSecure";
import Swal from "sweetalert2";

const ManageIssues = () => {
  const axiosSecure = useAxiosSecure();

  const { data: issues = [], refetch } = useQuery({
    queryKey: ["all-issues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-issues");
      return res.data;
    },
  });

  const handleStatusChange = (id, status) => {
    axiosSecure
      .patch(`/issues/status/${id}`, { status })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Success", "Status updated", "success");
        }
      });
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Manage Issues</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>  
          <tbody>
            {issues.map((issue) => (
              <tr key={issue._id}>
                <td>{issue.title}</td>
                <td className="capitalize">{issue.status}</td>
                <td>
                  <select
                    className="select select-bordered select-sm"
                    value={issue.status}
                    onChange={(e) =>
                      handleStatusChange(issue._id, e.target.value)
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageIssues;
