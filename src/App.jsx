import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import DashboardMainContent from "./components/Dashboard/DashboardMainContent";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      {/* Sidebar Section */}
      <SideBar />

      {/* Main Section */}
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
