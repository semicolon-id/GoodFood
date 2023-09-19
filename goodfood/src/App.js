import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Pages from "./pages/pages";
import { SidebarProvider } from "./components/UI/Sidebar/sidebarContext";

function App() {
  return (
    <div className="">
      <Router>
        <SidebarProvider>
          <div className="App">
            <Navbar />
          </div>
          <div className="pt-14">
            <Pages />
          </div>
        </SidebarProvider>
      </Router>
    </div>
  );
}

export default App;
