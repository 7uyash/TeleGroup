'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Group } from '@/lib/data'

interface GroupContextType {
  selectedGroup: Group | null
  setSelectedGroup: (group: Group | null) => void
}

const GroupContext = createContext<GroupContextType | undefined>(undefined)

export function GroupProvider({ children }: { children: ReactNode }) {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null)

  return (
    <GroupContext.Provider value={{ selectedGroup, setSelectedGroup }}>
      {children}
    </GroupContext.Provider>
  )
}

export function useGroup() {
  const context = useContext(GroupContext)
  if (context === undefined) {
    throw new Error('useGroup must be used within a GroupProvider')
  }
  return context
}
