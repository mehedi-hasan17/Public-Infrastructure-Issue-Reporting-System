const StaffDashboard = ({ issues }) => {
  const resolved = issues.filter(i => i.status === "resolved").length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="card">Assigned: {issues.length}</div>
      <div className="card">Resolved: {resolved}</div>
      <div className="card">Today’s Task</div>
    </div>
  );
};

export default StaffDashboard;
