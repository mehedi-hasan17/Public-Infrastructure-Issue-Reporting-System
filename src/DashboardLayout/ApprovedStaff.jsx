import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Componets/Hook/UseAxiosSecure";
import Swal from "sweetalert2";
import { FaEye, FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";

const ApprovedStaff = () => {
  const axicosSecure = useAxiosSecure();
  const { refetch, data: staff = [] } = useQuery({
    queryKey: ["staff", "pending"],
    queryFn: async () => {
      const res = await axicosSecure.get("/staff");
      return res.data;
    },
  });
  const updateStaffStatus = (staff, status) => {
    const updateInfo = { status: status, email: staff.staffEmail };
    axicosSecure.patch(`/staff/${staff._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Staff status set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const handleApproval = (staff) => {
    if (staff.status === "approved") {
      Swal.fire({
        icon: "info",
        title: "Already Approved",
        text: "This staff member is already approved.",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this staff member?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Approve",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStaffStatus(staff, "approved"); // update DB & UI
      }
    });
  };

  const handleRejection = (staff) => {
    if (staff.status === "rejected") {
      Swal.fire({
        icon: "info",
        title: "Already Rejected",
        text: "This staff member is already rejected.",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You want to reject this staff member?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Reject",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStaffStatus(staff, "rejected"); // update DB & UI
      }
    });
  };
  const handleDelete = (staff) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${staff.staffName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axicosSecure.delete(`/staff/${staff._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch(); // UI update
            Swal.fire({
              icon: "success",
              title: `${staff.staffName} has been deleted.`,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl ">Staff Pending Approval:{staff.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((staffMember, index) => (
              <tr key={staffMember._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{staffMember.staffName}</td>
                <td>{staffMember.staffEmail}</td>
                <td>
                  <p
                    className={`${
                      staffMember.status === "approved"
                        ? "text-green-800"
                        : "text-red-500"
                    }`}
                  >
                    {" "}
                    {staffMember.status}
                  </p>
                </td>


                <td>{staffMember.workStatus}</td>
                <td>
                  <button
                    onClick={() => handleApproval(staffMember)}
                    className="btn"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(staffMember)}
                    className="btn"
                  >
                    <IoPersonRemove />
                  </button>
                  <button
                    onClick={() => handleDelete(staffMember)}
                    className="btn btn-error"
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedStaff;
