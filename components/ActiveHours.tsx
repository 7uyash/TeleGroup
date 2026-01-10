'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useGroup } from '@/contexts/GroupContext'
import { getGroupData, getHourlyActivity } from '@/lib/data'

export default function ActiveHours() {
  const { selectedGroup } = useGroup()
  
  if (!selectedGroup) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Active Hours</h2>
          <p className="text-gray-600">Select a group to view active hours</p>
        </div>
      </div>
    )
  }

  const { messages } = getGroupData(selectedGroup.id)
  const hourlyData = getHourlyActivity(messages).map(item => ({
    hour: `${item.hour}:00`,
    messages: item.messageCount,
  }))

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Active Hours</h2>
        <p className="text-gray-600">Message distribution throughout the day</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={hourlyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="hour" 
            stroke="#6b7280"
            tick={{ fontSize: 11 }}
            angle={-45}
            textAnchor="end"
            height={80}
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
          <Bar 
            dataKey="messages" 
            fill="#374151"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
