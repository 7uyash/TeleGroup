'use client'

import { usePathname } from 'next/navigation'

export default function Providers({ children }: { children: React.ReactNode }) {
  // This component ensures navigation hooks work properly
  return <>{children}</>
}
