🚀 Next.js SaaS Starter App

A modern, production-ready starter template built with Next.js, Prisma, Neon Postgres, shadcn/ui, Zod, and React Hook Form.

Perfect for SaaS apps, dashboards, and full-stack projects.

✨ Features

⚡ Next.js (App Router, TypeScript, TailwindCSS)

🎨 Prebuilt UI components with shadcn/ui

🔒 Authentication (Better Auth)

🛠️ Form handling with React Hook Form + Zod

🗄️ Database with Prisma + Neon Postgres

📦 API routes with tRPC (optional)

✅ ESLint + Prettier setup

📱 Responsive & mobile-friendly

🛠️ Tech Stack

Framework: Next.js 14 (App Router)

Database: Postgres (Neon)

ORM: Prisma

UI Library: shadcn/ui (Radix-based)

Forms: React Hook Form + Zod

Auth: Better Auth

Styling: TailwindCSS

Icons: Lucide-react

🚀 Getting Started
1. Clone the repo
git clone https://github.com/<your-username>/nextjs-starter.git
cd nextjs-starter
npm install
```

### 2. Environment Setup

Create `.env` file in root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@host/database?sslmode=require"

DATABASE_URL="postgresql://<user>:<password>@<host>/<db>?sslmode=require"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Optional: View your database
npx prisma studio
```

### 4. Run Development Server

```bash
npm run dev
```

Visit → http://localhost:3000

📂 Project Structure
app/             → Next.js App Router pages
components/      → UI and custom components
lib/             → Prisma client, utils
prisma/          → Prisma schema & migrations
styles/          → Global styles

📦 Deployment

Deploy easily with Vercel:

Push to GitHub

Import repo into Vercel

Set environment variables
