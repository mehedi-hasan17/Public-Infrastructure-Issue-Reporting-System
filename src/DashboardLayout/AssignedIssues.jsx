import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Componets/Hook/UseAxiosSecure";


const AssignedIssues = () => {
  const axiosSecure = useAxiosSecure();

  const { data: issues = [] } = useQuery({
    queryKey: ["assignedIssues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/staff/assigned-issues");
      return res.data;
    },
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {issues.map(issue => (
          <tr key={issue._id}>
            <td>{issue.title}</td>
            <td>{issue.priority}</td>
            <td>{issue.status}</td>
            <td>
              <ChangeStatus issue={issue} />
            </td>
          </tr>
        ))}
      </tbody>
    </table> 
  );
};

export default AssignedIssues;
