import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Sidebar/sidebarContext";

import logo from "../../../assets/components/UI/Logo.png";
import Emoticon from "../../../assets/components/UI/Navbar/Emoticon.png";

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="fixed font-sans bg-white">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`grid md:grid-cols-9 grid-cols-9 justify-between items-center md:px-4 py-3 white border-b h-[87px] w-screen ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } transition-transform duration-300 ease-in-out`}
      >
        {!isSidebarOpen && (
          <button
            className="md:col-span-2 pl-2 flex w-[240px] -ml-7"
            onClick={toggleSidebar}
          >
            <div className="flex my-auto ml-10">
              <img src={logo} alt="" className="w-8 h-8 mr-2" />
              <h1 className="  text-[#5A67BA] font-bold text-md mt-1 ">
                GOODFOOD
              </h1>
            </div>
          </button>
        )}
        <div className="md:col-span-2 md:relative block  ">
          <span className="absolute top-1 -right-80 text-[#627B87] text-xl font-medium">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <input
            type="text"
            className="bg-[#F9FAFB] w-32 md:w-[625px] md:h-[32px] rounded-md py-1 pl-2 text-[#1F384C] ml-32 md:ml-0"
            placeholder="Search"
          />
        </div>

        <div className="ml-[215px] md:ml-[450px] gap-2 flex md:col-span-3 w-52 md:hidden">
          <div className="mt-1   flex gap-1">
            <p className="text-[#1F384C] hidden md:block ">Delicious Burger </p>
            <span className="#1F384C mt-1 hidden md:block">
              {/* <ion-icon name="chevron-down-outline"></ion-icon> */}
            </span>
          </div>
          <div className="w-[32px] h-[32px] bg-[#FFE6CC] rounded-full pl-2 pt-2">
            <img src={Emoticon} alt="" onClick={toggleCard} />
          </div>
          {isCardVisible && (
            <div className="absolute bg-white   border rounded-md p-2  md:hidden -ml-24 mt-10 w-36 text-[#5A67BA]">
              <button className="flex border-b py-1">
                <span>
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                <p className="text-sm ml-1">Delicious Burger</p>
              </button>
              <button className="flex py-2">
                <ion-icon name="notifications-outline"></ion-icon>
                <p className="text-sm ml-1"> notification </p>
              </button>
            </div>
          )}
        </div>

        <div className="ml-[215px] md:ml-[450px] gap-2 md:flex md:col-span-3 w-52 hidden">
          <div className="w-[32px] h-[32px] bg-[#FFE6CC] rounded-full pl-2 pt-2">
            <img src={Emoticon} alt="" />
          </div>
          <div className="mt-1 flex gap-1"  >
            <p className="text-[#1F384C] hidden md:block ">Delicious Burger </p>
            <span className="#1F384C mt-1">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          </div>
        </div>

        <div className=" md:col-span-2 ml-52">
          <div className="bg-[#EB5757] h-3 w-3 rounded-full absolute top-[25px] right-[30px] md:right-[80px] border-2 border-white z-10"></div>
          <span className="text-2xl text-[#B0C3CC] hidden md:block">
            <ion-icon name="notifications-outline"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
