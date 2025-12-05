import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-blue-100 rounded-xl">Easy reporting</div>
        <div className="p-6 bg-blue-100 rounded-xl">Admin Management</div>
        <div className="p-6 bg-blue-100 rounded-xl">Real-time Updates</div>
      </div>
    </div>
  );
};

export default Features;
