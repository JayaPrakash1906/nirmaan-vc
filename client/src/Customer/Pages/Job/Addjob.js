import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import { FaArrowLeft} from "react-icons/fa";

function Addjob()
{
    return (
        <div className="flex">
            <section className="w-[66px]">
                    <SideBar/>  
            </section>
    
                     <div className="flex-grow">
                       <NavBar/>
                            <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
                                 <span className=" p-5 text-slate-500 text-md">
                                  Dashboard / Jobs / New Job
                                 </span>
                            </div>
                                    <div className="flex justify-start p-2 text-lg mx-12">
                                        <div className="flex items-center">
                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-gray-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white ms-2">
                                                 <span><FaArrowLeft /></span>
                                            </button>
                                                     <div className="mx-2">Jobs</div>
                                        </div>

                                    </div>
                                            <div className=" flex flex-col items-left justify-center p-4 m-10 border mt-6 ">
                                                <h3 className="text-gray-700 text-xl font-semibold mb-2">Post A New Job</h3>
                                                
                                                <div>
                                                      <div className="grid grid-cols-2 gap-4 items-center mb-12">
                                                          <input type="text" className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full p-2" placeholder="Role" />
                                                          <input type="text" className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full p-2" placeholder="Duration" />
                                                       </div>
                                                          <div className="grid grid-cols-2 gap-4 items-center ">
                                                          
                                                          <select id="options"
                                                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Gender" >
                                                                    <option value="Job Type">Job Type</option>
                                                                    <option value="Full Time"> Full Time</option>
                                                                    <option value="Part Time">Part Time</option>
                                                                    <option value="Intern">Intern</option>
                                                          </select>
                                                          <select id="options"
                                                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Gender" >
                                                                    <option value="Renumeration">Renumeration</option>
                                                                    <option value="">Male </option>
                                                                    <option value="option2">Female</option>
                                                                    <option value="option3">Others</option>
                                                          </select></div>
                                                        <div>
                                                            
                                                           </div>
                                                           <textarea id="description" name="description" rows="4" className="mt-12 w-full p-2 border border-blue-300 rounded resize-none" placeholder="Requirements" ></textarea>
                                                           <textarea id="description" name="description" rows="4" className="mt-12 w-full p-2 border border-blue-300 rounded mb-4 resize-none" placeholder="Description" ></textarea>
                                                           <div className="flex justify-center "> 
                                                <button type="Preview" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded hover:bg-gray-400  ">Preview</button>
                                                <button type="Job Post" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] px-4 py-2 bg-green-500 ml-2 text-white font-bold rounded hover:bg-green-600">Post Job</button></div>
                                                        </div>

                                                          <div className="px-6 py-4"></div>
                                                    
                                             </div>
                    </div>
        </div>
    );
}
export default Addjob;