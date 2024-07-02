import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

function DisEnt() {
    return (
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
            <div className="flex-grow">
                <NavBar />
            </div>
        </div>
    );
}

export default DisEnt;
