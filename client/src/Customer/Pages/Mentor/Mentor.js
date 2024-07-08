import React,  { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import src from "../../../img/image.png"
import Addmentor from "../../components/Addmentor";

function CustomerMentor()

{
  const[showAddmentor, setAddmentor] = useState(false);
    return(
        
        <div className="flex">
            <section className="w-[66px]">
                    <SideBar/>  
            </section>
    
        <div className="flex-grow">
        <NavBar/>
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className=" p-5 text-slate-500 text-md">
            Dashboard / Mentors
          </span></div>
          <span className="p-10 text-md">
            Mentors
          </span>
          <div className=" flex flex-col items-left justify-center p-4 m-10 border ">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">Current Mentors</h2>
          <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 align-left border-b-4">
      <div className="px-6 py-4">
        
        <div className="flex items-left">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={src}
          />
          <div className="text-left">
            <div className="text-gray-900 font-bold text-lg mb-1">S.Gopal</div>
            <p className="text-gray-600 text-sm">No designation</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className=" flex flex-col items-left justify-center p-4 m-10 border ">
    <span className="  text-xl font-semibold text-gray-700">
            All Mentors
          </span>
          <div className="flex justify-start p-10 text-md mx-8">
          <span className="flex-grow">
          <input
      type="text"
      className="border border-blue-300 rounded-md bg-white-500 mr-8 md:h-[34px] sm:w-[50%]"
      placeholder="Search"
    />
          </span>
          <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white" onClick={()=>setAddmentor(true)}>
          Add Mentor Hour
        </button></div>
        <div className="overflow-x-auto sm:-mx-5 lg:-mx-8">
                   <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
                     <div className="overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-white border-b">
                         
                            <tr>

                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Profile
                            </th>                            
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Name
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Institute
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Startups
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            View
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Request
                            </th>   
                            
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                              <td colSpan="7" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                No data available
                              </td>
                              </tr>
                          </tbody>
                      </table>
                      </div></div></div> 
          </div>
          
    
            </div>
            <Addmentor isVisible={showAddmentor} onClose={()=>setAddmentor(false)}>
        
        <div>
                
                <form onSubmit={setAddmentor}>
                <div className="flex justify-start p-2 text-lg ">
      <span className="flex-grow font-bold">
         Add Mentor Hour
      </span>
     </div>
                <div className="grid grid-cols-2 gap-4 ">
                    <div>
                      <select id="options"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Gender" >
                                    <option value="">Select Startup</option>
                                    <option value="nirmaan">Nirmaan </option>
                                    <option value="nirmaan">Nirmaan </option></select>
                    </div>
                    <div>
                      <select id="options"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Gender" >
                                    <option value="Mentor">Select Mentor</option>
                                    <option value="sir">OIE </option></select>
                    </div>
                    <div>
                    <input type="Date" className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Select Date" ></input>
                    </div>
                    <div> 
                    <input type="Time" className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Select Time" ></input>
                    </div>
                    </div>
                    </form>
                    <div><textarea id="description" name="description" rows="4" className=" mt-6 w-full p-2 border border-gray-300 rounded resize-none" placeholder="Description" ></textarea></div>
                    <button type="button" className=" active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white">
                    Update
                    </button>
            </div>
             </Addmentor>
        </div>
    )
}
export default CustomerMentor;