import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../../components/NavBar"
const RaiseRequest = () => {
    
    return(
        
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
  
                <div className="flex-grow">
                    <NavBar />
         
                        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8 ">
                            <span className=" p-5 text-slate-500 text-md ">
                                 Home / Raise a Request
                            </span>
                        </div>
                        <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">Raise a Request</h1>
      </div>
      <div className="bg-white shadow-md rounded p-8 w-1/2 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Raise a Request</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Category
          </label>
          <select
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Type of Request</option>
            <option>Request regarding Members</option>
            <option>Request regarding Contact / Connections</option>
            <option>Request regarding Documentation</option>
            <option>Request regarding Booking of Space / Conference Rooms</option>
            <option>Request regarding Network Connectivity / Facilities</option>
            <option>Request regarding Funding</option>
            <option>Request regarding Internship Certificate</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Add a description of your request
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            rows="5" placeholder="Description"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="active:scale-[.90] active:duration-70 hover:scale-[1.02] bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Request
          </button>
        </div>
      </div>
    </div>

            
                </div>
        

        
        </div>
        
    
    )
}
export default RaiseRequest;