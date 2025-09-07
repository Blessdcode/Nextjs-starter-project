# 🚀 NextJS Starter Template

A modern, full-stack NextJS starter template with TypeScript, Prisma, Neon DB, and more!

## ✨ Features

- ⚡ **Next.js 14** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🧩 **Shadcn/ui** for beautiful components
- 🗄️ **Prisma** with **Neon PostgreSQL**
- ✅ **Zod** for schema validation
- 📝 **React Hook Form** for form handling
- 🎯 **ESLint** for code linting
- 🔧 **Pre-configured** project structure

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Static type checking |
| Tailwind CSS | Utility-first CSS framework |
| Shadcn/ui | Beautiful UI components |
| Prisma | Type-safe database ORM |
| Neon DB | Serverless PostgreSQL |
| Zod | TypeScript-first schema validation |
| React Hook Form | Performant forms library |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- Git

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/nextjs-starter.git
cd nextjs-starter
npm install
```

### 2. Environment Setup

Create `.env` file in root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@host/database?sslmode=require"

# Optional: Add your environment variables here
NEXTAUTH_SECRET="your-secret-key"
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

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## 📁 Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   └── forms/            # Form components
├── lib/                  # Utility libraries
│   ├── db.ts            # Database connection
│   ├── utils.ts         # Utility functions
│   └── validations.ts   # Zod schemas
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma schema
├── public/              # Static assets
└── types/               # TypeScript definitions
```

## 🗄️ Database Schema

The starter includes two example models:

- **User**: Basic user model with email and name
- **Post**: Blog post model with title, content, and published status

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 Styling

This template uses:
- **Tailwind CSS** for utility-first styling
- **Shadcn/ui** for pre-built components
- **CSS Variables** for theming support
- **Dark mode** ready

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push schema changes to database |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:generate` | Generate Prisma client |

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This starter works with any platform that supports Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 🗄️ Database Setup (Neon)

1. Sign up at [Neon](https://neon.tech)
2. Create a new project
3. Copy connection string to `DATABASE_URL`
4. Run `npx prisma db push`

## 📚 Key Libraries Documentation

- [Next.js](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) for Next.js
- [Shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Prisma](https://prisma.io) team for the excellent ORM
- [Neon](https://neon.tech) for serverless PostgreSQL

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [discussions](https://github.com/blessedcode/nextjs-starter/discussions)
- Read the documentation links above

---

**Happy coding! 🎉**