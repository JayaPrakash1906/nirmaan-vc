import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import { FaEye, FaPen } from "react-icons/fa";
import Foundernew from "../../components/Foundernew";
import Membernew from "../../components/Membernew";
import Uploadocument from "../../components/Uploadocument";
import Awards from "../../components/Awards";
import Aboutedit from "../../components/Aboutedit";

function Profile() {
  const [showFoundernew, setFoundernew] = useState(false);
  const [showMembernew, setMembernew] = useState(false);
  const [showUploadocument, setUploadocument] = useState(false);
  const [showAwards, setAwards] = useState(false);
  const [showAboutedit, setAboutedit] = useState(false);
  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>
      <div className="flex-grow">
        <NavBar />

        <div className=" flex flex-col items-center justify-center p-2 m-12 border font-semibold">
          Apply for AWS Credits and get cloud credits worth $5000
          <button
            type="button"
            onClick={() =>
              (window.location.href =
                "http://localhost:3000/Profile/addprofile")
            }
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 m-1  text-white"
          >
            <span>Apply Now</span>
          </button>
        </div>
        <div className="flex flex-col p-2 m-12 border ">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">About</h2>
            <div className="flex space-x-1">
              <button
                type="button"
                className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-gray-100 rounded-md bg-transparent transition-all ease-in-out md:text-xs font-semibold p-2 text-black"
              >
                <FaEye />
              </button>
              <button
                type="button"
                className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-gray-100 rounded-md bg-transparent transition-all ease-in-out md:text-xs font-semibold p-2 text-black"
                onClick={() => setAboutedit(true)}
              >
                <FaPen />
              </button>
            </div>
          </div>
          <p className="text-gray-700 ">
            We are a knowledge-based company providing enhanced solutions to
            industries.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 p-2 m-12 border ">
          <div className="flex flex-col shadow p-2 ">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Founders</h2>
              <button
                type="button"
                className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-gray-100 rounded-md bg-transparent transition-all ease-in-out md:text-xs font-semibold p-2 text-black"
                onClick={() => setFoundernew(true)}
              >
                <FaPen />
              </button>
            </div>
          </div>
          <div className="flex flex-col shadow p-2  ">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Team Members</h2>
              <button
                type="button"
                className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-gray-100 rounded-md bg-transparent transition-all ease-in-out md:text-xs font-semibold p-2 text-black"
                onClick={() => setMembernew(true)}
              >
                <FaPen />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow p-2 m-12 border">
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-xl font-semibold">Funding</h2>
          </div>
          <div className="grid grid-cols-4 gap-4  m-2 ">
            <div>
              <div className=" p-2 shadow font-bold">Rs.0</div>
            </div>
            <div>
              <div className="   p-2 shadow font-bold ">Rs.0</div>
            </div>
            <div>
              <div className="   p-2 shadow font-bold">Rs.0</div>
            </div>
            <div>
              <div className="p-2 shadow font-bold ">Rs.0</div>
            </div>
          </div>
          <div className="flex justify-start p-2 text-lg mx-12">
            <button className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white">
              <span>View More</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4  m-12 border ">
          <div className="flex flex-col p-2 m-3 shadow ">
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <div className="flex space-x-1">
                <button
                  type="button"
                  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white mb-2"
                  onClick={() => setUploadocument(true)}
                >
                  Add +
                </button>
              </div>
            </div>{" "}
            <div className="">1.Progress Review Templete</div>
            <div>
              {" "}
              <input
                type="text"
                className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 "
                placeholder="No document upload"
              />{" "}
            </div>
          </div>
          <div className="flex flex-col p-2 m-3 shadow ">
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-xl font-semibold mb-4">
                Awards & Recognitions
              </h2>
              <div className="flex space-x-1">
                <button
                  type="button"
                  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"
                  onClick={() => setAwards(true)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foundernew
        isVisible={showFoundernew}
        onClose={() => setFoundernew(false)}
      >
        <div>
          <form onSubmit={setFoundernew}>
            <div className="flex justify-start p-4 text-lg ">
              <span className="flex-grow font-bold">Contacts</span>
              <button
                type="button"
                className="text-white bg-gray-300 p-1 rounded-md font-bold mr-2"
              >
                cancel
              </button>
              <button
                type="button"
                className="text-white bg-gray-600 p-1 rounded-md font-bold"
              >
                update
              </button>
            </div>
            <div className="grid grid-cols-7 gap-4 ">
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Number"
                />
              </div>
              <select
                id="options"
                //value={selectedOption}
                //onChange={handleSelectChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                placeholder="Gender"
              >
                <option value="">Gender</option>
                <option value="option1">Male </option>
                <option value="option2">Female</option>
                <option value="option3">Others</option>
              </select>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="StudentID"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="LinkedIn"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Role"
                />
              </div>
            </div>
          </form>
        </div>
      </Foundernew>

      <Membernew isVisible={showMembernew} onClose={() => setMembernew(false)}>
        <div>
          <form onSubmit={setMembernew}>
            <div className="flex justify-start p-4 text-lg ">
              <span className="flex-grow font-bold">Member</span>
              <button
                type="button"
                className="text-white bg-gray-300 p-1 rounded-md font-bold mr-2"
              >
                cancel
              </button>
              <button
                type="button"
                className="text-white bg-gray-600 p-1 rounded-md font-bold"
              >
                update
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4 ">
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Number"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Designation"
                />
              </div>
            </div>
          </form>
        </div>
      </Membernew>

      <Uploadocument
        isVisible={showUploadocument}
        onClose={() => setUploadocument(false)}
      >
        <div>
          <form onSubmit={setUploadocument}>
            <div className="flex justify-start p-2 text-lg ">
              <span className="flex-grow font-bold">Upload</span>
              <button
                type="button"
                className="text-white bg-gray-300 p-1 rounded-md font-bold mr-2"
              >
                close
              </button>
              <button
                type="button"
                className="text-white bg-gray-600 p-1 rounded-md font-bold"
              >
                Submit
              </button>
            </div>
            <div className="grid grid-rows-2 gap-4 ">
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Document Title"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full "
                  placeholder="Upload pdf"
                />
              </div>
              *Upload Pdf Only
            </div>
          </form>
        </div>
      </Uploadocument>

      <Awards isVisible={showAwards} onClose={() => setAwards(false)}>
        <div>
          <form>
            <div className="flex justify-start p-2 text-lg">
              <span className="flex-grow font-semibold">
                Add New Award / Recognitions
              </span>
              <button
                type="button"
                className="text-red-500 bg-gray-100 p-1 rounded-sm font-semibold text-sm mr-2"
                onClick={() => setAwards(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-green-600 p-1 rounded-sm font-semibold text-sm"
              >
                Save
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-md mb-2 ml-3">Award / Recognition Name</h5>
                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0"
                />
              </div>
              <div>
                <h5 className="text-md mb-2 ml-3">Award / Recognition Org</h5>
                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0"
                />
              </div>
              <div>
                <h5 className="text-md mb-2 ml-3">Prize Money (if any)</h5>
                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0"
                />
              </div>
              <div>
                <h5 className="text-md mb-2 ml-3">Awarded Date</h5>
                <input
                  type="Date"
                  className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0"
                />
              </div>
              <div>
                <h5 className="text-md  ml-3">Description</h5>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="mt-6 w-full p-2 border border-gray-300 rounded resize-none"
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
                <h5 className="text-md mb-2 ml-3">
                  Award / Recognition document (if any)
                </h5>
                <input
                  type="file"
                  className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0"
                />
              </div>
            </div>
          </form>
        </div>
      </Awards>

      <Aboutedit isVisible={showAboutedit} onClose={() => setAboutedit(false)}>
        <div>
          <form onSubmit={setAboutedit}>
            <textarea
              id="dAbout"
              name="About"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded resize-none"
              placeholder="About"
            ></textarea>
          </form>
          <div className="flex">
            <button
              type="button"
              className="active:scale-[.90] active:duration-70 hover:scale-[1.02] text-white mt-2 bg-green-600 p-2 mb-2 items-end justify-end rounded-sm font-semibold ml-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </Aboutedit>
    </div>
  );
}

export default Profile;
