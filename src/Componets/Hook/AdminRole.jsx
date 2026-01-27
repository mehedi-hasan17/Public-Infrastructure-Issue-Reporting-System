import useAuth from "./useAuth";
import UserRole from "./UserRole";
import Loading from "../../Pages/Shared/Loading/Loading";
import Forbidden from "../../Pages/Shared/Forbidden/Forbidden";

const AdminRole = ({children}) => {
     const { loading} = useAuth()
     const {role, roleLoading}= UserRole()
     if(loading || roleLoading){
          return <Loading></Loading>
     }
     if(role !== 'admin'){
          return <Forbidden></Forbidden>
     }
     return children;
};

export default AdminRole;