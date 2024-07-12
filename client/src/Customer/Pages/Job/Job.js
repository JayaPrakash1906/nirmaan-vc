import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

const Jobs = () => {
  const [rowData, setRowData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const columnDefs = [
    { headerName: "Role", field: "role", sortable: true, filter: true },
    { headerName: "Duration", field: "duration", sortable: true, filter: true },
    { headerName: "Requirements", field: "requirements", sortable: true, filter: true },
    { headerName: "Paid/Unpaid", field: "paid", sortable: true, filter: true },
    { headerName: "Created At", field: "createdAt", sortable: true, filter: true },
    { headerName: "Responses", field: "responses", sortable: true, filter: true },
    { headerName: "Actions", field: "actions", sortable: true, filter: true }
  ];

  useEffect(() => {
    // Fetch job data from API or some data source
    fetch('http://localhost:3000/jobs/new')
      .then(response => response.json())
      .then(data => setRowData(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = rowData.filter(job =>
    job.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>

      <div className="flex-grow">
        <NavBar />

        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className="p-5 text-slate-500 text-md">Dashboard / Jobs</span>
        </div>
        
        <div className="flex justify-start p-2 text-lg mx-12">
          <span className="flex-grow">Jobs</span>
          <button
            type="button"
            onClick={() => (window.location.href = "/jobs/new")}
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"
          >
            <span>Post A New Job</span>
          </button>
        </div>

        <div className="flex flex-col items-left justify-center p-2 m-16 border rounded-md">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">All Jobs</h2>
          
          <div className="flex flex-col">
            <form className="p-4 w-full relative">
              <div className="relative">
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[34px] w-full"
                  placeholder="Search Jobs"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </form>
          </div>

          <div className="ag-theme-alpine" style={{ height: 400, width: '100%', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={filteredData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
