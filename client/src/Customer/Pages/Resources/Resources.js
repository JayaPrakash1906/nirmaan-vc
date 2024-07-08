import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

function Resource() {
    return (
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
            <div className="flex-grow">
                <NavBar />
                <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className=" p-5 text-slate-500 text-md mb-2">
            Dashboard / Resources
          </span></div>
          <span className="p-10 text-md">
            Resources
          </span>
          <div className=" flex flex-col items-left justify-center p-4 m-10  mt-2 border ">
          <h2 className="text-gray-700 text-md font-semibold mb-2">All Resources</h2>
          
      <div className="px-6 py-4">
      <div className="relative">
            <input type="text" className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px;] sm:w-[25%]" placeholder="Search for Resources"></input>
            </div>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
                    <div>
                    <input type="Text" className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Select Date" ></input>
                    </div>
                    <div> 
                    <input type="Text" className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Select Time" ></input>
                    </div><div>
                    <input type="Text" className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Select Date" ></input>
                    </div>
                    <div> 
                    <input type="Text" className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Select Time" ></input>
                    </div>
                        
                
                    </div>
      </div>
      
      </div>
            
            
        </div>
    );
}

export default Resource;
