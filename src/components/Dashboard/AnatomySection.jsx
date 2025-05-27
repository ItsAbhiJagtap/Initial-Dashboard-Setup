import humanAnatomyImg from '../../assets/humanAnatomyImg.jpeg'
import qrScanImg from '../../assets/qr-scan.png'
import { ZoomIn } from 'lucide-react'
import './AnatomySection.css'

const healthIndicators = [
  {
    id: 'qr-scan-1',
    icon: <img 
      src="/src/assets/qr-scan.png" 
      alt="QR Scan 1"
      className="qr-scan-icon"
      width="20"
      height="20"
      loading="eager"
    />,
    position: { top: '19%', left: '51%' },
    status: 'qr-scan-icon-only'
  },
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
  },
  {
    id: 'qr-scan-2',
    icon: <img 
      src="/src/assets/qr-scan.png" 
      alt="QR Scan 2"
      className="qr-scan-icon"
      width="20"
      height="20"
      loading="eager"
    />,
    position: { bottom: '23%', right: '51%' },
    status: 'qr-scan-icon-only'
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
            {indicator.label && <span className="indicator-label">{indicator.label}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnatomySection
