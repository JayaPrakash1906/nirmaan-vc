import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

const contacts = [
  {
    name: "prasath",
    designation: "tech_support",
    organisation: "OIE",
    connectFor: "tech",
  },
  {
    name: "Aakarsh Naidu",
    designation: "CEO",
    organisation: "Startupreneur",
    connectFor: "Mentoring",
  },
];

function CustomerContacts() {
  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>

      <div className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8 bg-gray-200">
          <span className=" p-5 text-slate-500 text-md ">
            Dashboard / Contacts
          </span>
        </div>
        <div className="flex justify-start p-10 text-md mx-10">
          <span className="flex-grow">Contacts</span>
          <button
            type="button"
            className="text-white bg-gray-600 p-1 rounded-md font-bold"
          >
            My Connections
          </button>
        </div>
        <div className=" flex flex-col items-left justify-center p-2 m-16 border ">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">Contacts</h2>
          <div className="flex flex-col">
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
                    <tbody>
                      {contacts.map((contact, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="text-sm text-gray-900 font-roboto px-6 py-4 whitespace-nowrap">
                            {contact.name}
                          </td>
                          <td className="text-sm text-gray-900 font-roboto px-6 py-4 whitespace-nowrap">
                            {contact.designation}
                          </td>
                          <td className="text-sm text-gray-900 font-roboto px-6 py-4 whitespace-nowrap">
                            {contact.organisation}
                          </td>
                          <td className="text-sm text-gray-900 font-roboto px-6 py-4 whitespace-nowrap">
                            {contact.connectFor}
                          </td>
                          <td className="text-sm text-gray-900 font-roboto px-6 py-4 whitespace-nowrap">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                              Connect
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerContacts;
