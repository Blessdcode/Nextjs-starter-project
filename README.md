🚀 Next.js SaaS Starter

A modern, production-ready starter template built with Next.js, Prisma, Neon Postgres, shadcn/ui, Zod, and React Hook Form.

Perfect for SaaS apps, dashboards, and full-stack projects.

✨ Features

⚡ Next.js (App Router, TypeScript, TailwindCSS)

🎨 Prebuilt UI components with shadcn/ui

🔒 Authentication (BetterAuth)

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

Auth: BetterAuth

Styling: TailwindCSS

Icons: Lucide-react

🚀 Getting Started
1. Clone the repo
git clone https://github.com/<your-username>/nextjs-starter.git
cd nextjs-starter

2. Install dependencies
npm install

3. Setup Environment Variables

Create a .env file:

DATABASE_URL="postgresql://<user>:<password>@<host>/<db>?sslmode=require" <br/>
NEXTAUTH_SECRET="your-secret"<br/>
NEXTAUTH_URL="http://localhost:3000"

4. Setup Database
npx prisma db push

5. Run the app
npm run dev


Visit → http://localhost:3000

📂 Project Structure
app/             → Next.js App Router pages
components/      → UI and custom components
lib/             → Prisma client, utils
prisma/          → Prisma schema & migrations
styles/          → Global styles

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
