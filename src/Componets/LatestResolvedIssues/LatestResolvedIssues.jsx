import IssueCard from "../IssueCard/IssueCard.jsx";

const LatestResolvedIssues = ({data}) => {
  console.log(data);

  

  return (
    <div className="container mx-auto my-16">
      <h2 className="text-3xl font-bold mb-6">Latest Resolved Issues</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(issue => (
          <IssueCard key={issue._id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default LatestResolvedIssues;
