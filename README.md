# Telegram Group Insights Tool

A comprehensive analytics platform for Telegram group activity analysis with a beautiful landing page and powerful dashboard.

## 📄 Pages

- **Landing Page** (`/`): Marketing page with features, how it works, and call-to-action
- **Dashboard** (`/dashboard`): Full analytics dashboard with group selector and insights
- **About** (`/about`): Information about the platform and mission
- **Contact** (`/contact`): Contact form and support information
- **Documentation** (`/docs`): User guide and getting started instructions
- **API Reference** (`/api-reference`): API integration documentation

## ✨ Features

- **Landing Page**: Beautiful marketing page with visual previews and feature highlights
- **Dynamic Group Search**: Real-time search with suggestions as you type
- **Group Selection**: Easy-to-use group selector to choose which group to analyze
- **Message Frequency**: Track daily message counts over time with interactive charts
- **Active Hours**: Analyze when your group is most active throughout the day
- **Most Active Users**: Identify top contributors by message count
- **Engagement Metrics**: Key performance indicators for group activity
- **Message Trends**: Visualize recent activity patterns

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm start
```

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **date-fns** - Date utilities

## 🎨 Design Principles

- Clean, minimal UI with no color gradients
- Visual content over text in hero sections
- Limited color palette (grayscale with minimal accent)
- Responsive design for all screen sizes
- Professional landing page with clear navigation
- Intuitive group selection interface

## 🔌 API Integration

### Telegram Bot API

To integrate with real Telegram data, you'll need to use the **Telegram Bot API**. Here's how:

#### 1. Get a Bot Token

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the bot token you receive

#### 2. Add Bot to Your Group

1. Add your bot to the Telegram group you want to analyze
2. Make the bot an administrator (required to access group data)
3. Grant necessary permissions

#### 3. API Endpoints

The Telegram Bot API provides several endpoints for fetching group data:

**Get Group Information:**
```
GET https://api.telegram.org/bot{token}/getChat?chat_id={groupId}
```

**Get Group Members Count:**
```
GET https://api.telegram.org/bot{token}/getChatMembersCount?chat_id={groupId}
```

**Get Updates (Messages):**
```
GET https://api.telegram.org/bot{token}/getUpdates
```

**Set Webhook (for real-time updates):**
```
POST https://api.telegram.org/bot{token}/setWebhook
```

#### 4. Implementation Example

Replace the mock data functions in `lib/data.ts` with actual API calls:

```typescript
// Example: Fetch group data
async function fetchGroupData(groupId: string) {
  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/getChat?chat_id=${groupId}`
  );
  const data = await response.json();
  return data.result;
}

// Example: Fetch messages
async function fetchGroupMessages(groupId: string) {
  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?chat_id=${groupId}`
  );
  const data = await response.json();
  return data.result;
}
```

#### 5. Environment Variables

Create a `.env.local` file in the root directory:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_API_URL=https://api.telegram.org/bot
```

#### 6. Security Considerations

- **Never expose your bot token** in client-side code
- Use Next.js API routes (`app/api/`) to handle API calls server-side
- Store sensitive credentials in environment variables
- Implement rate limiting to avoid API quota issues
- Respect Telegram's rate limits and terms of service

### API Rate Limits

Telegram Bot API has rate limits:
- **30 messages per second** for sending messages
- **1 request per second** for getUpdates
- Use webhooks for better performance with high-volume groups

### Resources

- [Official Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [Telegram Bots Guide](https://core.telegram.org/bots)
- [Telegram Bot API Libraries](https://core.telegram.org/bots/samples)

## 📁 Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── api-reference/  # API documentation
│   ├── contact/        # Contact page
│   ├── dashboard/      # Analytics dashboard
│   ├── docs/           # User documentation
│   └── page.tsx        # Landing page
├── components/         # React components
├── contexts/           # React contexts (GroupContext)
├── lib/                # Utilities and data functions
└── public/             # Static assets
```

## 🔄 Current Implementation

The project currently uses **mock data** for demonstration purposes. To integrate with real Telegram data:

1. Replace `lib/data.ts` functions with API calls
2. Create API routes in `app/api/` for server-side requests
3. Update `components/GroupSelector.tsx` to fetch real groups
4. Implement authentication and authorization
5. Add error handling and loading states

## 🎯 Future Enhancements

- [ ] Real Telegram API integration
- [ ] User authentication system
- [ ] Export functionality for reports (PDF, CSV)
- [ ] Custom date range selection
- [ ] Word cloud analysis
- [ ] Sentiment analysis
- [ ] User engagement scoring
- [ ] Real-time updates via webhooks
- [ ] Multiple group comparison
- [ ] Scheduled reports via email
- [ ] Mobile app support

## 📝 License

This project is open source and available for use and modification.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, email support@telegraminsights.com or visit our [Contact page](/contact).

---

**Note**: This is a demonstration project. For production use, ensure proper security measures, API rate limiting, and compliance with Telegram's Terms of Service.
