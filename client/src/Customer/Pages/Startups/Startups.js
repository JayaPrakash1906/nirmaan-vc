import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

function CustomerStartup() {
    return (
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
            <div className="flex-grow">
                <NavBar />
                <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
                        <span className=" p-5 text-slate-500 text-md">
                            Dashboard / Startups
                        </span>
                        <h5 className="text-lg font-semibold mt-2 ml-10 ">Startups</h5></div>

                <div className=" flex flex-col  p-2 m-14 mt-2 border ">
                        <div className="mb-6">
                        <div className="grid grid-cols-2 gap-4 mt-6 ml-4  ">
                <input type="text" className="border border-blue-300 rounded-md bg-white-500 mr-8 md:h-[34px] sm:w-[50%]" placeholder="Search for startups" />  </div>       
                <div className="overflow-x-auto sm:-mx-5 lg:-mx-8">
                   <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
                     <div className="overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-white border-b">
                         
                            <tr>

                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Name
                            </th>                            
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Cohort
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Sector
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Mentor
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Actions
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
            </div></div>
        </div>
    );
}

export default CustomerStartup;
