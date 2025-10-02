"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, LineChart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/scroll-animation";

const FeatureHighlight = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-[#F8F4E3]/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,253,0.15),transparent_40%)] z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#A5B4F3]/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#8B9FE8]/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#F8F4E3]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-[#F5EED0]/8 rounded-full blur-3xl z-0"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <ScrollAnimation animation="slide-up" threshold={0.1}>
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-medium text-sm mb-4">
                <BarChart3 className="h-4 w-4 mr-2" />
                Revenue Intelligence
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D4594] tracking-tight leading-tight">
                Know Exactly When to Raise Your Prices
              </h2>
              
              <p className="text-xl text-slate-700 mt-6 mb-10 max-w-xl leading-relaxed">
                Stop guessing when to raise prices. Our AI-powered revenue intelligence analyzes your client retention, demand patterns, and market position to identify the perfect timing for price increases.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-slate-600">Identify price-increase opportunities with minimal client churn risk</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-slate-600">Segment clients by loyalty to implement tiered pricing strategies</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-slate-600">Get alerts when you're leaving money on the table</p>
                </div>
              </div>
              
              <div className="pt-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 h-auto rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    See How It Works
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Right Column - Visual/Animation */}
          <ScrollAnimation animation="fade" threshold={0.1} delay={0.2}>
            <div className="relative">
              {/* Glass card with chart */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/30 relative overflow-hidden group">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/80 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-slate-800">Revenue Potential</h3>
                    <div className="flex items-center text-green-600 font-medium">
                      <TrendingUp className="h-5 w-5 mr-1" />
                      <span>+24%</span>
                    </div>
                  </div>
                  
                  {/* Chart visualization */}
                  <div className="h-64 w-full mb-6">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      {/* Grid lines */}
                      <line x1="0" y1="40" x2="400" y2="40" stroke="#e5e7eb" strokeDasharray="4" />
                      <line x1="0" y1="80" x2="400" y2="80" stroke="#e5e7eb" strokeDasharray="4" />
                      <line x1="0" y1="120" x2="400" y2="120" stroke="#e5e7eb" strokeDasharray="4" />
                      <line x1="0" y1="160" x2="400" y2="160" stroke="#e5e7eb" strokeDasharray="4" />
                      
                      {/* Current revenue line */}
                      <path 
                        d="M0,160 C50,140 100,150 150,130 C200,110 250,100 300,90 C350,80 400,70 400,70" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="3"
                      />
                      
                      {/* Potential revenue area */}
                      <path 
                        d="M0,160 C50,140 100,150 150,130 C200,110 250,100 300,90 C350,80 400,70 400,70 L400,200 L0,200 Z" 
                        fill="url(#blueGradient)" 
                        opacity="0.2"
                      />
                      
                      {/* Optimized price point line */}
                      <path 
                        d="M0,140 C50,120 100,110 150,90 C200,70 250,60 300,50 C350,40 400,30 400,30" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="3"
                        strokeDasharray="6"
                      />
                      
                      {/* Gradient definition */}
                      <defs>
                        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Price point indicator */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-blue-600 font-medium">Optimal Price Point</p>
                        <p className="text-2xl font-bold text-slate-800">$45 <span className="text-sm text-slate-500 font-normal">per haircut</span></p>
                      </div>
                      <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        +$8 increase
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      Recommended timing: Next month (October 2025)
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification card */}
              <motion.div 
                className="absolute -top-10 -right-10 bg-white rounded-lg shadow-lg p-4 border border-gray-100 max-w-[220px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <LineChart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-slate-800">Price Increase Alert</p>
                    <p className="text-xs text-slate-500">Demand for your premium services has increased by 32%</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating stats card */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500">Client Retention</span>
                    <span className="text-xl font-bold text-slate-800">98%</span>
                  </div>
                  <div className="h-10 w-px bg-gray-200"></div>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500">Profit Margin</span>
                    <span className="text-xl font-bold text-green-600">+15%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
