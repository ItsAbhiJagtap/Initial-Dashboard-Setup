import React from 'react'
import lungsImg from '../../assets/lungs.jpg'
import toothImg from '../../assets/tooth.jpg'
import boneImg from '../../assets/bone.jpg'
import './HealthStatusCards.css'

// Health status data with progress indicators
const healthCards = [
  {
    id: 'lungs',
    icon: lungsImg,
    title: 'Lungs',
    date: 'Date:- 26 Oct 2021',
    progress: 75,
    status: 'lungs'
  },
  {
    id: 'teeth',
    icon: toothImg,
    title: 'Teeth',
    date: 'Date:- 26 Oct 2021',
    progress: 75,
    status: 'teeth'
  },
  {
    id: 'bone',
    icon: boneImg,
    title: 'Bone',
    date: 'Date:- 26 Oct 2021',
    progress: 75,
    status: 'bone'
  }
]

// Single card component with progress bar
const HealthCard = ({ card }) => {
  return (
    <div className={`health-card ${card.status}`}>
      <img 
        src={card.icon} 
        alt={card.title} 
        className="card-image" 
        loading="eager"
        draggable="false"
      />
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-date">{card.date}</p>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${card.progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

// Container for all health status cards
const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      <div className="cards-container">
        {healthCards.map(card => (
          <HealthCard key={card.id} card={card} />
        ))}
      </div>
      <div className="details-row">
        <span className="details-text">Details</span>
        <span className="details-arrow">→</span>
      </div>
    </div>
  )
}

export default HealthStatusCards
