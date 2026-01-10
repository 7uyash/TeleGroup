import { format, subDays } from 'date-fns'

export interface Message {
  id: string
  userId: string
  userName: string
  timestamp: Date
  content: string
  groupId: string
}

export interface User {
  id: string
  name: string
  username?: string
  messageCount: number
  avatar?: string
  groupId: string
}

export interface Group {
  id: string
  name: string
  username: string
  members: number
  description?: string
}

export interface HourlyActivity {
  hour: number
  messageCount: number
}

export interface DailyActivity {
  date: string
  messageCount: number
}

// Generate mock data for a specific group
function generateMockDataForGroup(groupId: string, groupName: string): { users: User[], messages: Message[] } {
  const userNames = [
    'Alex Johnson', 'Sarah Chen', 'Mike Rodriguez', 'Emma Wilson',
    'David Kim', 'Lisa Anderson', 'Tom Brown', 'Sophie Martin',
    'James Taylor', 'Olivia Davis', 'Noah Martinez', 'Ava Garcia'
  ]
  
  const users: User[] = userNames.map((name, idx) => ({
    id: `${groupId}-user-${idx + 1}`,
    name,
    username: name.toLowerCase().replace(' ', ''),
    messageCount: Math.floor(Math.random() * 300) + 50,
    groupId,
  }))

  const messages: Message[] = []
  const now = new Date()
  
  // Generate messages for the last 30 days
  for (let i = 0; i < 30; i++) {
    const date = subDays(now, i)
    const messagesPerDay = Math.floor(Math.random() * 50) + 20
    
    for (let j = 0; j < messagesPerDay; j++) {
      const hour = Math.floor(Math.random() * 24)
      const minute = Math.floor(Math.random() * 60)
      const timestamp = new Date(date)
      timestamp.setHours(hour, minute, 0)
      
      const user = users[Math.floor(Math.random() * users.length)]
      messages.push({
        id: `${groupId}-${i}-${j}`,
        userId: user.id,
        userName: user.name,
        timestamp,
        content: `Message ${j + 1} on ${format(date, 'MMM dd')}`,
        groupId,
      })
    }
  }

  return { users, messages }
}

// Mock groups with different data
export const mockGroups: Group[] = [
  { 
    id: '1', 
    name: 'Tech Community', 
    username: 'techcommunity',
    members: 1250,
    description: 'A community for tech enthusiasts'
  },
  { 
    id: '2', 
    name: 'Designers Hub', 
    username: 'designershub',
    members: 890,
    description: 'Creative designers sharing ideas'
  },
  { 
    id: '3', 
    name: 'Startup Founders', 
    username: 'startupfounders',
    members: 450,
    description: 'Network for startup founders'
  },
  {
    id: '4',
    name: 'Web Developers',
    username: 'webdevs',
    members: 2100,
    description: 'Web development discussions'
  },
  {
    id: '5',
    name: 'AI & ML',
    username: 'aiml',
    members: 3200,
    description: 'Artificial Intelligence and Machine Learning'
  },
]

// Store data for each group
const groupDataCache: { [groupId: string]: { users: User[], messages: Message[] } } = {}

export function getGroupData(groupId: string): { users: User[], messages: Message[] } {
  if (!groupDataCache[groupId]) {
    const group = mockGroups.find(g => g.id === groupId)
    if (group) {
      groupDataCache[groupId] = generateMockDataForGroup(groupId, group.name)
    } else {
      return { users: [], messages: [] }
    }
  }
  return groupDataCache[groupId]
}

export function searchGroups(query: string): Group[] {
  if (!query.trim()) return mockGroups
  
  const lowerQuery = query.toLowerCase().replace('@', '')
  return mockGroups.filter(group => 
    group.name.toLowerCase().includes(lowerQuery) ||
    group.username.toLowerCase().includes(lowerQuery)
  )
}

export function getGroupByUsername(username: string): Group | undefined {
  const cleanUsername = username.replace('@', '').toLowerCase()
  return mockGroups.find(g => g.username.toLowerCase() === cleanUsername)
}

export function getHourlyActivity(messages: Message[]): HourlyActivity[] {
  const hourly: { [key: number]: number } = {}
  
  for (let i = 0; i < 24; i++) {
    hourly[i] = 0
  }
  
  messages.forEach(msg => {
    const hour = msg.timestamp.getHours()
    hourly[hour] = (hourly[hour] || 0) + 1
  })
  
  return Object.entries(hourly).map(([hour, count]) => ({
    hour: parseInt(hour),
    messageCount: count,
  }))
}

export function getDailyActivity(messages: Message[]): DailyActivity[] {
  const daily: { [key: string]: number } = {}
  
  messages.forEach(msg => {
    const date = format(msg.timestamp, 'yyyy-MM-dd')
    daily[date] = (daily[date] || 0) + 1
  })
  
  return Object.entries(daily)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({
      date,
      messageCount: count,
    }))
}

export function getTopUsers(users: User[], limit: number = 10): User[] {
  return [...users]
    .sort((a, b) => b.messageCount - a.messageCount)
    .slice(0, limit)
}

export function getTotalMessages(messages: Message[]): number {
  return messages.length
}

export function getAverageMessagesPerDay(messages: Message[]): number {
  const days = new Set(messages.map(m => format(m.timestamp, 'yyyy-MM-dd'))).size
  return days > 0 ? Math.round(messages.length / days) : 0
}

export function getPeakHour(messages: Message[]): number {
  const hourly = getHourlyActivity(messages)
  if (hourly.length === 0) return 0
  const peak = hourly.reduce((max, curr) => 
    curr.messageCount > max.messageCount ? curr : max
  )
  return peak.hour
}
