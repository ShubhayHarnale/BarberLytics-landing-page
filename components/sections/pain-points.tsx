"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    id: 1,
    question: "I want to raise my prices… but I'm scared I'll lose clients.",
    description: "You've leveled up your skills, but you're stuck charging old prices because you don't know if the timing is right — or how to do it without backlash."
  },
  {
    id: 2,
    question: "I trained my barbers… and now they're leaving.",
    description: "You put in the time to help them grow — just to watch them walk out and take clients with them. It's exhausting and discouraging."
  },
  {
    id: 3,
    question: "Clients just stop booking and I don't know why.",
    description: "One week they're regulars… the next they ghost. No feedback, no warning — and no system in place to track what happened."
  },
  {
    id: 4,
    question: "I feel like I'm just guessing all the time.",
    description: "From pricing to hiring to marketing — every decision feels like a gamble because you don't have the numbers to guide you."
  },
  {
    id: 5,
    question: "No-shows are killing my income.",
    description: "Cancellations and empty gaps wreck your day, and you're left scrambling to fill the holes last minute."
  },
  {
    id: 6,
    question: "I'm behind the chair all day… but I don't feel like a real business owner.",
    description: "You grind nonstop, but deep down, you know the business isn't growing the way it should — and you don't know where to start."
  }
];

const PainPoints = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 12 
      } 
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section className="pb-6 pt-0 bg-transparent border-0 outline-none">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-6 pt-2 pb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2D4594] mb-6 tracking-tighter leading-[1.15]">
            The Silent Killers of Barbershop Growth
          </h2>
          <p className="text-lg text-blue-600 leading-relaxed">
            You're not alone — most barbershop owners feel the same way:
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {painPoints.map((point) => (
            <motion.div 
              key={point.id}
              variants={item}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
              whileHover="hover"
            >
              <h3 className="text-xl font-medium text-blue-700 mb-3 tracking-tight">
                "{point.question}"
              </h3>
              <p className="text-blue-600 font-normal leading-relaxed tracking-wide">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-barbershop-700 font-medium italic text-sm">
            If you've ever said this to yourself, you're not alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;