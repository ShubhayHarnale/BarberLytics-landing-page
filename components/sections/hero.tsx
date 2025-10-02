"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Users } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-8 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-br from-light-lavender via-pale-blue to-soft-white bg-[length:400%_400%] animate-ambient-bg-scroll">
      {/* Refined Animated Glow Behind Text */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[70vw] h-[60vh] max-w-3xl max-h-3xl bg-gradient-radial from-light-lavender/20 via-pale-blue/15 to-transparent rounded-full blur-3xl animate-animate-subtle-glow z-0"></div>
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#2D4594] tracking-tighter leading-[1.1]">
                <div>Barberlytics Isn't</div>
                <div>Just a Booking App.</div>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#3B5BD9] mt-4 tracking-tight">
                It's Your Barbershop's Growth Engine.
              </h2>
            </div>
            
            <p className="text-lg text-slate-700 mt-6 mb-8 max-w-xl leading-relaxed font-normal tracking-wide">
              You don't need more new clients. You need better systems. Barberlytics helps you fix what's broken behind the chair — so your business runs smarter, grows faster, and finally works for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-7 h-auto rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                See It In Action
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-medium px-10 py-7 h-auto rounded-xl transition-all duration-300"
              >
                Run Your Shop Like a CEO
              </Button>
            </div>
          </motion.div>
          
          {/* Right Column - App Preview */}
          <motion.div
            className="relative mx-auto md:ml-auto md:mr-0 max-w-[320px] mt-8 md:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Device frame with shadow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[48px] z-0 opacity-60"></div>
              <div className="absolute inset-0 border-[12px] border-slate-800 rounded-[36px] shadow-2xl z-10"></div>
              
              {/* Subtle shadow for depth */}
              <div className="absolute -inset-2 bg-black/5 rounded-[48px] blur-lg z-0"></div>
              
              {/* Video inside device frame */}
              <div className="relative z-10 rounded-[24px] overflow-hidden border-slate-800 bg-white">
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
              
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-200/30 rounded-full blur-md z-0"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
          <ScrollAnimation animation="slide-up" delay={0.1} threshold={0.2}>
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 relative overflow-hidden group">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/80 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Glassmorphism shine effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -rotate-12 translate-y-24 group-hover:translate-y-0"></div>
              
              <div className="relative z-10 mb-6">
                <div className="bg-blue-50/80 backdrop-blur-sm p-3 rounded-lg inline-block shadow-sm">
                  <BarChart2 className="h-7 w-7 text-blue-600" />
                </div>
              </div>
              <h3 className="relative z-10 text-xl font-medium text-slate-800 mb-2 tracking-tight">Data Insights</h3>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed font-normal tracking-wide">Make decisions based on real metrics, not guesswork. Know exactly when to raise prices.</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-up" delay={0.2} threshold={0.2}>
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 relative overflow-hidden group">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/80 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Glassmorphism shine effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -rotate-12 translate-y-24 group-hover:translate-y-0"></div>
              
              <div className="relative z-10 mb-6">
                <div className="bg-blue-50/80 backdrop-blur-sm p-3 rounded-lg inline-block shadow-sm">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
              </div>
              <h3 className="relative z-10 text-xl font-medium text-slate-800 mb-2 tracking-tight">Client Retention</h3>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed font-normal tracking-wide">Stop client churn before it happens. Get alerts when clients are at risk of leaving.</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slide-up" delay={0.3} threshold={0.2}>
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 relative overflow-hidden group">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/80 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Glassmorphism shine effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -rotate-12 translate-y-24 group-hover:translate-y-0"></div>
              
              <div className="relative z-10 mb-6">
                <div className="bg-blue-50/80 backdrop-blur-sm p-3 rounded-lg inline-block shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 text-blue-600"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
              </div>
              <h3 className="relative z-10 text-xl font-medium text-slate-800 mb-2 tracking-tight">Team Performance</h3>
              <p className="relative z-10 text-base text-slate-600 leading-relaxed font-normal tracking-wide">Track individual barber performance and help your team grow with personalized insights.</p>
            </div>
          </ScrollAnimation>
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

export default Hero;