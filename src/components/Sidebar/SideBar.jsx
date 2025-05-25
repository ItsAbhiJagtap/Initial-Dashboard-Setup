import React from "react";
import {
  Home,
  History,
  CalendarDays,
  Stethoscope,
  BarChart2,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings
} from "lucide-react";

import "./Sidebar.css";

const topNavItems = [
  { icon: <Home size={18} />, label: "Dashboard" },
  { icon: <History size={18} />, label: "History" },
  { icon: <CalendarDays size={18} />, label: "Calendar" },
  { icon: <Stethoscope size={18} />, label: "Appointments" },
  { icon: <BarChart2 size={18} />, label: "Statistics" },
  { icon: <FlaskConical size={18} />, label: "Tests" },
  { icon: <MessageCircle size={18} />, label: "Chat" },
  { icon: <LifeBuoy size={18} />, label: "Support" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">
        <span className="logo-primary">Health</span>
        <span className="logo-accent">care.</span>
      </h1>

      <p className="sidebar-section">General</p>

      <nav className="nav-top">
        {topNavItems.map((item) => (
          <div className="nav-item" key={item.label}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="nav-bottom">
        <div className="nav-item">
          <span className="nav-icon"><Settings size={18} /></span>
          <span className="nav-label">Setting</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
