"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Marcus Johnson",
    business: "Elite Cuts Barbershop",
    image: "/api/placeholder/80/80",
    rating: 5,
    quote: "Barberlytics transformed how I run my shop. The booking system alone saved me 10 hours a week, and my revenue increased by 40% in just 3 months."
  },
  {
    name: "David Rodriguez",
    business: "The Gentleman's Cut",
    image: "/api/placeholder/80/80",
    rating: 5,
    quote: "Finally, software that actually works for barbershops. My clients love the online booking, and I love seeing my business grow with real data."
  },
  {
    name: "Anthony Williams",
    business: "Crown Barbershop",
    image: "/api/placeholder/80/80",
    rating: 5,
    quote: "The client management features are incredible. I know exactly what each customer prefers, and it shows in my service quality and tips."
  },
  {
    name: "Carlos Martinez",
    business: "Fade Masters",
    image: "/api/placeholder/80/80",
    rating: 5,
    quote: "Best investment I've made for my barbershop. The automated reminders reduced no-shows by 80%, and the payment processing is seamless."
  },
  {
    name: "James Thompson",
    business: "Classic Cuts Co.",
    image: "/api/placeholder/80/80",
    rating: 5,
    quote: "Barberlytics helped me scale from one chair to three locations. The multi-location management features are exactly what growing shops need."
  },
  {
    name: "Michael Brown",
    business: "Urban Edge Barbershop",
    image: "/api/placeholder/80/80",
    rating: 5,
    quote: "The analytics showed me which services were most profitable. I adjusted my pricing and increased my monthly revenue by $3,000."
  }
];

const ModernTestimonials = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gray-50 overflow-hidden">
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
            Loved by thousands of barbershops
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how barbershop owners are transforming their businesses with Barberlytics
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-[#1C4596]/10 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-[#1C4596]" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FCC100] text-[#FCC100]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1C4596] to-[#3A65B6] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FCC100] text-[#FCC100]" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5 from 500+ barbershops</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTestimonials; 