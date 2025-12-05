import IssueCard from "../IssueCard/IssueCard.jsx";

const LatestResolvedIssues = () => {
  // Placeholder data
  const issues = [
    {
      _id: "1",
      title: "Pothole on Main Street",
      location: "Downtown",
      image: "https://via.placeholder.com/400x200",
    },
    {
      _id: "2",
      title: "Broken Streetlight",
      location: "Elm Street",
      image: "https://via.placeholder.com/400x200",
    },
    {
      _id: "3",
      title: "Garbage Overflow",
      location: "Park Avenue",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className="container mx-auto my-16">
      <h2 className="text-3xl font-bold mb-6">Latest Resolved Issues</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <IssueCard key={issue._id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default LatestResolvedIssues;
