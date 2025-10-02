"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const Positioning = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-6 pt-2 pb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-barbershop-900 mb-6 leading-[1.15] tracking-tighter">
            Not Just a Booking App. A Complete Business System Built for Barbers.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium text-barbershop-800 mb-6 border-b pb-3 border-barbershop-200 tracking-tight">
              Barberlytics Is:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-barbershop-700 font-normal tracking-wide">A full business growth platform</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-barbershop-700 font-normal tracking-wide">Designed to improve retention, pricing, and profit</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-barbershop-700 font-normal tracking-wide">Made for barbers who want to build and scale</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-barbershop-700 font-normal tracking-wide">A system to help you grow from within</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium text-barbershop-800 mb-6 border-b pb-3 border-barbershop-200 tracking-tight">
              Barberlytics Isn't:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-barbershop-700 font-normal tracking-wide">Just a scheduling calendar</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-barbershop-700 font-normal tracking-wide">A flashy tool to get more clients fast</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-barbershop-700 font-normal tracking-wide">Another expense with no ROI</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-barbershop-700 font-normal tracking-wide">Made for shops who just want to stay the same</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative overflow-hidden rounded-2xl p-8 mt-10 max-w-4xl mx-auto shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-white z-0"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 z-10 overflow-hidden opacity-70">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#1C4596]/20 via-[#3A65B6]/15 to-[#FCC100]/10 mix-blend-soft-light"
              style={{
                animation: 'gradient-shift 28s ease infinite',
                animationDelay: '-8s',
                backgroundSize: '300% 300%',
              }}
            ></div>
          </div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGYwZjAiPjwvcmVjdD4KPC9zdmc+')] opacity-20 z-20"></div>
          
          {/* Content */}
          <div className="relative z-30 text-center">
            <h3 className="text-2xl font-medium text-[#1C4596] mb-4 tracking-tight">
              Grow From Within Before You Market
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-normal tracking-wide">
              You don't have a marketing problem — you have a systems problem. 
              If you're always trying to get new clients, but losing the ones you have… 
              Barberlytics shows you where the leaks are and how to fix them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Positioning;