import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetelsPage = () => {
  const { id } = useParams(); // get issue id from URL
  const [issue, setIssues] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch single issue
    fetch(`http://localhost:3000/issues/${id}`) // change URL to your API
      .then((res) => res.json())
      .then((data) => {
        const foundIssue = data.find((item) => item._id === id);
        setIssues(foundIssue);
        setLoading(false);
      });
  }, [id]);
  console.log(issue, id);
  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  if (!issue) {
    return (
      <div className="text-center mt-20 text-xl text-red-500">
        Issue not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 p-4">
      {/* Image */}
      <img
        src={issue.image}
        alt={issue.title}
        className="w-full h-64 object-cover rounded-lg shadow"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-6">{issue.title}</h1>

      {/* Category & Status */}
      <div className="flex items-center gap-4 mt-3">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {issue.category}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            issue.status === "Resolved"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {issue.status}
        </span>
      </div>

      {/* Location */}
      <p className="text-gray-600 mt-3 text-lg">
        📍 <strong>Location:</strong> {issue.location}
      </p>

      {/* Priority */}
      <p className="text-lg mt-2">
        <strong>Priority:</strong>{" "}
        <span
          className={`${
            issue.priority === "High" ? "text-red-600" : "text-green-600"
          }`}
        >
          {issue.priority}
        </span>
      </p>

      {/* Description */}
      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        {issue.description}
      </p>

      {/* Reporter Info */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <p>
          <strong>Reported By:</strong> {issue.reportedBy}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(issue.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default DetelsPage;
