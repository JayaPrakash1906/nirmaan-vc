import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import {  FaEye, FaPen } from "react-icons/fa";
import Foundernew from "../../components/Foundernew";
import {BiChevronDown } from 'react-icons/bi'



function Profile() {
    const[showFoundernew, setFoundernew] = useState(false);
    return (
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
            <div className="flex-grow">
                <NavBar />
            
                
                <div className=" flex flex-col items-center justify-center p-2 m-12 border font-semibold">
                    Apply for AWS Credits and get cloud credits worth $5000
                    <button type="button" onClick={() => window.location.href= "http://localhost:3000/Profile/addprofile"} className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 m-1  text-white"><span>Apply Now</span></button>
                </div>
                    <div className="flex flex-col p-2 m-12 border ">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold">About</h2>
                            <div className="flex space-x-1">  
                                    <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-gray-100 rounded-md bg-transparent transition-all ease-in-out md:text-xs font-semibold p-2 text-black">
                                        <FaEye />
                                    </button>
                                    <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-gray-100 rounded-md bg-transparent transition-all ease-in-out md:text-xs font-semibold p-2 text-black">
                                        <FaPen />
                                    </button>
                            </div>
                        </div>
                                <p className="text-gray-700">
                                    We are a knowledge-based company providing enhanced solutions to industries.
                                </p>
                    </div>
                            <div className="grid grid-cols-2 gap-4 p-2 m-12 border ">
                                <div className="flex flex-col shadow p-2 ">
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="text-xl font-semibold">Founders</h2>
                                        <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-gray-100 rounded-md bg-transparent transition-all ease-in-out md:text-xs font-semibold p-2 text-black" onClick={()=>setFoundernew(true)}>
                                            <FaPen />
                                        </button>
                                    </div>
                                       
                                </div>
                                <div className="flex flex-col shadow p-2  ">
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="text-xl font-semibold">Team Members</h2>
                                        <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-gray-100 rounded-md bg-transparent transition-all ease-in-out md:text-xs font-semibold p-2 text-black">
                                            <FaPen />
                                        </button>
                                    </div>
                                
                                </div>
                            </div>
                           
                                <div className="flex flex-col shadow p-2 m-12 border">
                                    <div className="flex justify-between items-center mt-2">
                                        <h2 className="text-xl font-semibold">Funding</h2>
                                    </div>
                                        <div className="grid grid-cols-4 gap-4  m-2 ">
                                            <div>
                                                <div className="   p-2 shadow font-bold">Rs.0</div>
                                            </div>
                                            <div>
                                                <div className="   p-2 shadow font-bold">Rs.0</div>
                                            </div>
                                            <div>
                                                <div className="   p-2 shadow font-bold">Rs.0</div>
                                            </div>
                                            <div>
                                                <div className="p-2 shadow font-bold ">Rs.0</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-start p-2 text-lg mx-12">
                                            <button className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"><span>View More</span></button>
                                        </div>
                                </div>
                                    
                                        <div className="grid grid-cols-2 gap-4  m-12 border ">
                                                        <div className="flex flex-col p-2 m-3 shadow ">
                                                            <div className="flex justify-between items-center mt-2">
                                                                <h2 className="text-xl font-semibold mb-4">About</h2>
                                                                    <div className="flex space-x-1">
                                                                        <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white">
                                                                        Add +
                                                                        </button>
                                                                    </div>     
                                                            </div> <div className="">1.Progress Review Templete </div>
                                                        </div>
                                                        <div className="flex flex-col p-2 m-3 shadow ">
                                                            <div className="flex justify-between items-center mt-2">
                                                                <h2 className="text-xl font-semibold mb-4">Awards & Recognitions</h2>
                                                                    <div className="flex space-x-1">
                                                                        <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white">
                                                                        Add +
                                                                        </button>
                                                                    </div>     
                                                            </div> <div className=""> </div>
                                                        </div>
                                            
                                            </div>
                                        


                
            </div>
             <Foundernew isVisible={showFoundernew} onClose={()=>setFoundernew(false)}>
        
            <div>
                    
                    <form onSubmit={setFoundernew}>
                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="text-xl font-semibold">Founder</h2>
                                    </div>
                    <div className="grid grid-cols-7 gap-4 ">
                        <div>
                        <input type="text" className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full " placeholder="Name" />
                        </div>
                        <div>
                        <input type="text" className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full " placeholder="Email" />
                        </div>
                        <div>
                        <input type="text" className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full " placeholder="Number" />
                        </div>
                        <select
        id="options"
        //value={selectedOption}
        //onChange={handleSelectChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Gender" >
        <option value="">Gender</option>
        <option value="option1">Male </option>
        <option value="option2">Female</option>
        <option value="option3">Others</option>
      </select>
                        <div>
                        <input type="text" className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full " placeholder="StudentID" />
                        </div>
                        <div>
                        <input type="text" className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full " placeholder="LinkedIn" />
                        </div>
                        <div>
                        <input type="text" className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full " placeholder="Role" />
                        </div>
                                  
                    </div>
                    </form>
            </div>
             </Foundernew>
        </div>
    );
}

export default Profile;
