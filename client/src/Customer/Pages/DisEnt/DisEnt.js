import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

function DisEnt() {
  const [progress, setProgress] = useState([0, 0, 0]);
  

  const handleProgressChange = (index, value) => {
    const newProgress = [...progress];
    newProgress[index] = value;
    setProgress(newProgress);
  };

  const completeStep = (index) => {
    const newProgress = [...progress];
    newProgress[index] = 100;
    setProgress(newProgress);
  };

  return (
    <div className="max-w-full overflow-x-hidden">
      <div className="flex">
        <section className="w-[66px]">
          <SideBar />
        </section>
        <div className="flex-grow">
          <NavBar />
          <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
            <span className="p-5 text-slate-500 text-md">Dashboard / DE</span>
          </div>
          <span className="p-10 text-md font-semibold">
            Disciplined Entrepreneurship
          </span>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white p-2 m-10 mt-4">
              Disciplined Entrepreneurship
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="sm:col-span-1 border-r border-gray-200 p-4 m-10 mt-7">
                <div className="mb-4 font-semibold">Select Module</div>
                <ul>
                  <li className="flex items-center mb-2 p-2 rounded-lg bg-green-100">
                    <span className="mr-2"></span>
                    <button>Problem Identification</button>
                  </li>
                  <li className="flex items-center mb-2 p-2 rounded-lg hover:bg-gray-100">
                    <span className="mr-2"></span>
                    <button>Problem Validation</button>
                  </li>
                  <li className="flex items-center mb-2 p-2 rounded-lg hover:bg-gray-100">
                    <span className="mr-2"></span>
                    <button>Lead Customer EOI</button>
                  </li>
                  <li className="flex items-center mb-2 p-2 rounded-lg hover:bg-gray-100">
                    <span className="mr-2"></span>
                    <button>Graduation</button>
                  </li>
                </ul>
              </div>
              <div className="sm:col-span-2 p-4">
                <div className="font-semibold mb-4">All Steps</div>
                {[
                  "Market segmentation",
                  "Select a beachhead market",
                  "Build an end user profile",
                  
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center mb-4 p-4 bg-white shadow-sm rounded-lg"
                  >
                    <div className="w-full">
                      <div className="font-semibold">{step}</div>
                      <div className="flex items-center mt-2">
                        <div className="relative w-full h-6 bg-gray-200 rounded-lg overflow-hidden mr-4">
                          <div
                            className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-300 ease-linear"
                            style={{ width: `${progress[index]}%` }}
                          />
                          <div
                            className="absolute left-0 top-0 h-full w-1 bg-orange-500 transition-all duration-300 ease-linear"
                            style={{ left: `${progress[index]}%` }}
                          />
                          <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center text-sm text-gray-800">
                            {progress[index]}%
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress[index]}
                            onChange={(e) =>
                              handleProgressChange(
                                index,
                                Number(e.target.value)
                              )
                            }
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                        <button
                          className="active:scale-[.90] active:duration-70 hover:scale-[1.02] px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                          Complete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisEnt;
