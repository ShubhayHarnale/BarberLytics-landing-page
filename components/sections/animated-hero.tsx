"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AnimatedHero = () => {
  
  return (
    <section className="relative min-h-screen overflow-hidden border-none">
      {/* Premium gradient background - blue to yellow */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#5B8BE8] via-[#7EAEFF]/90 to-[#FCC100]/80"
          style={{
            backgroundSize: '100% 200%',
            animation: 'vertical-gradient-shift 30s ease-in-out infinite alternate'
          }}
        ></div>
      </div>
      
      {/* Subtle light rays effect */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div 
          className="absolute w-[140%] h-[140%] top-[-20%] left-[-20%] opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
            animation: 'pulse-slow 15s ease-in-out infinite alternate',
          }}
        ></div>
      </div>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 z-15 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Depth enhancer - subtle gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/10 to-transparent"></div>
      
      {/* Smooth transition to white at bottom - Extended fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-25 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      
      <div className="container relative z-30 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-4 pb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1C4596]">
              Everything you need to power your{" "}
              <span className="text-[#FCC100]">barbershop</span>
            </h1>
            
            <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed font-normal">
              Booking, payments, client management, and more. Enjoy a complete platform that is fast, beautiful, intuitive, and works on any device.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-white hover:bg-gray-50 text-[#1C4596] font-semibold px-8 py-4 h-auto rounded-full transition-all duration-300 shadow-sm hover:shadow-md group border-0"
              >
                Try it now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 py-4 h-auto rounded-lg transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch a demo
              </Button>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-sm"
            >
              <span className="font-semibold">#1 highest-rated</span> by thousands of barbershop professionals
            </motion.div>
          </motion.div>
          
          {/* Right Column - Video */}
          <motion.div
            className="relative mx-auto md:ml-auto md:mr-0 max-w-[220px] md:max-w-[280px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Video glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-white/20 to-[#FCC100]/20 rounded-[32px] z-0 opacity-60 blur-xl"></div>
              
              {/* Video container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm">
                <video 
                  className="w-full h-auto" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/images/Image1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
