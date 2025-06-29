# TrueFans JAM - Tour Management Platform

A comprehensive music platform connecting artists with intimate venue hosts for unique live music experiences.

## 🚀 Features

- **Tour Management**: Create, manage, and promote tours with rich media support
- **Artist Profiles**: Comprehensive artist profiles with social media integration
- **Host Discovery**: Find and connect with venue hosts
- **Show Applications**: Streamlined booking and application process
- **Payment Processing**: Integrated financial transactions via Manifest
- **Real-time Updates**: Live notifications and status updates
- **Mobile Responsive**: Optimized for all devices

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + PostGIS)
- **State Management**: Zustand + React Query
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **File Uploads**: React Dropzone + Supabase Storage
- **External APIs**: Spotify, BandsInTown, Manifest Financial, Google Maps

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd truefans-jam-tour
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   # Fill in your API keys and Supabase credentials
   ```

4. **Setup Supabase**
   - Create a new Supabase project
   - Run the database migrations
   - Configure RLS policies
   - Setup Storage bucket for 'tour-media'

5. **Start development server**
   ```bash
   pnpm dev
   ```

## 🔧 Configuration

### Supabase Setup
1. Create a new project at [supabase.com](https://supabase.com)
2. Run the database migration from `/supabase/migrations`
3. Configure Row Level Security policies
4. Setup Storage bucket for file uploads

### External API Setup

**Spotify API**
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create new app and get Client ID/Secret
3. Add redirect URI: `http://localhost:5173/auth/spotify/callback`

**BandsInTown API**
1. Request API access at [BandsInTown](https://artists.bandsintown.com/support)
2. Get your App ID

**Manifest Financial**
1. Create account at [Manifest](https://manifest.co)
2. Get API keys for payment processing

**Google Maps API**
1. Enable Maps JavaScript API and Geocoding API
2. Create and restrict API key

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

## 🏗 Build & Deploy

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Deployment Options

**Vercel**
```bash
npx vercel --prod
```

**Netlify**
```bash
npx netlify deploy --prod --dir=dist
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── pages/              # Page components
├── services/           # API service classes
├── stores/             # Zustand stores
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## 🔒 Security

- All API keys stored in environment variables
- Row Level Security enabled on all Supabase tables
- File upload restrictions and validation
- CSRF protection for OAuth flows
- Input validation with Zod schemas

## 📊 Monitoring

Optional integrations:
- **Error Tracking**: Sentry
- **Analytics**: Google Analytics
- **Performance**: Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.
