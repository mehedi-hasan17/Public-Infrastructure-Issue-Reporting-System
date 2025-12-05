import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-amber-300">Hello world!</h1>
      <h1 className="text-4xl text-red-500">Hi Projects </h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>s
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
