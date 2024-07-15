import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import src from "../../../img/image.png";
import Addmentor from "../../components/Addmentor";
import { AgGridReact } from 'ag-grid-react'; // Ensure AgGridReact is imported
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


function CustomerMentor() {
  const [showAddmentor, setAddmentor] = useState(false);
  const columnDefs = [
    { headerName: "Profile", field: "profile" },
    { headerName: "Name", field: "name" },
    { headerName: "Institute", field: "institute" },
    { headerName: "Startups", field: "startups" },
    { headerName: "View", field: "view" },
    { headerName: "Request", field: "request" }
  ];

  // Sample rowData for demonstration purposes
  const rowData = [
    { profile: "Profile 1", name: "John Doe", institute: "ABC Institute", startups: 5, view: "View", request: "Request" },
    { profile: "Profile 2", name: "Jane Smith", institute: "XYZ Institute", startups: 3, view: "View", request: "Request" }
  ];
    
  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>

      <div className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className="p-5 text-slate-500 text-md">
            Dashboard / Mentors
          </span>
        </div>
        <span className="p-10 text-md">Mentors</span>
        <div className="flex flex-col items-left justify-center p-4 m-10 border">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">
            Current Mentors
          </h2>
          <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 align-left border-b-4">
            <div className="px-6 py-4">
              <div className="flex items-left">
                <img className="w-16 h-16 rounded-full mr-4" src={src} alt="Profile"/>
                <div className="text-left">
                  <div className="text-gray-900 font-bold text-lg mb-1">
                    S.Gopal
                  </div>
                  <p className="text-gray-600 text-sm">No designation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-left justify-center p-4 m-10 border">
          <span className="text-xl font-semibold text-gray-700">
            All Mentors
          </span>
          <div className="flex justify-start p-10 text-md mx-8">
            <span className="flex-grow">
              <input
                type="text"
                className="border border-blue-300 rounded-md bg-white-500 mr-8 md:h-[34px] sm:w-[50%]"
                placeholder="Search"
              />
            </span>
            <button
              type="button"
              className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"
              onClick={() => setAddmentor(true)}
            >
              Add Mentor Hour
            </button>
          </div>
          <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              domLayout='autoHeight'
              pagination={true}
              paginationPageSize={10}
              overlayNoRowsTemplate='<span class="ag-overlay-loading-center">No data available</span>'
            />
          </div>
        </div>
        <Addmentor isVisible={showAddmentor} onClose={() => setAddmentor(false)}>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex justify-start p-2 text-lg">
                <span className="flex-grow font-bold">Add Mentor Hour</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <select
                    id="options"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="Select Startup"
                  >
                    <option value="">Select Startup</option>
                    <option value="nirmaan">Nirmaan</option>
                  </select>
                </div>
                <div>
                  <select
                    id="options"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="Select Mentor"
                  >
                    <option value="Mentor">Select Mentor</option>
                    <option value="sir">OIE</option>
                    <option value='CFI'>CFI</option>
                  </select>
                </div>
                <div>
                  <input
                    type="date"
                    className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="Select Date"
                  />
                </div>
                <div>
                  <input
                    type="time"
                    className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="Select Time"
                  />
                </div>
              </div>
            </form>
            <div>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="mt-6 w-full p-2 border border-gray-300 rounded resize-none"
                placeholder="Description"
              ></textarea>
            </div>
            <button
              type="button"
              className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"
            >
              Update
            </button>
          </div>
        </Addmentor>
      </div>
    </div>
  );
}

export default CustomerMentor;
