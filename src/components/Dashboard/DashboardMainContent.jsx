import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import ActivityFeed from "./ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule";
import "./DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      {/* TOP ROW */}
      <div className="top-row">
        <div className="left-panel">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="right-panel">
          <CalendarView />
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="bottom-row">
        <div className="left-panel">
          <ActivityFeed />
        </div>
        <div className="right-panel">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
