import { ChevronLeft, ChevronRight } from 'lucide-react'
import toothImg from '../../assets/tooth.jpg'
import './CalendarView.css'

// Days of the week for the calendar
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const dates = [25, 26, 27, 28, 29, 30, 31]

// Time slots for each day - some are highlighted or have special styling
const timeSlots = {
  Mon: ['10:00', '11:00', '12:00'],
  Tue: ['08:00', { time: '09:00', highlighted: true }, '10:00'],
  Wed: ['12:00', '--', '13:00'],
  Thu: ['09:00', { time: '11:00', highlighted: true, opacity: 0.2, withDot: true }, '--'],
  Fri: ['--', '14:00', '16:00'],
  Sat: [
    { time: '12:00', highlighted: true, withDot: true, isJoinedWeekend: 'start' },
    '14:00',
    '15:00'
  ],
  Sun: [
    { time: '09:00', highlighted: true, withDot: true, isJoinedWeekend: 'end' },
    { time: '10:00', opacity: 0.8, style: { color: '#111827', fontWeight: '500' } },
    { time: '11:00', opacity: 0.8, style: { color: '#111827', fontWeight: '500' } }
  ]
}

const CalendarView = () => {
  // Helper to render individual time slots with proper styling
  const renderTimeSlot = (slot, dayName) => {
    if (slot === '--') {
      return <div className="time-slot empty">--</div>
    }
    
    if (typeof slot === 'object') {
      const classes = ['time-slot']
      if (slot.highlighted && !slot.noBox) classes.push('highlighted')
      if (slot.withDot) classes.push('with-dot')
      if (slot.isJoinedWeekend) {
        classes.push(`joined-weekend-${slot.isJoinedWeekend}`)
      }
      
      const style = {
        ...(slot.opacity ? { opacity: slot.opacity } : {}),
        ...(slot.style || {})
      }
      
      return (
        <div className={classes.join(' ')} style={style}>
          {slot.time}
        </div>
      )
    }
    
    return <div className="time-slot">{slot}</div>
  }

  // Render each day column with its time slots
  const renderCalendarDays = () => {
    return days.map((day, index) => (
      <div 
        key={day} 
        className={`calendar-day ${day === 'Tue' ? 'darker' : ''} ${['Sat', 'Sun'].includes(day) ? 'weekend' : ''}`}
        style={day === 'Sun' ? { opacity: 0.5 } : undefined}
      >
        <div className="day-number">
          <span className="day-name">{day}</span>
          <span className="date">{dates[index]}</span>
        </div>
        <div className="time-slots">
          {timeSlots[day].map((slot, slotIndex) => (
            <div key={`${day}-${slotIndex}`} className="time-slot-wrapper">
              {renderTimeSlot(slot, day)}
            </div>
          ))}
        </div>
      </div>
    ))
  }

  return (
    <div className="calendar-section">
      {/* Calendar header with month and navigation */}
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="calendar-nav">
          <button className="nav-button">
            <ChevronLeft size={18} />
          </button>
          <button className="nav-button">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Calendar grid with days and time slots */}
      <div className="calendar-grid">
        {renderCalendarDays()}
      </div>

      {/* Today's appointments preview */}
      <div className="appointment-cards">
        <div className="appointment-card dentist">
          <div className="appointment-icon">
            <img src={toothImg} alt="Dentist" className="appointment-icon-img" />
          </div>
          <div className="appointment-details">
            <h3>Dentist</h3>
            <div className="appointment-time">09:00 - 11:00</div>
            <div className="doctor-name">Dr. Cameron Williamson</div>
          </div>
        </div>
        <div className="appointment-card physio">
          <div className="appointment-icon">💪</div>
          <div className="appointment-details">
            <h3>Physiotherapy Appointment</h3>
            <div className="appointment-time">11:00 - 12:00</div>
            <div className="doctor-name">Dr. Kevin Jones</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarView
