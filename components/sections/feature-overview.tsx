"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  CreditCard, 
  Smartphone, 
  MessageSquare, 
  TrendingUp, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Calendar & Scheduling",
    description: "Smart booking system that prevents double-bookings and maximizes your chair time."
  },
  {
    icon: CreditCard,
    title: "Payments & Point-of-Sale",
    description: "Accept payments, process tips, and manage transactions seamlessly."
  },
  {
    icon: Smartphone,
    title: "Online Booking",
    description: "Let clients book 24/7 with your custom booking page and mobile app."
  },
  {
    icon: MessageSquare,
    title: "Two-Way Texting",
    description: "Automated reminders, confirmations, and direct client communication."
  },
  {
    icon: TrendingUp,
    title: "Business Analytics",
    description: "Track revenue, monitor performance, and identify growth opportunities."
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Complete client profiles, service history, and preference tracking."
  }
];

const FeatureOverview = () => {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Barbershop software, finally done right
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's be real, most barbershop software isn't very good. Ugly design, slow speeds, 
            interfaces that get in the way. We're taking a new approach and bringing modern tools to barbershops.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#1C4596] to-[#3A65B6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1C4596] to-[#3A65B6] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your barbershop?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of barbershops already using Barberlytics to grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1C4596] font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureOverview; 