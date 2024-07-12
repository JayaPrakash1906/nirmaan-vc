import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

const MyConnections = () => {
  const [rowData] = useState([
    // Initially, there's no data
  ]);

  const columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Designation', field: 'designation', sortable: true, filter: true },
    { headerName: 'Organisation', field: 'organisation', sortable: true, filter: true },
    { headerName: 'Connect for', field: 'connectFor', sortable: true, filter: true },
    { headerName: 'Action', field: 'action' },
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
            Dashboard / Contacts / Connections
          </span>
        </div>
        <div className="flex justify-start p-10 text-md mt-4 mx-10">
          <span className="flex-grow">My Connections</span>
        </div>
        <div className="flex flex-col items-left justify-center p-2 mt-4 m-16 border">
          <div className="flex flex-col">
            <form className="p-4 w-[500px] relative">
              <div className="relative">
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px;] sm:w-[50%]"
                  placeholder="Search for connections"
                />
              </div>
            </form>
          </div>
          <div className="mt-4 ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={rowData}
              domLayout='autoHeight'
              pagination={true}
              paginationPageSize={10}
              overlayNoRowsTemplate='<span>No data available</span>'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyConnections;
