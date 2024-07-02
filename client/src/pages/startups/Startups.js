import React from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar';
import { FaEllipsisV, FaFileExcel, FaFilter} from "react-icons/fa";
// import { IoMdPersonAdd } from "react-icons/io";
// import { GrConnect } from "react-icons/gr";
function Startups() {
  return (
    <div className="flex">
        <section id="sidebar" className="w-[65px;]">
                    <SideBar />
        </section>
        <section className="flex-grow">
                <NavBar />
                <div className="items-center px-4 py-4 m-auto mt-2 sm:mt-10 md:mt-1">
                        <span className="text-slate-500 text-sm">Dashboard / Startups</span>
                        <div className="mt-4 font-semibold text-slate-600">START-UPS</div>
                        <div className="pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="rounded-sm shadow-md border border-blue-200 rounded-xl col-span-full">
                                          <div className="p-3 flex flex-col">
                                                <div className="rounded-sm ">
                                                      <div className="flex-row">
                                                            <button type="button" onClick={() => window.location.href= "http://localhost:3000/startup/new"} className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"><span>Add New Startup</span></button>
                                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-gray-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white ms-2"><span><FaFilter /></span></button>
                                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-violet-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white ms-2"><span><FaFileExcel /></span></button>
                                                            <input type="text" className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px;] sm:w-[50%]" placeholder="Search Startups"></input>
                                                      </div>
                                                </div>
                                                <div className="m-7">
                                                  <div className="overflow-auto rounded-lg shadow hidden md:block">
                                                  <table className="w-full">
                                                          <thead className="bg-gray-25 border-b-2 border-gray-100">
                                                                  <tr>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">Name</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">Cohort</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">Sector</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">Mentor</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">Current Stage</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">Actions</th>
                                                                  </tr>
                                                          </thead>
                                                          <tbody className="divide-y divide-gray-100">
                                                              <tr className="bg-white">
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/"  className="font-bold text-value-500 hover:underline">Seat of Joy</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">Jan 2023</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-60">Automotive</span>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">Not associated</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">Problem  Identification</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/"><FaEllipsisV /></a>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                      </div>
                                                      <div className=".grid grid-cols-1 gap-4 md:hidden">
                                                          <div className="bg-white space-y-4 p-4 rounded-lg shadow-lg"> 
                                                              <div className="flex items-center space-x-2 test-sm">
                                                                  <div>
                                                                      <a href="/.." className="text-blue font-bold-500 hover:underline">Prabhu RajaGopal</a>
                                                                  </div>
                                                                  <div className="text-gray-500">Startegic Advisor</div>
                                                                  <div>
                                                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-60">SOMFIN</span>
                                                                  </div>
                                                              </div>
                                                              <div className="text-sm text-gray-700">
                                                                    12346778
                                                              </div>
                                                              <div className="text-sm font-medium text-black">
                                                                    23454564
                                                              </div>
                                                          </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                            </div>  
                        </div>
                </div>
        </section>
    </div>
  )
}
export default Startups;