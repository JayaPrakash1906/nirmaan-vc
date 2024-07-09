import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

function DisEnt() {
    return (
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
            <div className="flex-grow">
                <NavBar />
                <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
                    <span className=" p-5 text-slate-500 text-md">
                        Dashboard / DE
                    </span>
                </div>
                    <span className="p-10 text-md font-semibold">
                        Disciplined Entrepreneurship
                    </span>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="bg-green-600 text-white p-2 m-10 mt-4">
                            Disciplined Entrepreneurship
                        </div>
                                <div className="flex">
                                    <div className="w-1/4 border-r border-gray-200 p-4 m-10 mt-7">
                                        <div className="mb-4 font-semibold">Select Module</div>
                                            <ul>
                                                <li className="flex items-center mb-2 p-2 rounded-lg bg-green-100">
                                                   <span className="mr-2"></span> Problem Identification
                                                </li>
                                                <li className="flex items-center mb-2 p-2 rounded-lg hover:bg-gray-100">
                                                     <span className="mr-2"></span> Problem Validation
                                                </li>
                                                <li className="flex items-center mb-2 p-2 rounded-lg hover:bg-gray-100">
                                                    <span className="mr-2"></span> Lead Customer EOI
                                                </li>
                                                    <li className="flex items-center mb-2 p-2 rounded-lg hover:bg-gray-100">
                                                <span className="mr-2"></span> Graduation
                                                </li>
                                            </ul>
                                        </div>
                                    <div className="w-2/3 p-4">
                                <div className="font-semibold mb-4">All Steps</div>
                                    {['Market segmentation', 'Select a beachhead market', 'Build an end user profile'].map((step, index) => (
                                        <div type="progressbar" className="flex items-center mb-4 p-4 bg-white shadow-sm rounded-lg">
                                            <div className="w-full">
                                                <div className="font-semibold">{step}</div>
                                                    <div className="h-4 w-full bg-gray-200 rounded mt-2 relative">
                                                        <div className="h-4 bg-green-400 rounded absolute top-0 left-0 w-0"></div>
                                                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-500 text-xs">0%</div>
                                                </div>
                                            </div>
                                                <button className="ml-4 bg-green-600 text-white rounded-md px-4 py-2">Complete</button>
                                        </div>
                                     ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default DisEnt;
