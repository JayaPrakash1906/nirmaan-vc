import React from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import { FaBookOpen, FaGraduationCap, FaRegBuilding } from "react-icons/fa";
function Home() {
    return (
            <div className="flex">
                <section id="SideBar" className="w-[66px]">
                        <SideBar />
                </section>
                <section id="" className="flex-grow">
                <NavBar /> 
                    <div className="items-center px-4 py-3 m-auto mt-2 sm:mt-10 md:mt-10">
                            <div className="md:flex md:flex-wrap lg:flex lg:flex-wrap max-w-screen-3xl">
                                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                    <div className="flex items-center px-5 py-6 shadow-xl rounded-md bg-gray-800 border border-blue-300">
                                            <div class="p-3 rounded-full bg-gray-900 bg-opacity-75">
                                                <FaRegBuilding  size="35" className="text-slate-400 hover:text-green-400"/>
                                            </div>
                                        <div className="mx-4">
                                            <h4 className="text-2xl font-bold text-white">159</h4>
                                            <div className="text-slate-400 font-semibold">Total Startups</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                    <div className="flex items-center px-5 py-6 shadow-lg rounded-md bg-gray-800">
                                        <div className="p-3 rounded-full bg-gray-900 bg-opacity-75">
                                            <FaBookOpen  size="35" className="text-slate-400 hover:text-green-400"/>
                                        </div>
                                        <div className="mx-4">
                                            <h4 className="text-2xl font-bold text-white">23</h4>
                                            <div className="text-slate-400 font-semibold">Active Startups</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                    <div className="flex items-center px-5 py-6 shadow-lg rounded-md bg-gray-800">
                                        <div className="p-3 rounded-full bg-gray-900 bg-opacity-75">
                                            <FaGraduationCap  size="35" className="text-slate-400 hover:text-green-400"/>
                                        </div>
                                        <div className="mx-4">
                                            <h4 className="text-2xl font-bold text-white">24</h4>
                                            <div className="text-slate-400 font-semibold">Graduated</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                    <div className="flex items-center px-5 py-6 shadow-lg rounded-md bg-gray-800">
                                        <div className="p-3 rounded-full bg-gray-900 bg-opacity-75">
                                            <FaBookOpen  size="35" className="text-slate-400 hover:text-green-400"/>
                                        </div>
                                        <div className="mx-4">
                                            <h4 className="text-2xl font-bold text-white">10</h4>
                                            <div className="text-slate-400 font-semibold">Dropped Out</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
    );
}
export default Home;