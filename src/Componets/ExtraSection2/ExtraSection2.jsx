import React from 'react';

const ExtraSection2 = () => {
  return (
    <div className="bg-gray-100 py-12 px-5">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Feature"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            কেন আমাদের সার্ভিস ব্যবহার করবেন?
          </h2>

          <p className="text-gray-600 mb-6">
            আমরা আপনাকে দিচ্ছি modern, fast এবং user-friendly solution। 
            আপনার project কে next level এ নিয়ে যেতে আমাদের platform perfect choice।
          </p>

          {/* Features List */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              ✅ Fast Performance
            </li>
            <li className="flex items-center gap-2">
              ✅ Secure System
            </li>
            <li className="flex items-center gap-2">
              ✅ Responsive Design
            </li>
          </ul>

          {/* Button */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
};

export default ExtraSection2;