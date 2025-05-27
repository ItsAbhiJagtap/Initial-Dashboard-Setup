import humanAnatomyImg from '../../assets/humanAnatomyImg.jpeg'
import { ZoomIn } from 'lucide-react'
import './AnatomySection.css'

const healthIndicators = [
  {
    id: 'heart',
    icon: '❤️',
    label: 'Healthy Heart',
    position: { top: '19%', left: '57%' },
    status: 'heart'
  },
  {
    id: 'leg',
    icon: '🦿',
    label: 'Healthy Knee',
    position: { bottom: '23%', right: '57%' },
    status: 'leg'
  }
]

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="human-body-container">
        <div className="zoom-icon">
          <ZoomIn size={18} strokeWidth={2.5} />
        </div>
        <img 
          src={humanAnatomyImg}
          alt="Human anatomy" 
          className="human-body-image"
          loading="eager"
          fetchpriority="high"
          width="400"
          height="430"
          decoding="async"
        />
        {healthIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className={`health-indicator ${indicator.status}`}
            style={indicator.position}
          >
            <span className="indicator-icon">{indicator.icon}</span>
            <span className="indicator-label">{indicator.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnatomySection
