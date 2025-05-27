import './DashboardMainContent.css'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'

const DashboardMainContent = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="time-filter">
          <span className="time-label">This Week</span>
          <span className="arrow">▼</span>
        </div>
      </div>
      
      <div className="dashboard-grid">
        <div className="anatomy-container">
          <AnatomySection />
        </div>

        <div className="status-cards">
          <HealthStatusCards />
        </div>
      </div>

      <ActivityFeed />

      <div className="mobile-calendar-section">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  )
}

export default DashboardMainContent 