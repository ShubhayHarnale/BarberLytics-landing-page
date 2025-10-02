"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollAnimation from "@/components/scroll-animation";

const faqs = [
  {
    id: 1,
    question: "Does this replace my booking system?",
    answer: "Yes. Barberlytics is a complete solution that includes advanced booking features, client management, analytics, and business growth tools. You won't need to maintain multiple systems."
  },
  {
    id: 2,
    question: "Do I need to be good with numbers?",
    answer: "Not at all. Barberlytics is designed to make data accessible and actionable, even if you've never looked at a spreadsheet before. We translate complex metrics into simple insights anyone can understand."
  },
  {
    id: 3,
    question: "Is it just for shop owners?",
    answer: "Barberlytics is built for both shop owners and individual barbers who want to grow. Whether you manage a team or are a solo operator renting a chair, our tools can help you build a more profitable business."
  },
  {
    id: 4,
    question: "How quickly will I see results?",
    answer: "Most shop owners see immediate insights in their first week, and measurable business improvements within the first month. The system becomes more powerful the longer you use it as it collects more data."
  },
  {
    id: 5,
    question: "Can I integrate my current client list?",
    answer: "Absolutely. Barberlytics makes it easy to import your existing clients and their history, so you don't lose any valuable data when switching platforms."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="container">
        <ScrollAnimation animation="fade" threshold={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D4594] mb-4 tracking-tighter leading-[1.15]">
              Still Wondering If It's Right for You?
            </h2>
          </div>
        </ScrollAnimation>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollAnimation 
              key={faq.id}
              animation="slide-up" 
              delay={index * 0.1} 
              threshold={0.1}
            >
              <div className="mb-4 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/30 relative overflow-hidden group">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/80 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex justify-between items-center w-full text-left group relative z-10"
              >
                <h3 className="text-lg md:text-xl font-medium text-[#3B5BD9] group-hover:text-[#2D4594] transition-colors tracking-tight">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={cn(
                    "h-6 w-6 text-[#3B5BD9] transition-transform duration-300",
                    openId === faq.id ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "transition-all duration-300 overflow-hidden relative z-10",
                  openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="mt-3 text-base text-slate-600 leading-relaxed font-normal tracking-wide bg-white/50 backdrop-blur-sm p-3 rounded-lg">
                  {faq.answer}
                </div>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;