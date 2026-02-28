import { useForm } from "react-hook-form";
import useAuth from "../Hook/useAuth";
import useAxiosSecure from "../Hook/UseAxiosSecure";
import Swal from "sweetalert2";

const Staff = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleStaffApplication = (data) => {
    axiosSecure.post("/staff", data)
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Staff Application Submitted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center my-10">
        Staff Page Coming Soon...
      </h2>
      <form onSubmit={handleSubmit(handleStaffApplication)}>
        {/* Sender + Receiver */}
        <div >
          {/* Staff */}
          <fieldset className="fieldset">
            <h1 className="text-2xl font-bold">Staff Details</h1>

            <label className="label">Staff Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("staffName")}
              placeholder="Staff Name"
              defaultValue={user?.displayName}
            />

            <label className="label">Staff Email</label>
            <input
              type="email"
              className="input w-full"
              {...register("staffEmail")}
              placeholder="Staff Email"
              defaultValue={user?.email}
            />
            <label className="label">Department</label>
            <select
              className="select select-bordered w-full"
              {...register("department", { required: true })}
            >
              <option value="">Select Department</option>
              <option value="road">Road & Transport</option>
              <option value="electricity">Electricity</option>
              <option value="water">Water Supply</option>
              <option value="sanitation">Sanitation</option>
            </select>
            <label className="label">NID Number</label>
            <input
              type="text"
              className="input w-full"
              {...register("nid", { required: true })}
              placeholder="National ID Number"
            />

            <label className="label">Working Area</label>
            <input
              type="text"
              className="input w-full"
              {...register("area", { required: true })}
              placeholder="e.g. Dhaka North"
            />
            <label className="label">Experience (Years)</label>
            <input
              type="number"
              min="0"
              className="input w-full"
              {...register("experience", { min: 0 })}
              placeholder="e.g. 2"
            />
            <button
              type="submit"
              className="btn btn-primary  mt-5 p-4"
            >
              Apply as a Staff
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Staff;
