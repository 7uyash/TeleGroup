import Navbar from '@/components/Navbar'
import GroupSelector from '@/components/GroupSelector'
import Hero from '@/components/Hero'
import MessageFrequency from '@/components/MessageFrequency'
import ActiveHours from '@/components/ActiveHours'
import MostActiveUsers from '@/components/MostActiveUsers'
import EngagementMetrics from '@/components/EngagementMetrics'
import MessageTrends from '@/components/MessageTrends'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GroupSelector />
      </div>

      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <MessageFrequency />
            <ActiveHours />
          </div>
          
          <EngagementMetrics />
          
          <div className="grid lg:grid-cols-2 gap-8">
            <MostActiveUsers />
            <MessageTrends />
          </div>
        </div>
      </div>
    </main>
  )
}
