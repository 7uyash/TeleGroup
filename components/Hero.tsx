'use client'

import { useGroup } from '@/contexts/GroupContext'
import { getGroupData, getTotalMessages, getAverageMessagesPerDay, getPeakHour, getHourlyActivity, getDailyActivity, getTopUsers } from '@/lib/data'
import { format, parseISO } from 'date-fns'

export default function Hero() {
  const { selectedGroup } = useGroup()
  
  if (!selectedGroup) {
    return (
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Select a Group to View Analytics
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Search for your Telegram group above to see detailed insights
            </p>
          </div>
        </div>
      </section>
    )
  }

  const { users, messages } = getGroupData(selectedGroup.id)
  const totalMessages = getTotalMessages(messages)
  const avgPerDay = getAverageMessagesPerDay(messages)
  const peakHour = getPeakHour(messages)
  const totalUsers = users.length
  
  const hourlyData = getHourlyActivity(messages)
  const dailyData = getDailyActivity(messages)
  const topUsers = getTopUsers(users, 3)
  const last7Days = dailyData.slice(-7)
  const maxHourly = Math.max(...hourlyData.map(h => h.messageCount), 1)
  const maxDaily = Math.max(...last7Days.map(d => d.messageCount), 1)

  const stats = [
    { label: 'Total Messages', value: totalMessages.toLocaleString(), icon: '💬' },
    { label: 'Active Members', value: totalUsers.toString(), icon: '👥' },
    { label: 'Avg Messages/Day', value: avgPerDay.toString(), icon: '📊' },
    { label: 'Peak Hour', value: `${peakHour}:00`, icon: '⏰' },
  ]

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {selectedGroup.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            @{selectedGroup.username} • {selectedGroup.members.toLocaleString()} members
          </p>
        </div>

        {/* Visual Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Visual Activity Preview */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
              Message Distribution
            </h3>
            <div className="space-y-2">
              {[0, 6, 12, 18].map((hour) => {
                const hourData = hourlyData.find(h => h.hour === hour)
                const count = hourData?.messageCount || 0
                const height = maxHourly > 0 ? (count / maxHourly) * 100 : 0
                return (
                  <div key={hour} className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-12">{hour}:00</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gray-700 h-full rounded-full transition-all"
                        style={{ width: `${Math.max(height, 5)}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
              Top Contributors
            </h3>
            <div className="space-y-3">
              {topUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.messageCount} messages</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
              Activity Timeline
            </h3>
            <div className="flex items-end gap-1 h-20">
              {last7Days.map((day, idx) => {
                const height = maxDaily > 0 ? (day.messageCount / maxDaily) * 100 : 0
                return (
                  <div
                    key={idx}
                    className="flex-1 bg-gray-700 rounded-t transition-all"
                    style={{ height: `${Math.max(height, 5)}%` }}
                    title={`${format(parseISO(day.date), 'MMM dd')}: ${day.messageCount} messages`}
                  />
                )
              })}
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Last 7 days
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
