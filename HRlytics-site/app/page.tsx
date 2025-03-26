"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Calendar, FileText, FolderKanban, MessageSquareText, MicroscopeIcon as MicrophoneIcon, Users, CheckCircle, BarChart3, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

const features = [
  {
    title: "Smart Recruitment",
    description: "AI-powered candidate screening and intelligent interview scheduling to find the perfect match.",
    link: "http://localhost:3001/dashboard",
    icon: Users,
  },
  {
    title: "Employee wise Analytics",
    description: "Real-time insights into employee performance with customizable KPI tracking.",
    link: "http://localhost:3003/dashboard",
    icon: BarChart3,
  },
  {
    title: "Project Management",
    description: "Streamlined workflow management with automated task distribution.",
    link: "http://localhost:3002/dashboard",
    icon: FolderKanban,
  },
  {
    title: "Secure Data Storage",
    description: "Enterprise-grade security for your sensitive HR data and documents.",
    link: "http://localhost:3004/",
    icon: Shield,
  },
];

const benefits = [
  "Reduce hiring time by 60%",
  "Improve employee retention",
  "Automate HR workflows",
  "Ensure compliance",
  "Enhance team productivity",
  "Data-driven decisions"
];

const testimonials = [
  {
    quote: "This platform transformed our HR operations completely. We've reduced our hiring time by 50% and improved employee satisfaction.",
    author: "Sarah Johnson",
    role: "HR Director",
    company: "Tech Solutions Inc."
  },
  {
    quote: "The AI assistant is like having an extra team member. It handles routine queries efficiently, letting us focus on strategic tasks.",
    author: "Michael Chen",
    role: "People Operations Manager",
    company: "Global Innovations"
  },
  {
    quote: "Implementation was smooth, and the ROI has been remarkable. Our HR processes are now streamlined and data-driven.",
    author: "Emily Rodriguez",
    role: "Chief HR Officer",
    company: "Future Corp"
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Ideal for small businesses looking to streamline HR operations.',
    price: '999',
    features: [
      'Employee Database Management',
      'Basic Payroll Processing',
      'Attendance Tracking',
      'Email Support',
    ],
  },
  {
    name: 'Growth',
    description: 'Perfect for growing teams with automation needs.',
    price: '2,499',
    features: [
      'Everything in Starter',
      'Automated Compliance Reports',
      'Advanced Leave Management',
      'WhatsApp & Email Support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large-scale HR operations.',
    price: '4,499',
    features: [
      'Everything in Growth',
      'Custom Workflows & Integrations',
      'Dedicated Account Manager',
      '24/7 Support',
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-12 md:py-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Transform Your HR
              <br className="hidden sm:block" />
              With Intelligent Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your HR operations with our comprehensive management platform
              powered by advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="http://localhost:8501/">
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                  Try Donna - Our Virtual AI Assistant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-green-200 hover:bg-green-50"
                asChild
              >
                <a href="#features">Visit Dashboard</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-green-100" id="features">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your HR operations efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={feature.link} target="_blank" rel="noopener noreferrer">
                  <Card className="p-6 border-green-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                    <feature.icon className="h-12 w-12 text-green-600 mb-4 transition-all duration-300 group-hover:text-green-700" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies that have transformed their HR operations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-gray-700 p-2"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-green-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies worldwide
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All testimonials are for demonstration purposes only.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-green-100">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                    <p className="text-green-600">{testimonial.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 mt-8 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a plan that fits your HR needs, with features designed for Indian businesses.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8 h-full border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="text-4xl font-bold mb-6 text-gray-900">
                    ₹{plan.price}
                    {plan.price !== 'Contact Us' && (
                      <span className="text-lg text-gray-500">/month</span>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {plan.price === 'Contact Us' ? 'Get in Touch' : 'Get Started'}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-green-100 border-t border-green-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">HR Management Platform</h3>
              <p className="text-gray-600">
                Transform your HR operations with intelligent solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 HR Management Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}