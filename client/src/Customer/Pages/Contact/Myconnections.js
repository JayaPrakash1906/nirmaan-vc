import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
const Myconnections = () => {
    
    return(
        
        <div className="flex">
        <section className="w-[66px]">
          <SideBar />
        </section>
  
        <div className="flex-grow">
          <NavBar />
          <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8 ">
          <span className=" p-5 text-slate-500 text-md ">
            Dashboard / Contacts / Connections
          </span>
        </div>
        <div className="flex justify-start p-10 text-md mt-4 mx-10">
          <span className="flex-grow">My Connections</span></div>
                <div className=" flex flex-col items-left justify-center p-2 mt-4 m-16 border ">
          
          <div className="flex flex-col">
            <form className="p-4 w-[500px] relative">
              <div className="relative">
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px;] sm:w-[50%]"
                  placeholder="Search for connections"
                ></input>
              </div>
            </form>
          
            <div className="overflow-x-auto sm:-mx-5 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Designation
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Organisation
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Connect for
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td
                          colSpan="7"
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                        >
                          No data available
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Myconnections;