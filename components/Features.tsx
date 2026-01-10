'use client'

import { BarChart3, Users, Clock, TrendingUp, MessageSquare, Activity, Zap, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Comprehensive Analytics',
      description: 'Get detailed insights into message frequency, user activity, and engagement metrics.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Active Hours Analysis',
      description: 'Identify peak activity times to optimize your group engagement strategies.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Insights',
      description: 'Discover your most active members and understand participation patterns.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Trend Tracking',
      description: 'Monitor growth and activity trends over time with visual charts.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Data',
      description: 'Access up-to-date analytics with real-time data processing.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy First',
      description: 'Your data is secure. We respect privacy and handle information responsibly.',
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand and improve your Telegram group engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-gray-900 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
