import { Link } from "react-router-dom";

const IssueCard = ({ issue }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <img src={issue.image} className="h-40 w-full object-cover rounded" />
      <h3 className="text-xl font-semibold mt-3">{issue.title}</h3>
      <p className="text-gray-500">{issue.location}</p>
      <Link to={`/issue/${issue._id}`} className="text-blue-600 mt-2 block">
        View Details
      </Link>
    </div>
  );
};

export default IssueCard;
