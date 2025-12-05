const Banner = () => {
  return (
    <div
      className="h-[450px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="text-center bg-black/40 p-10 rounded-lg">
        <h1 className="text-4xl font-bold">Report Public Issues Easily</h1>
        <p className="mt-4 text-lg">
          Help improve your city by reporting problems around you.
        </p>
      </div>
    </div>
  );
};

export default Banner;
