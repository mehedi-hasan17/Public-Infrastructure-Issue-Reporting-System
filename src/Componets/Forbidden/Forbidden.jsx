import React from "react";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 text-center max-w-md">
          Sorry, the page you are looking for doesn’t exist or you don’t have
          permission to access it.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
