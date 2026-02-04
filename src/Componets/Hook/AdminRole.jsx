import useAuth from "./useAuth";
import UserRole from "./UserRole";
import Forbdden from "../../Componets/Forbidden/Forbidden.jsx";
import Loading from "../../Componets/Loading/Loading.jsx";
const AdminRole = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = UserRole();
  if (loading || roleLoading) {
    return <Loading></Loading>
  }
  if (role !== "admin") {
    return <Forbdden></Forbdden>
  }
  return children;
};

export default AdminRole;
