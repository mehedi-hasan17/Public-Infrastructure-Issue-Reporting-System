import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../Componets/Hook/useAuth";


const ReportIssue = () => {
  const { user, dbUser } = useAuth(); // dbUser = user from database (premium info)
  const navigate = useNavigate();

  // 🔹 Get my issue count
  const { data: myIssues = [] } = useQuery({
    queryKey: ["my-issues", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/my-issues/${user.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  // 🔹 Submit issue
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❌ Free user limit check
    if (!dbUser?.premium && myIssues.length >= 3) {
      Swal.fire({
        icon: "warning",
        title: "Limit Reached",
        text: "Free users can report only 3 issues. Please subscribe.",
        confirmButtonText: "Go to Profile",
      }).then(() => navigate("/dashboard/profile"));
      return;
    }

    const form = e.target;

    const issueData = {
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      image: form.image.value,
      status: "pending",
      priority: "normal",
      userEmail: user.email,
      userName: user.displayName,
      createdAt: new Date(),
    };

    const res = await axios.post("http://localhost:3000/issues", issueData);

    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Issue Reported Successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/dashboard/my-issues");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-base-100 shadow-xl p-8 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6">
        Report an Issue
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Issue Title"
          className="input input-bordered w-full"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Describe the issue"
          className="textarea textarea-bordered w-full"
          required
        />

        {/* Category */}
        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Road">Road</option>
          <option value="Street Light">Street Light</option>
          <option value="Water Leakage">Water Leakage</option>
          <option value="Garbage">Garbage</option>
          <option value="Footpath">Footpath</option>
        </select>

        {/* Image */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        {/* Submit */}
        <button className="btn btn-primary w-full">
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;
