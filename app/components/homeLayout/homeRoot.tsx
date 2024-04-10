"use client";
import Link from "next/link";
import "../global.css";

const Home: React.FC = () => {
  const exampleButton = () => {
    alert(
      "Guest button is for an example, it would not be necessary in this project."
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-green-200 animate-gradient-move">
      <div className="h-3/4 w-2/5 p-4  mx-auto shadow-2xl shadow-blue-200 bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text relative inline-block p-4">
            <span id="first" className="inline-block">
              Hi, welcome to
              <span
                id="second"
                className="text-black italic text-6xl md:text-6xl block"
              >
                Cordoba Market!
              </span>{" "}
            </span>
          </h1>
        </div>

        <div className="grid grid-rows-3 gap-4 justify-items-center my-28">
          <h2 className="text-green-500 text-2xl md:text-2xl">
            {" "}
            Please select one of the options below
          </h2>

          <div className="w-2/3 sm:w-1/3">
            <Link href="../pages/index/first-step">
              <button className="w-full rounded border-2 border-gray-400 shadow p-2 mb-2 hover:border-green-600  transition-all duration-500 ease-in-out hover:bg-gray-100 hover:p-2.5">
                <span className="text-xl ">Register Account</span>
              </button>
            </Link>
          </div>

          <div className="w-2/3 sm:w-1/3">
            <Link href="../pages/loggin/first-step">
              <button className="w-full rounded border-2 border-gray-400 shadow p-2 mb-2 hover:border-green-600  transition-all duration-500 ease-in-out hover:bg-gray-100 hover:p-2.5">
                <span className="text-xl ">Loggin Account</span>
              </button>
            </Link>
          </div>

          <div className="w-2/3 sm:w-1/3">
            <button
              onClick={exampleButton}
              className="w-full rounded border-2 border-gray-400 shadow p-2 mb-2 hover:border-green-600  transition-all duration-500 ease-in-out hover:bg-gray-100 hover:p-2.5"
            >
              <span className="text-xl ">Guest Access</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
