
import axios from "axios";
import useAuth from "../Componets/Hook/useAuth";
import { useQuery } from "@tanstack/react-query";

const DashboardHome = () => {
  const { user } = useAuth();

  const { data = {}, isLoading } = useQuery({
    queryKey: ['citizen-dashboard', user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/issues/citizen-stats/${user.email}`,
      );
      return res.data;
    },
    enabled: !!user?.email
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card bg-base-100 shadow p-6">
        <h2>Total Issues: <span className="text-xl ">{data.totalIssues}</span></h2>      </div>

      <div className="card bg-base-100 shadow p-6">
        <h2>Pending: <span className="text-xl ">{data.pending}</span></h2>
      </div>

      <div className="card bg-base-100 shadow p-6">
        <h2>Resolved: <span className="text-xl ">{data.resolved}</span></h2>
      </div>
    </div>
  );
};

export default DashboardHome;
