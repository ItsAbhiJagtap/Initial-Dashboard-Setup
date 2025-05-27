import './ActivityFeed.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'

const ActivityFeed = () => {
  const data = [
    {
      day: 'Mon',
      mainBar: 65,
      secondBar: 45,
      thirdBar: 35,
      fourthBar: 55
    },
    {
      day: 'Tues',
      mainBar: 55,
      secondBar: 40,
      thirdBar: 30,
      fourthBar: 45,
      appointment: true
    },
    {
      day: 'Wed',
      mainBar: 60,
      secondBar: 50,
      thirdBar: 40,
      fourthBar: 35
    },
    {
      day: 'Thurs',
      mainBar: 70,
      secondBar: 45,
      thirdBar: 35,
      fourthBar: 50,
      appointment: true
    },
    {
      day: 'Fri',
      mainBar: 50,
      secondBar: 35,
      thirdBar: 30,
      fourthBar: 45,
      appointment: true
    },
    {
      day: 'Sat',
      mainBar: 45,
      secondBar: 35,
      thirdBar: 25,
      fourthBar: 40
    },
    {
      day: 'Sun',
      mainBar: 55,
      secondBar: 40,
      thirdBar: 30,
      fourthBar: 45
    }
  ]
  
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <div className="appointments-badge">
          3 appointment on this week
        </div>
      </div>
      
      <div className="activity-chart">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5
            }}
            barGap={2}
            barCategoryGap={30}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false}
              stroke="#E2E8F0"
            />
            <XAxis 
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 12 }}
            />
            <YAxis 
              hide={true}
            />
            <Bar 
              dataKey="mainBar" 
              fill="#E2E8F0"
              radius={[4, 4, 0, 0]}
              maxBarSize={12}
            />
            <Bar 
              dataKey="secondBar" 
              fill="#0EA5E9"
              radius={[4, 4, 0, 0]}
              maxBarSize={8}
            />
            <Bar 
              dataKey="thirdBar" 
              fill="#E2E8F0"
              radius={[4, 4, 0, 0]}
              maxBarSize={8}
            />
            <Bar 
              dataKey="fourthBar" 
              fill="#7C3AED"
              radius={[4, 4, 0, 0]}
              maxBarSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ActivityFeed
