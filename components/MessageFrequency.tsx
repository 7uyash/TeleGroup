'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useGroup } from '@/contexts/GroupContext'
import { getGroupData, getDailyActivity } from '@/lib/data'
import { format, parseISO } from 'date-fns'

export default function MessageFrequency() {
  const { selectedGroup } = useGroup()
  
  if (!selectedGroup) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Frequency</h2>
          <p className="text-gray-600">Select a group to view message frequency</p>
        </div>
      </div>
    )
  }

  const { messages } = getGroupData(selectedGroup.id)
  const dailyData = getDailyActivity(messages).map(item => ({
    date: format(parseISO(item.date), 'MMM dd'),
    messages: item.messageCount,
  }))

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Frequency</h2>
        <p className="text-gray-600">Daily message count over time</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dailyData}>
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
          <Line 
            type="monotone" 
            dataKey="messages" 
            stroke="#374151" 
            strokeWidth={2}
            dot={{ fill: '#374151', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
