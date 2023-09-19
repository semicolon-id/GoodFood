import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/dashboard'; 
import FoodOrder from '../components/foodorder/foodorder'; 
import NotFound from './NotFound';
import { useSidebar } from "../components/UI/Sidebar/sidebarContext";

function Pages() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`transition-transform duration-300 ease-in-out ${isSidebarOpen ? "md:ml-[240px] " : "ml-0"}`}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/FoodOrder" element={<FoodOrder />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

     
    </div>
  );
}

export default Pages;
