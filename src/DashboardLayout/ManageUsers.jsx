import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Componets/Hook/UseAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  // 🔹 Fetch all users
  const { data: users = [], refetch } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/users");
      return res.data;
    },
  });

  // 🔹 Block / Unblock handler
  const handleBlockToggle = (user) => {
    Swal.fire({
      title: user.blocked ? "Unblock this user?" : "Block this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: user.blocked ? "Yes, Unblock" : "Yes, Block",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.patch(`/admin/users/block/${user._id}`, {
          blocked: !user.blocked,
        });

        Swal.fire(
          user.blocked ? "Unblocked!" : "Blocked!",
          "Action successful",
          "success"
        );
        refetch();
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Subscription</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.displayName || "N/A"}</td>
                <td>{user.email}</td>
                <td>{user.role || "citizen"}</td>
                <td>
                  {user.premium ? (
                    <span className="badge badge-success">Premium</span>
                  ) : (
                    <span className="badge badge-ghost">Free</span>
                  )}
                </td>
                <td>
                  {user.blocked ? (
                    <span className="badge badge-error">Blocked</span>
                  ) : (
                    <span className="badge badge-success">Active</span>
                  )}
                </td>
                <td>
                  <button
                    className={`btn btn-sm ${
                      user.blocked ? "btn-success" : "btn-error"
                    }`}
                    onClick={() => handleBlockToggle(user)}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center mt-4 text-gray-500">
            No users found
          </p>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
