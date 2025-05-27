import {
  LayoutDashboard,
  History,
  Calendar,
  ClipboardList,
  BarChart2,
  MessageCircle,
  LifeBuoy,
  Settings
} from "lucide-react";

import navLinks from "../../data/navLinks";
import "./Sidebar.css";

// Map icon strings to Lucide components
const iconMap = {
  "layout-dashboard": LayoutDashboard,
  "History": History,
  "calender": Calendar,
  "clipboard-list": ClipboardList,
  "bar-chart-2": BarChart2,
  "message-circle": MessageCircle,
  "support": LifeBuoy,
  "setting": Settings
};

const getIcon = (iconName) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent size={18} /> : null;
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">
        <span className="logo-blue">Health</span>
        <span className="logo-black">care.</span>
      </h1>

      <div className="nav-section">
        <p className="sidebar-section">General</p>
        <nav className="nav-items">
          {navLinks.general.map((item) => (
            <div className="nav-item" key={item.labels}>
              <span className="nav-icon">{getIcon(item.icon)}</span>
              <span className="nav-label">{item.labels}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="nav-section">
        <p className="sidebar-section">Tools</p>
        <nav className="nav-items">
          {navLinks.tools.map((item) => (
            <div className="nav-item" key={item.labels}>
              <span className="nav-icon">{getIcon(item.icon)}</span>
              <span className="nav-label">{item.labels}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="nav-section settings-section">
        <div className="nav-item">
          <span className="nav-icon">{getIcon(navLinks.settings.icon)}</span>
          <span className="nav-label">{navLinks.settings.labels}</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 