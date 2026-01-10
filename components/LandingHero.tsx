'use client'

import Link from 'next/link'
import { BarChart3, Users, Clock, TrendingUp, MessageSquare, Activity } from 'lucide-react'

export default function LandingHero() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Message Frequency',
      description: 'Track daily message counts and identify activity patterns',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Active Hours',
      description: 'Discover when your group is most active throughout the day',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Top Contributors',
      description: 'Identify your most active members and their engagement',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Trends Analysis',
      description: 'Visualize growth and activity trends over time',
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Understand Your Telegram Group
            <br />
            <span className="text-gray-600">Like Never Before</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get comprehensive analytics and insights into your Telegram group activity. 
            Track messages, identify active hours, and discover your top contributors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              View Analytics
            </Link>
            <Link
              href="#features"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Message Activity
              </h3>
              <Activity className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-3">
              {[65, 80, 45, 90, 70, 55, 85].map((height, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-8 text-xs text-gray-500">{idx * 3}:00</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-700 h-2 rounded-full"
                      style={{ width: `${height}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Daily Trends
              </h3>
              <TrendingUp className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-end gap-2 h-32">
              {[40, 60, 45, 75, 55, 65, 80].map((height, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gray-700 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">Last 7 days</div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Top Users
              </h3>
              <Users className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-3">
              {['Alex', 'Sarah', 'Mike'].map((name, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
                    {name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{name}</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div
                        className="bg-gray-700 h-1.5 rounded-full"
                        style={{ width: `${100 - idx * 15}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-gray-900 mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
