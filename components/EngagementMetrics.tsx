'use client'

import { useGroup } from '@/contexts/GroupContext'
import { getGroupData, getTotalMessages, getAverageMessagesPerDay } from '@/lib/data'

export default function EngagementMetrics() {
  const { selectedGroup } = useGroup()
  
  if (!selectedGroup) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Engagement Metrics</h2>
          <p className="text-gray-600">Select a group to view engagement metrics</p>
        </div>
      </div>
    )
  }

  const { messages, users } = getGroupData(selectedGroup.id)
  const totalMessages = getTotalMessages(messages)
  const avgPerDay = getAverageMessagesPerDay(messages)
  const totalUsers = users.length
  const avgPerUser = totalUsers > 0 ? Math.round(totalMessages / totalUsers) : 0

  const metrics = [
    {
      title: 'Total Engagement',
      value: totalMessages.toLocaleString(),
      subtitle: 'All-time messages',
      icon: '📈',
    },
    {
      title: 'Daily Average',
      value: avgPerDay.toString(),
      subtitle: 'Messages per day',
      icon: '📅',
    },
    {
      title: 'User Average',
      value: avgPerUser.toString(),
      subtitle: 'Messages per user',
      icon: '👤',
    },
    {
      title: 'Activity Rate',
      value: `${Math.round((totalUsers / 100) * 100)}%`,
      subtitle: 'Active participation',
      icon: '⚡',
    },
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Engagement Metrics</h2>
        <p className="text-gray-600">Key performance indicators</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
          >
            <div className="text-3xl mb-2">{metric.icon}</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {metric.value}
            </div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              {metric.title}
            </div>
            <div className="text-xs text-gray-500">{metric.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
