import { Link } from "react-router-dom";
import Button from "../Shared/Button/Button";

const IssueCard = ({ issue }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <img src={issue.image} className="h-40 w-full object-cover rounded" />
      <h3 className="text-xl font-semibold mt-3">{issue.title}</h3>
      <p className="text-gray-500">{issue.location}</p>
     <Link to={`/detels-page/${issue._id}`} className="mt-3 block">
        <Button label="View Details" />
      </Link>
    </div>
  );
};

export default IssueCard;
