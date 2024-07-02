import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
function CustomerMentor()
{
    return(
        
        <div className="flex">
            <section className="w-[66px]">
                    <SideBar/>  
            </section>
    
        <div className="flex-grow">
        <NavBar/>
        <div className="items-center px-4 py-4 m-auto mt-2 sm:mt-10 md:mt-1 p-8">
          <span className="text-slate-500 text-md">
            Dashboard / Mentors
          </span></div>
        <div className=" flex flex-col items-center justify-center p-20 border m-10"> </div>
        </div>
    </div>
    )
}
export default CustomerMentor;