import React from 'react';

const cardData = [
  {
    id: 1,
    title: "Beautiful Card 1",
    desc: "This is card number one.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: 2,
    title: "Beautiful Card 2",
    desc: "This is card number two.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    id: 3,
    title: "Beautiful Card 3",
    desc: "This is card number three.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    id: 4,
    title: "Beautiful Card 4",
    desc: "This is card number four.",
    img: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913"
  }
];

const ExtraSection1 = () => {
  return (
    <div className="py-10  px-5">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {cardData.map(card => (
          <div key={card.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{card.desc}</p>

              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Read More
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ExtraSection1;