import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Report Public Issues Easily",
      desc: "Help improve your city by reporting problems around you.",
    },
    {
      img: "https://images.unsplash.com/photo-1638207849658-e57be0cdc208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9uJTIwcm9hZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Make Your Community Better",
      desc: "Submit any issues you find around your area.",
    },
    {
      img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9uJTIwcm9hZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Fast & Accurate Reporting",
      desc: "Your reports help authorities take quick action.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="rounded-xl overflow-hidden">
      <Slider {...sliderSettings}>
        {heroSlides.map((slide, index) => (
          <div key={index}>
            <div
              className="h-[450px] bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="text-center bg-black/40 p-10 rounded-lg">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="mt-4 text-lg">{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
