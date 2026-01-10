'use client'

import { useGroup } from '@/contexts/GroupContext'
import { getGroupData, getTopUsers } from '@/lib/data'

export default function MostActiveUsers() {
  const { selectedGroup } = useGroup()
  
  if (!selectedGroup) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Active Users</h2>
          <p className="text-gray-600">Select a group to view active users</p>
        </div>
      </div>
    )
  }

  const { users } = getGroupData(selectedGroup.id)
  const topUsers = getTopUsers(users, 10)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Active Users</h2>
        <p className="text-gray-600">Top contributors by message count</p>
      </div>
      
      <div className="space-y-4">
        {topUsers.map((user, index) => {
          const maxMessages = topUsers[0].messageCount
          const percentage = (user.messageCount / maxMessages) * 100
          
          return (
            <div key={user.id} className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-700 font-semibold text-sm">
                {index + 1}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900">{user.name}</span>
                  <span className="text-sm text-gray-600">{user.messageCount} messages</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-gray-700 h-2 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
