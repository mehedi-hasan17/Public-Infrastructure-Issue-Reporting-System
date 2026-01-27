/* eslint-disable react-hooks/rules-of-hooks */
 import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";
 


const userRole = () => {
     const axicosSecure = useAxiosSecure();
     const  {user} = useAuth()
     const {roleLoading, data : role = "citizen"} = useQuery({
          queryKey: ['citizen-role', user?.email],
          queryFn: async ()=>{
               const res = await axicosSecure.get(`/citizens/${user?.email}/role`);
               console.log("Fetched citizen role:", res.data);
               return res.data?.role || "citizen";
          }
     })
     return {role, roleLoading};
};

export default userRole;