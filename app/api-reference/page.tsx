import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Code, Key, Database, Webhook } from 'lucide-react'

export default function APIReference() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            API Reference
          </h1>
          <p className="text-xl text-gray-600">
            Integrate Telegram Insights with your application
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Key className="w-6 h-6 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Authentication</h2>
            </div>
            <p className="text-gray-600 mb-4">
              To use the Telegram Bot API, you'll need to authenticate using a bot token. 
              Get your token from <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">@BotFather</a> on Telegram.
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <code>Authorization: Bearer YOUR_BOT_TOKEN</code>
            </div>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Telegram Bot API</h2>
            </div>
            <p className="text-gray-600 mb-4">
              The Telegram Bot API provides endpoints to fetch group data. Here are the key endpoints you'll need:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Group Info</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>GET https://api.telegram.org/bot{'{token}'}/getChat</code>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Group Members</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>GET https://api.telegram.org/bot{'{token}'}/getChatMembersCount</code>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Messages</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>GET https://api.telegram.org/bot{'{token}'}/getUpdates</code>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Example Integration</h2>
            </div>
            <p className="text-gray-600 mb-4">Here's how to fetch group data using the Telegram Bot API:</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`async function fetchGroupData(groupId) {
  const response = await fetch(
    \`https://api.telegram.org/bot\${BOT_TOKEN}/getChat?chat_id=\${groupId}\`
  );
  const data = await response.json();
  return data.result;
}`}</pre>
            </div>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Webhook className="w-6 h-6 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Webhooks</h2>
            </div>
            <p className="text-gray-600 mb-4">
              For real-time updates, you can set up webhooks to receive notifications when new messages 
              are posted in your group.
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <code>POST https://api.telegram.org/bot{'{token}'}/setWebhook</code>
            </div>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="https://core.telegram.org/bots/api" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
                  Official Telegram Bot API Documentation
                </a>
              </li>
              <li>
                <a href="https://core.telegram.org/bots" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
                  Telegram Bots Guide
                </a>
              </li>
              <li>
                <Link href="/docs" className="text-gray-900 underline">
                  Our Documentation
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
