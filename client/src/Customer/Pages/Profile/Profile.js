import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

function Profile() {
    return (
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
            <div className="flex-grow">
                <NavBar />
                <div className=" flex flex-col items-center justify-center p-8 shadow-md">
                    Apply for AWS Credits and get cloud credits worth $5000
                    <button type="button" className="text-white bg-green-600 p-2 m-2 rounded-md font-bold">
                        Apply now
                    </button>
                </div>
                <div className="p-10 shadow-lg">

                </div>
            </div>
        </div>
    );
}

export default Profile;
