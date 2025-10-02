"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-in" | "scale";
  delay?: number;
  duration?: number;
  threshold?: number; // 0 to 1, percentage of element visible to trigger
  once?: boolean;
}

const animations: Record<string, Variants> = {
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  "slide-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  "slide-in": {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  "scale": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }
};

export const ScrollAnimation = ({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          controls.start("visible");
          if (once) setHasAnimated(true);
        } else if (!entry.isIntersecting && !once) {
          controls.start("hidden");
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px" // Triggers slightly before the element comes into view
      }
    );

    observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls, hasAnimated, once, threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
