import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import Sidebar from './components/Sidebar/SideBar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent'
import CalendarView from './components/Dashboard/CalendarView'
import UpcomingSchedule from './components/Dashboard/UpcomingSchedule'
import avatar from './assets/avatar.jpg'
import notificationIcon from './assets/notifcation.png'
import './styles/App.css'

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen)

  return (
    <div className="app-layout">
      {/* Mobile menu toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left side - Navigation and branding */}
      <aside className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Main area - Dashboard content */}
      <main className="dashboard-container">
        <div className="top-header">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-actions">
            <div className="notification-bell">
              <img src={notificationIcon} alt="Notifications" className="notification-icon" />
            </div>
            <button 
              className="mobile-sidebar-toggle"
              onClick={toggleRightSidebar}
              aria-label="Toggle calendar"
            >
              <img src={avatar} alt="User" className="user-avatar mobile-only" />
            </button>
          </div>
        </div>
        <div className="dashboard-content">
          <DashboardMainContent />
        </div>
      </main>

      {/* Right side - Calendar and upcoming stuff */}
      <aside className={`right-sidebar ${isRightSidebarOpen ? 'open' : ''}`}>
        <div className="right-sidebar-header">
          <button 
            className="close-sidebar"
            onClick={() => setIsRightSidebarOpen(false)}
            aria-label="Close calendar"
          >
            <X size={24} />
          </button>
          <div className="user-actions">
            <button className="add-button">+</button>
            <img src={avatar} alt="User" className="user-avatar desktop-only" />
          </div>
        </div>
        <div className="right-sidebar-content">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {(isSidebarOpen || isRightSidebarOpen) && (
        <div 
          className="mobile-overlay"
          onClick={() => {
            setIsSidebarOpen(false)
            setIsRightSidebarOpen(false)
          }}
        />
      )}
    </div>
  )
}

export default App 