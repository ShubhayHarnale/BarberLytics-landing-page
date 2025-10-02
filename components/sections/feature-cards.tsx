"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/scroll-animation";

const problems = [
  {
    id: 1,
    problem: "Pricing decisions based on fear",
    impact: "Lost revenue from undercharging"
  },
  {
    id: 2,
    problem: "No clear business metrics",
    impact: "Flying blind with no strategy"
  },
  {
    id: 3,
    problem: "Clients disappearing silently",
    impact: "Revenue gaps from poor retention"
  },
  {
    id: 4,
    problem: "High barber turnover",
    impact: "Constant training and recruitment costs"
  },
  {
    id: 5,
    problem: "Gut-feeling decisions",
    impact: "Missed opportunities and waste"
  },
  {
    id: 6,
    problem: "No-shows and cancellations",
    impact: "Dead time killing daily revenue"
  }
];

const FeatureCards = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <ScrollAnimation animation="fade" threshold={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              The Hidden Problems Killing Your Growth
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most barbershops struggle with the same silent issues. Here's what's really holding you back.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((item, index) => (
            <ScrollAnimation 
              key={item.id}
              animation="slide-up" 
              delay={index * 0.1} 
              threshold={0.1}
            >
              <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    {item.id}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {item.problem}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.impact}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade" threshold={0.1}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Barberlytics fixes all of this
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Stop guessing and start growing. Our platform gives you the data, tools, and insights to turn these problems into profit opportunities.
              </p>
              <button className="bg-[#1C4596] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1C4596]/90 transition-colors">
                See How It Works
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeatureCards;