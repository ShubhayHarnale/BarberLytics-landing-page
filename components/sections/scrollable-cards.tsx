"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

const Card = ({ title, description, icon, iconBg }: CardProps) => {
  return (
    <motion.div 
      className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex-shrink-0 mx-2 my-2 border border-gray-100 group"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${iconBg} group-hover:scale-105 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 tracking-tight leading-tight">{title}</h3>
        <p className="text-gray-600 font-normal leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const ScrollableCards = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth"
      });
    }
  };

  const cards = [
    {
      title: "Client Analytics",
      description: "Track client retention, frequency, and spending patterns to optimize your business decisions.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1C4596]"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
      iconBg: "bg-blue-50"
    },
    {
      title: "Smart Scheduling",
      description: "Intelligent scheduling system that maximizes your shop's efficiency and barber utilization.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1C4596]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      iconBg: "bg-blue-50"
    },
    {
      title: "Inventory Management",
      description: "Track product usage, automate reordering, and optimize your retail operations seamlessly.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1C4596]"><path d="M20 5H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><path d="M4 12V7a2 2 0 0 1 2-2"/><path d="M9 21h6"/><path d="M12 17v4"/></svg>,
      iconBg: "bg-blue-50"
    },
    {
      title: "Marketing Automation",
      description: "Automated client outreach, promotions, and social media management to grow your business.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1C4596]"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>,
      iconBg: "bg-blue-50"
    },
    {
      title: "Financial Insights",
      description: "Real-time revenue tracking, expense management, and comprehensive profitability analysis.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1C4596]"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>,
      iconBg: "bg-blue-50"
    },
    {
      title: "Team Management",
      description: "Track barber performance, manage commissions, and optimize your team's productivity.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1C4596]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      iconBg: "bg-blue-50"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <ScrollAnimation animation="fade" threshold={0.1}>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              Everything You Need to Grow Your Shop
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Powerful tools designed specifically for barbershops to streamline operations and boost revenue.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden lg:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-20">
            <Button 
              onClick={scrollLeft} 
              variant="outline" 
              size="icon" 
              className="rounded-full w-10 h-10 bg-white shadow-sm border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
          
          <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
            <Button 
              onClick={scrollRight} 
              variant="outline" 
              size="icon" 
              className="rounded-full w-10 h-10 bg-white shadow-sm border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <ArrowRight className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
          
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-2 pt-1 px-1 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Add a spacer at the beginning for better mobile experience */}
            <div className="min-w-[12px] md:min-w-[12px] flex-shrink-0"></div>
            
            {cards.map((card, index) => (
              <div key={index} className="snap-center">
                <Card {...card} />
              </div>
            ))}
            
            {/* Add a spacer at the end for better mobile experience */}
            <div className="min-w-[12px] md:min-w-[12px] flex-shrink-0"></div>
          </div>
        </div>
        
        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-4 lg:hidden">
          <div className="flex space-x-1.5">
            <div className="w-6 h-1 bg-[#1C4596] rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableCards;
