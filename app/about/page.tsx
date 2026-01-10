import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Telegram Insights
          </h1>
          <p className="text-xl text-gray-600">
            Empowering Telegram group administrators with powerful analytics
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Telegram Insights was created to help group administrators understand their community better. 
              We believe that data-driven insights can help improve engagement, identify active members, 
              and optimize group management strategies.
            </p>
            <p className="text-gray-600">
              Our platform provides comprehensive analytics that help you make informed decisions about 
              your Telegram group's content, timing, and community engagement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Real-time message frequency tracking</li>
              <li>Active hours analysis to optimize posting times</li>
              <li>Top contributors identification</li>
              <li>Engagement metrics and trends</li>
              <li>User activity patterns</li>
              <li>Historical data visualization</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Security</h2>
            <p className="text-gray-600 mb-4">
              We take privacy seriously. All data is processed securely and we respect Telegram's 
              privacy policies. Group administrators have full control over what data is analyzed.
            </p>
            <p className="text-gray-600">
              We never store personal messages or user identities. All analytics are aggregated 
              and anonymized to protect user privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h2>
            <p className="text-gray-600 mb-4">
              Ready to gain insights into your Telegram group? Start by searching for your group 
              on our dashboard and explore the analytics.
            </p>
            <a
              href="/dashboard"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Go to Dashboard
            </a>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
