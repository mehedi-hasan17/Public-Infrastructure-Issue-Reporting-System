import { useNavigate } from "react-router";
import Button from "../../Componets/Shared/Button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="flex items-center justify-center min-h-screen px-6 py-12">
        <div className="flex flex-col items-center max-w-md mx-auto text-center">
          {/* Icon */}
          <div className="p-3 text-sm font-medium text-lime-500 rounded-full bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
            Something Went Wrong!
          </h1>

          {/* Description */}
          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            The page you are looking for does not exist. Here are some helpful links:
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-full sm:w-auto px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180 text-lime-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go Back</span>
            </button>

            <Button
              label={"Take Me Home"}
              onClick={() => navigate("/")}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
