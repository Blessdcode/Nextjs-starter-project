"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  Github,
  Star,
  Zap,
  Database,
  Shield,
  Palette,
  Code2,
  Globe,
  CheckCircle,
  Copy,
  ExternalLink,
  Layers,
  Rocket,
} from "lucide-react";

// Form validation schema
const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  });

  const copyCommand = () => {
    navigator.clipboard.writeText(
      "https://github.com/Blessdcode/Nextjs-starter-project.git"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: DemoFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Demo form data:", data);
    setFormSubmitted(true);
    reset();
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const features = [
    {
      icon: Zap,
      title: "Next.js 14 with App Router",
      description:
        "Latest Next.js features with server components and streaming",
    },
    {
      icon: Database,
      title: "Prisma + Neon DB",
      description: "Type-safe database access with serverless PostgreSQL",
    },
    {
      icon: Shield,
      title: "TypeScript Ready",
      description: "Full type safety across your entire application",
    },
    {
      icon: Palette,
      title: "Shadcn/ui Components",
      description: "Beautiful, accessible components built on Radix UI",
    },
    {
      icon: Code2,
      title: "React Hook Form + Zod",
      description: "Performant forms with powerful validation",
    },
    {
      icon: Globe,
      title: "Production Ready",
      description: "Optimized for deployment on Vercel and other platforms",
    },
  ];

  const techStack = [
    { name: "Next.js", version: "14", color: "bg-black text-white" },
    { name: "TypeScript", version: "5", color: "bg-blue-600 text-white" },
    { name: "Prisma", version: "5", color: "bg-indigo-600 text-white" },
    { name: "Tailwind", version: "3", color: "bg-cyan-600 text-white" },
    { name: "Shadcn/ui", version: "Latest", color: "bg-gray-900 text-white" },
    { name: "Zod", version: "3", color: "bg-purple-600 text-white" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
             
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                NextJS Starter
              </span>
            </div>
            <a
              href="https://github.com/Blessdcode"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Production-ready starter template
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-100 via-slate-50 to-gray-200 bg-clip-text text-transparent">
                Build Modern Apps
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-100 to-gray-200 bg-clip-text text-transparent">
                Lightning Fast
              </span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive Next.js starter with TypeScript, Prisma, Neon DB,
              Shadcn/ui, and more. Everything you need to build production-ready
              applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={copyCommand}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                {copied ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Clone project
                  </>
                )}
              </span>
            </button>
            <a
              href="https://github.com/Blessdcode/Nextjs-starter-project"
              className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-white hover:text-gray-900 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Documentation
            </a>
          </div>

          {/* Command to copy */}
          <div className="bg-gray-900 rounded-lg p-4 max-w-2xl mx-auto mb-16">
            <code className="text-green-400 font-mono">
              clone project: <br />
              <span>
                https://github.com/Blessdcode/Nextjs-starter-project.git
              </span>
            </code>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} shadow-lg hover:scale-105 transition-transform`}
              >
                {tech.name} {tech.version}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully curated collection of modern technologies and best
              practices for building scalable web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white " />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600">
              Try out our form validation with React Hook Form and Zod
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Form Submitted Successfully!
                </h3>
                <p className="text-gray-600">
                  This demonstrates React Hook Form + Zod validation in action.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us what you think about this starter..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 cursor-pointer text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Submit Form
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our production-ready template and ship your next
            project faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={copyCommand}
              className="px-8 py-4 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900 cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get Started Now
            </button>
            <a
              href="https://github.com/yourusername/nextjs-starter"
              className="flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Built for the developer community
          </p>
          <p className="text-gray-500 text-sm">
            Open source and free to use. Made with Next.js, Tailwind, and lots
            of caffeine.
          </p>
        </div>
      </footer>
    </div>
  );
}
