import { useQuery } from "@tanstack/react-query";
import useAuth from "../Componets/Hook/useAuth";
import useAxiosSecure from "../Componets/Hook/UseAxiosSecure";


const DashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data = { totalIssues: 0, pending: 0, resolved: 0 },
    isLoading,
  } = useQuery({
    queryKey: ["all-issues-dashboard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/issues");
      return res.data;
    },
    enabled: !!user,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card bg-base-100 shadow p-6">
        <h2>Total Issues: <span className="text-xl">{data.totalIssues}</span></h2>
      </div>

      <div className="card bg-base-100 shadow p-6">
        <h2>Pending: <span className="text-xl">{data.pending}</span></h2>
      </div>

      <div className="card bg-base-100 shadow p-6">
        <h2>Resolved: <span className="text-xl">{data.resolved}</span></h2>
      </div>
    </div>
  );
};

export default DashboardHome;
