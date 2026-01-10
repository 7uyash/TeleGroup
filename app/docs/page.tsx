import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Book, Code, BarChart3, Users, Clock, TrendingUp } from 'lucide-react'

export default function Documentation() {
  const sections = [
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Getting Started',
      description: 'Learn how to set up and use Telegram Insights',
      content: [
        'Search for your Telegram group by username or name',
        'Select a group from the search results',
        'View comprehensive analytics and insights',
        'Explore different metrics and charts',
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics Features',
      description: 'Understand the different analytics available',
      content: [
        'Message Frequency: Track daily message counts over time',
        'Active Hours: See when your group is most active',
        'Top Contributors: Identify your most active members',
        'Engagement Metrics: View key performance indicators',
        'Message Trends: Analyze recent activity patterns',
      ],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'API Integration',
      description: 'Integrate Telegram Insights with your application',
      content: [
        'Use the Telegram Bot API to fetch group data',
        'Authenticate using your bot token',
        'Fetch messages and user data',
        'Process and display analytics',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about Telegram Insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-gray-900 mb-4">{section.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm">{section.description}</p>
              <ul className="space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Access the Dashboard</h3>
              <p>Navigate to the <Link href="/dashboard" className="text-gray-900 underline">Dashboard</Link> page and use the search bar to find your Telegram group.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Select Your Group</h3>
              <p>Type your group's username (e.g., @techcommunity) or name in the search field. Select your group from the suggestions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: View Analytics</h3>
              <p>Once selected, you'll see comprehensive analytics including message frequency, active hours, top contributors, and more.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/dashboard"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Try It Now
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
