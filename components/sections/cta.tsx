"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

const CTA = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF] to-[#F8F4E3]/40 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.12),transparent_50%)] z-0"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-200 to-purple-100 opacity-20 blur-2xl"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-200 opacity-20 blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-indigo-50 opacity-15 blur-2xl"
        animate={{
          x: [0, 10, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-[#F8F4E3]/30 to-[#F5EED0]/20 opacity-30 blur-2xl"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container">
        <ScrollAnimation animation="slide-up" threshold={0.1} duration={0.8}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-blue-700 mb-8 tracking-tighter leading-[1.15]">
              You've Mastered the Craft. Now Master the Business.
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-600/90 mb-14 max-w-3xl mx-auto leading-relaxed font-normal tracking-wide">
              Barberlytics gives you the data, tools, and systems to grow your barbershop from within — so you can scale smarter, lead with clarity, and finally build the shop you've always envisioned.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-[#FCC100] hover:bg-[#FCC100]/90 text-gray-900 font-medium px-10 py-7 h-auto rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group w-full sm:w-auto"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-[#FFE1B2] text-[#FCC100] hover:bg-[#FFE1B2]/10 font-medium px-10 py-7 h-auto rounded-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTA;