import './UpcomingSchedule.css'

const SimpleAppointmentCard = ({ title, time, icon, className = '' }) => {
  // Convert title to lowercase and remove spaces for class name
  const typeClass = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`simple-appointment-card ${typeClass} ${className}`}>
      <div className="card-icon">{icon}</div>
      <div className="appointment-content">
        <div className="appointment-title">{title}</div>
        <div className="appointment-time">{time}</div>
      </div>
    </div>
  )
}

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      
      <div className="schedule-group">
        <h3>On Thursday</h3>
        <div className="appointments-list">
          <div className="appointment-row">
            <SimpleAppointmentCard
              title="Health Checkup"
              time="11:00 AM"
              icon="💉"
            />
            <SimpleAppointmentCard
              title="Ophthalmologist"
              time="14:00 PM"
              icon="👁️"
            />
          </div>
        </div>
      </div>

      <div className="schedule-group">
        <h3>On Saturday</h3>
        <div className="appointments-list">
          <div className="appointment-row">
            <SimpleAppointmentCard
              title="Cardiologist"
              time="12:00 PM"
              icon="❤️"
              className="partial-width"
            />
            <SimpleAppointmentCard
              title="Neurologist"
              time="16:00 PM"
              icon="👨‍⚕️"
              className="partial-width"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingSchedule
