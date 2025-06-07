import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [titleMoved, setTitleMoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleMoved(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <h1
        className={`
          text-5xl font-bold text-center transition-all duration-1000 ease-in-out text-yellow-400
          ${
            titleMoved
              ? "fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              : "relative mt-20 text-yellow-400"
          }
        `}
      >
        My Portfolio
        <br/>
        Berken Ates
      </h1>

      <div
        className={`
          flex justify-center items-center relative
          transition-all duration-800 ease-in-out
          ${titleMoved ? "opacity-100 mt-48" : "opacity-0 mt-0 pointer-events-none"}
        `}
      >
        <div className="relative w-64 h-64">
          <img
            src="/picture-me.jpg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-black shadow-lg"
          />

          <Link
            to="/about"
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                       bg-black text-yellow-400 font-bold py-2 px-5 rounded-full 
                       select-none hover:text-white transition"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="absolute top-1/2 -right-20 transform -translate-y-1/2 
                       bg-black text-yellow-400 font-bold py-2 px-5 rounded-full 
                       select-none hover:text-white transition"
          >
            Projects
          </Link>

          <Link
            to="/cv"
            className="absolute top-1/2 -left-20 transform -translate-y-1/2 
                       bg-black text-yellow-400 font-bold py-2 px-5 rounded-full 
                       select-none hover:text-white transition"
          >
            CV
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
