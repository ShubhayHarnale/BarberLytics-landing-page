"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "@/components/scroll-animation";

const testimonials = [
  {
    id: 1,
    quote: "I finally understood where I was losing money.",
    author: "Jason R.",
    role: "Owner, Classic Cuts",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 2,
    quote: "My team is more motivated than ever.",
    author: "Marcus T.",
    role: "Owner, Sharp Edge Barbershop",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 3,
    quote: "Our retention shot up — we don't stress slow weeks anymore.",
    author: "Dominique W.",
    role: "Owner, Supreme Cuts",
    image: "https://images.pexels.com/photos/3008283/pexels-photo-3008283.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 4,
    quote: "This app paid for itself in 2 weeks.",
    author: "Eric J.",
    role: "Owner, Modern Man Barbershop",
    image: "https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 md:py-20 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#193C83] via-[#2D67D8] to-[#4B72D9] z-0"></div>
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2D67D8,transparent_70%)] z-0 opacity-60"></div>
      {/* Enhanced grid texture matching hero section */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover opacity-[0.08] blur-[3px]"></div>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonialGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonialGrid)" />
        </svg>
      </div>
      
      {/* Enhanced decorative elements with floating animation */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#F8F4E3]/10 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-[#F5EED0]/8 blur-3xl animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-yellow-100/5 blur-2xl animate-float-fast"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-[#2D67D8]/20 blur-3xl animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-[#3C4596]/15 blur-2xl animate-float-slow"></div>
      
      <div className="container relative z-10">
        <ScrollAnimation animation="fade" threshold={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
              <span className="relative inline-block">
                <span className="relative z-10">Real Barbershop Owners.</span>
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#FCC100]/30 -rotate-1 transform -skew-x-3"></div>
              </span>
              <span className="block mt-1">Real Growth.</span>
            </h2>
            <p className="text-xl text-blue-100/90 max-w-2xl mx-auto">See how BarberLytics is transforming barbershops across the country</p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation 
              key={testimonial.id}
              animation="slide-up" 
              delay={index * 0.1} 
              threshold={0.1}
              duration={0.6}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl flex flex-col h-full border border-[#2D67D8]/10 hover:translate-y-[-8px] transition-all duration-500 relative overflow-hidden group">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Glassmorphism shine effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -rotate-12 translate-y-24 group-hover:translate-y-0"></div>
              <div className="mb-4 relative z-10">
                <div className="bg-blue-50/80 backdrop-blur-sm p-3 rounded-lg inline-block shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                  <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-[#3C4596] transition-colors duration-300">
                    <path d="M10.8 12C7.512 12.648 5.2 15.224 5.2 18.328C5.2 22.136 8.064 25 11.872 25C15.68 25 18.544 22.136 18.544 18.328C18.544 13.608 14.928 10 10.296 10C9.816 10 9.384 10.048 8.952 10.136C9.912 8.248 11.776 6.76 13.992 6.136L12.352 3C7.32 4.568 3.448 8.92 3.448 14.856V15.92C3.448 16.088 3.448 16.248 3.448 16.408C3.456 16.544 3.456 16.672 3.456 16.8V18.328C3.456 23.056 7.144 27 11.872 27C16.6 27 20.288 23.056 20.288 18.328C20.288 14.616 17.456 11.608 13.896 11.144C13.192 13.128 12.152 13.784 10.8 12Z" fill="#2D67D8"/>
                    <path d="M27.552 11.144C27.232 13.12 26.2 13.784 24.8 12C21.52 12.648 19.2 15.224 19.2 18.328C19.2 22.136 22.064 25 25.872 25C29.68 25 32.544 22.136 32.544 18.328C32.544 13.608 28.928 10 24.304 10C23.824 10 23.384 10.048 22.952 10.136C23.912 8.248 25.776 6.76 27.992 6.136L26.352 3C21.32 4.568 17.448 8.92 17.448 14.856V15.92C17.448 16.088 17.448 16.248 17.448 16.408C17.456 16.544 17.456 16.672 17.456 16.8V18.328C17.456 23.056 21.144 27 25.872 27C30.6 27 34.288 23.056 34.288 18.328C34.288 14.616 31.448 11.6 27.552 11.144Z" fill="#2D67D8"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 leading-relaxed text-gray-800">
                "{testimonial.quote}"
              </h3>
              
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium text-gray-800">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
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

export default Testimonials;