'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useGroup } from '@/contexts/GroupContext'
import { getGroupData, getDailyActivity } from '@/lib/data'
import { format, parseISO } from 'date-fns'

export default function MessageTrends() {
  const { selectedGroup } = useGroup()
  
  if (!selectedGroup) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Trends</h2>
          <p className="text-gray-600">Select a group to view message trends</p>
        </div>
      </div>
    )
  }

  const { messages } = getGroupData(selectedGroup.id)
  const dailyData = getDailyActivity(messages)
  const last7Days = dailyData.slice(-7).map(item => ({
    date: format(parseISO(item.date), 'EEE'),
    messages: item.messageCount,
  }))

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Trends</h2>
        <p className="text-gray-600">Recent activity pattern (last 7 days)</p>
      </div>
      
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={last7Days}>
          <defs>
            <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#374151" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#374151" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '6px'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="messages" 
            stroke="#374151" 
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorMessages)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
