import React from "react";

import logo from "../../../assets/components/UI/Logo.png";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`font-sans ${isOpen ? "translate-x-0" : "translate-x-full "}`}
    >
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 w-64 h-screen transition-transform transform duration-300 ease-in-out bg-[#F1F2F7] z-50"
        aria-label="Sidebar"
      >
       

        <div className="h-full overflow-y-auto font-sans">
          {/* Tombol "GOODFOOD" untuk menutup Sidebar */}
          <button
            type="button"
            className="md:col-span-2 pl-2 flex w-[250px] border-b h-[87px] -ml-3"
            onClick={toggleSidebar}
          >
            <div className="flex my-auto ml-10">
              <img src={logo} alt="" className="w-8 h-8 mr-2" />
              <h1 className="text-[#5A67BA] font-bold text-md mt-1">
                GOODFOOD
              </h1>
            </div>
          </button>

          <h3 className="text-[#737791] text-sm text-left ml-10 -mb-5 mt-8 tracking-widest">
            MENU
          </h3>

          <ul class="space-y-2 font-medium text-[#737791] ">
            <li className="flex justify-start">
              <Link
                to="/"
                className="flex items-center p-2 w-[200px] h-[42px] rounded-lg hover:text-[#5A6ACF] hover:bg-gray-100 dark:hover:bg-[#707fdd2c] group mt-7 mb-3 w-48 mx-auto justify-center pl-5"
              >
                <span className="text-lg text-[#737791] group-hover:text-[#5A6ACF]">
                  <ion-icon name="stats-chart"></ion-icon>
                </span>
                <span className="flex-1 ml-5 whitespace-nowrap text-left">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="flex justify-start ">
              <Link
                to="/FoodOrder"
                className="flex items-center p-2 text-gray-900 w-[200px] h-[42px] rounded-lg hover:text-[#5A6ACF] hover:bg-gray-100 dark:hover:bg-[#707fdd2c] group my-2 mb-3 w-48 mx-auto justify-start pl-5"
              >
                <span className="text-lg text-[#737791] group-hover:text-[#5A6ACF]">
                  <ion-icon name="cart"></ion-icon>
                </span>
                <span className="flex-1 ml-5 whitespace-nowrap text-left text-[#737791] group-hover:text-[#5A6ACF] ">
                  Food Order
                </span>
              </Link>
            </li>
            <li className="flex justify-start ">
              <Link
                to="/ManageMenu"
                class="flex items-center p-2 text-gray-900  h-[42px] rounded-lg hover:text-[#5A6ACF] hover:bg-gray-100 dark:hover:bg-[#707fdd2c] group my-2 mb-3 w-48 mx-auto pl-5"
                pl-5
                justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-[#5A6ACF]">

                  <ion-icon name="newspaper"></ion-icon>
                </span>
                <span class="flex-1 ml-5 whitespace-nowrap text-left text-[#737791] group-hover:text-[#5A6ACF] ">
                  Manage Menu
                </span>
              </Link>
            </li>
            <li className="flex justify-start ">
              <Link
                to="/CustomerReview"
                class="flex items-center p-2 text-gray-900 h-[42px] rounded-lg hover:text-[#5A6ACF] hover:bg-gray-100 dark:hover:bg-[#707fdd2c] group my-2 mb-3 w-48 mx-auto pl-5"
                pl-5
                justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-[#5A6ACF]">
                  <ion-icon name="chatbubble-ellipses"></ion-icon>
                </span>
                <span class="flex-1 ml-5 whitespace-nowrap text-left text-[#737791] group-hover:text-[#5A6ACF] ">
                  Customer Review
                </span>
              </Link>
            </li>
          </ul>

          <h3 className=" text-[#737791] text-sm text-left ml-10 mt-8 mb-2 tracking-widest">
            OTHERS
          </h3>

          <ul class="space-y-2 font-medium text-[#737791] ">
            <li className="flex justify-start ">
              <Link
                to="/Settings"
                class="flex items-center p-2 text-gray-900 w-[200px] h-[42px] rounded-lg hover:text-[#5A6ACF] hover:bg-gray-100 dark:hover:bg-[#707fdd2c] group my-2 mb-3 w-48 mx-auto pl-5"
                pl-5
                justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-[#5A6ACF]">

                  <ion-icon name="settings"></ion-icon>
                </span>
                <span class="flex-1 ml-5 whitespace-nowrap text-left text-[#737791] group-hover:text-[#5A6ACF] ">
                  Settings
                </span>
              </Link>
            </li>
            <li className="flex justify-start ">
              <Link
                to="/Payment"
                class="flex items-center p-2 text-gray-900 w-[200px] h-[42px] rounded-lg hover:text-[#5A6ACF] hover:bg-gray-100 dark:hover:bg-[#707fdd2c] group my-2 mb-3 w-48 mx-auto pl-5"
                pl-5
                justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-[#5A6ACF]">

                  <ion-icon name="wallet"></ion-icon>
                </span>
                <span class="flex-1 ml-5 whitespace-nowrap text-left text-[#737791] group-hover:text-[#5A6ACF] ">
                  Payment
                </span>
              </Link>
            </li>
            <li className="flex justify-start ">
              <Link
                to="/Account"
                class="flex items-center p-2 text-gray-900 w-[200px] h-[42px] rounded-lg hover:text-[#5A6ACF] hover:bg-gray-100 dark:hover:bg-[#707fdd2c] group my-2 mb-3 w-48 mx-auto pl-5"
                pl-5
                justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-[#5A6ACF]">

                  <ion-icon name="person"></ion-icon>
                </span>
                <span class="flex-1 ml-5 whitespace-nowrap text-left text-[#737791] group-hover:text-[#5A6ACF] ">
                  Account
                </span>
              </Link>
            </li>

            <li className="flex justify-start">
              <Link
                to="/Help"
                class="flex items-center p-2 text-gray-900 w-[200px] h-[42px] rounded-lg hover:text-[#5A6ACF] hover:bg-gray-100 dark:hover:bg-[#707fdd2c] group my-2 mb-3 w-48 mx-auto pl-5"
                pl-5
                justify-start
              >
                <span className="text-lg text-[#737791] group-hover:text-[#5A6ACF]">

                  <ion-icon name="alert-circle"></ion-icon>
                </span>
                <span class="flex-1 ml-5 whitespace-nowrap text-left text-[#737791] group-hover:text-[#5A6ACF] ">
                  Help
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
