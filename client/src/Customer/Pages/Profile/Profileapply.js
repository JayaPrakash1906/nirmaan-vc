import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

function Profileapply() {
    return (
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
            <div className="flex-grow">
                <NavBar />
                <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
                        <span className=" p-5 text-slate-500 text-md">
                            Dashboard / AWS Credits /Apply
                        </span></div>

                <div className=" flex flex-col  p-2 m-14 mt-2 border ">
                        <div className="mb-6">
                         <h2 className="text-2xl font-bold mb-4">AWS Credits Application</h2>
                            <form>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="startupName" className="block text-gray-700 font-bold mb-2">Startup Name</label>
                                    <input type="text" id="startupName" name="startupName" className="w-full p-2 border border-gray-300 rounded"/>
                                </div>
    
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                    <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded"/>
                                </div>
                                </div>
                                        <div className="mb-6">
                                            <label htmlFor="description" className="block text-gray-700 font-bold mb-4 mt-6">Why would you like to apply?</label>
                                            <textarea id="description" name="description" rows="4" className="w-full p-2 border border-gray-300 rounded" placeholder="Description" ></textarea>
                                        </div>
                                            <div className="flex justify-center ">
                                                <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded hover:bg-gray-400 ">Cancel</button>
                                                <button type="submit" className="px-4 py-2 bg-green-500 ml-2 text-white font-bold rounded hover:bg-green-600">Apply</button></div>
                            </form>
                        </div>
                    </div>
            
            </div>
        </div>
    );
}

export default Profileapply;
