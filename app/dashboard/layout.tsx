'use client'

import { GroupProvider } from '@/contexts/GroupContext'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <GroupProvider>{children}</GroupProvider>
}
