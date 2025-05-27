import { Search } from 'lucide-react'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent'
import CalendarView from './components/Dashboard/CalendarView'
import UpcomingSchedule from './components/Dashboard/UpcomingSchedule'
import avatar from './assets/avatar.jpg'
import notificationIcon from './assets/notifcation.png'
import './styles/App.css'

export function App() {
  return (
    <div className="app-layout">
      {/* Left side - Navigation and branding */}
      <aside className="sidebar-container">
        <Sidebar />
      </aside>

      {/* Main area - Dashboard content */}
      <main className="dashboard-container">
        <div className="top-header">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search" />
          </div>
          <div className="notification-bell">
            <img src={notificationIcon} alt="Notifications" className="notification-icon" />
          </div>
        </div>
        <div className="dashboard-content">
          <DashboardMainContent />
        </div>
      </main>

      {/* Right side - Calendar and upcoming stuff */}
      <aside className="right-sidebar">
        <div className="right-sidebar-header">
          <div className="user-actions">
            <button className="add-button">+</button>
            <img src={avatar} alt="User" className="user-avatar" />
          </div>
        </div>
        <div className="right-sidebar-content">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </aside>
    </div>
  )
}

export default App 