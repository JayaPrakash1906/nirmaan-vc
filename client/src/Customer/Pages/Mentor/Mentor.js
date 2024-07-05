import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import src from "../../../img/image.png"
function CustomerMentor()
{
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
          <form className='p-4 w-[500px] relative'>
            <div className="relative flex items-center">
  <input
    type="text"
    className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px] sm:w-[50%]"
    placeholder="Search"
  />
  <button
    type="button"
    className="text-white bg-gray-600 p-1 m-2 rounded-md font-bold ml-auto"
  >
    Add Mentor Hour
  </button>
</div>

          </form>
          
          
          </div>
    
            </div>
        </div>
    )
}
export default CustomerMentor;