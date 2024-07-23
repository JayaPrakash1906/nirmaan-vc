import React, {useState, useEffect} from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar';
import { FaUserTag } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { GrConnect } from "react-icons/gr";
function Connections() {
  return (
    <div className="flex">
        <section id='sidebar' className="w-[65px;]">
                <SideBar />
        </section>
        <section className="flex-grow">
            <NavBar />
            <div className="items-center px-4 py-4 m-auto mt-2 sm:mt-10 md:mt-1">
                <span className="text-slate-500 text-sm">Dashboard / Connections</span>
                      <div className="mt-4 font-semibold text-slate-600">CONNECTIONS</div> 
                      {/* GRID */}
                      <div className="pt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="rounded-sm shadow-md border border-blue-200 rounded-xl col-span-full">
                                          <div className="p-3 flex flex-col">
                                                <div className="rounded-sm ">
                                                      <div className="flex-row">
                                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-sm font-semibold p-2 text-white"><span><IoMdPersonAdd /></span></button>
                                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-blue-300 rounded-md bg-purple-600 transition-all ease-in-out md:text-sm font-semibold p-2 text-white ms-4"><span><FaUserTag /></span></button>
                                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-blue-300 rounded-md bg-yellow-500 transition-all ease-in-out md:text-sm font-semibold p-2 text-white ms-4"><GrConnect /></button>
                                                            <input type="text" className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px;] sm:w-[80%]" placeholder="Search Tagged connections"></input>
                                                      </div>
                                                </div>
                                                <div className="m-7">
                                                  <div className="overflow-auto rounded-lg shadow hidden md:block">
                                                  <table className="w-full">
                                                          <thead className="bg-gray-25 border-b-2 border-gray-100">
                                                                  <tr>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">STARTUP/ MENTOR</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">CONTACT</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">ORGANIZATION</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">CONNECT FOR</th>
                                                                      <th className="p-3 text-green-500 font-semibold tracking-wide text-left">CONTACT</th>
                                                                  </tr>
                                                          </thead>
                                                          <tbody className="divide-y divide-gray-100">
                                                              <tr className="bg-white">
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/"  className="font-bold text-value-500 hover:underline">Prof. Prabhu Rajagopal</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">+12344566</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-60">SOMFIN</span>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">Strategic Advisor</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">+1234567</a>
                                                                  </td>
                                                              </tr>
                                                              <tr className="bg-white">
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/"  className="font-bold text-value-500 hover:underline">Prof. Prabhu Rajagopal</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">+12344566</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-60">SOMFIN</span>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">Strategic Advisor</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">+1234567</a>
                                                                  </td>  
                                                              </tr>
                                                              <tr className="bg-white">
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/"  className="font-bold text-value-500 hover:underline">Prof. Prabhu Rajagopal</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">+12344566</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-60">SOMFIN</span>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">Strategic Advisor</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">+1234567</a>
                                                                  </td>
                                                              </tr>
                                                              <tr className="bg-white">
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/"  className="font-bold text-value-500 hover:underline">Prof. Prabhu Rajagopal</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">+12344566</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-60">SOMFIN</span>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">Strategic Advisor</a>
                                                                  </td>
                                                                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                                                      <a href="/">+1234567</a>
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
                      {/* END */}
            </div>
        </section>

    </div>
  )
}

export default Connections;