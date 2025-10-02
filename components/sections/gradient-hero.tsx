"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const GradientHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C4596] to-[#FCC100] z-0"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#FCC100]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[#1C4596]/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container relative z-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Elevate Your Barbershop Business
            </h1>
            
            <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              The complete business growth platform built specifically for barbershops. Manage clients, track performance, and grow your revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-[#FCC100] hover:bg-[#E3AE00] text-[#1C4596] font-medium px-8 py-6 h-auto rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#1C4596] bg-white text-[#1C4596] hover:bg-white/90 font-medium px-8 py-6 h-auto rounded-xl transition-all duration-300 shadow-md"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>
          
          {/* Right Column - Phone Mockup */}
          <motion.div
            className="relative mx-auto md:ml-auto md:mr-0 max-w-[280px] md:max-w-[320px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Phone frame with shadow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-white/20 to-white/10 rounded-[48px] z-0 opacity-60 blur-sm"></div>
              
              {/* Phone device frame */}
              <div className="relative z-10 rounded-[36px] overflow-hidden border-[8px] border-black/80 shadow-2xl">
                {/* Phone screen content */}
                <div className="aspect-[9/19] bg-gray-900 overflow-hidden relative">
                  {/* App UI */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1C4596]/90 to-[#1C4596]/70">
                    {/* App status bar */}
                    <div className="h-8 bg-black/20 flex justify-between items-center px-4">
                      <div className="text-white text-xs">9:41</div>
                      <div className="flex space-x-1">
                        <div className="text-white text-xs">100%</div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-8 h-8 rounded-full bg-[#FCC100] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1C4596]"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                        <div className="text-white/80 text-xs mb-1">Today's Revenue</div>
                        <div className="text-white text-2xl font-bold">$1,248.00</div>
                        <div className="text-[#FCC100] text-xs mt-1">↑ 24% from yesterday</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="text-white/80 text-xs mb-1">Clients</div>
                          <div className="text-white text-xl font-bold">16</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="text-white/80 text-xs mb-1">Avg. Service</div>
                          <div className="text-white text-xl font-bold">$78</div>
                        </div>
                      </div>
                      
                      <div className="text-white/80 text-xs mb-2">Upcoming Appointments</div>
                      
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-3 flex items-center">
                          <div className="w-10 h-10 rounded-full bg-[#FCC100]/20 mr-3 flex items-center justify-center text-white">
                            {item === 1 ? 'JD' : item === 2 ? 'MK' : 'TS'}
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">
                              {item === 1 ? 'John Doe' : item === 2 ? 'Mike Kim' : 'Tom Smith'}
                            </div>
                            <div className="text-white/70 text-xs">
                              {item === 1 ? '10:30 AM - Haircut + Beard' : item === 2 ? '11:45 AM - Fade' : '1:15 PM - Full Service'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#FCC100]/30 rounded-full blur-md z-0"></div>
              <div className="absolute -left-8 top-1/4 w-16 h-16 bg-[#1C4596]/30 rounded-full blur-md z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px] fill-white"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,109,20.48,321.39,56.44Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default GradientHero;
