"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import LoginModal from "./login-modal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Only run this effect on the client side
    if (typeof window !== 'undefined') {
      // Check scroll position immediately on mount
      const initialScrollTop = window.scrollY;
      setIsScrolled(initialScrollTop > 10);
      
      // Use requestAnimationFrame for smoother performance
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 10);
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white/10 backdrop-blur-sm py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Left Side - Logo and Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative overflow-hidden rounded-lg">
              <Image 
                src="/images/Image2.png" 
                alt="BarberLytics Logo" 
                width={32} 
                height={32} 
                className="h-8 w-auto object-contain" 
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 ml-6">
            <div className="relative group">
              <button className={cn(
                "flex items-center gap-1 font-medium text-sm transition-colors duration-200",
                isScrolled 
                  ? "text-gray-700 hover:text-[#1C4596]" 
                  : "text-white/90 hover:text-white"
              )}>
                Businesses
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button className={cn(
                "flex items-center gap-1 font-medium text-sm transition-colors duration-200",
                isScrolled 
                  ? "text-gray-700 hover:text-[#1C4596]" 
                  : "text-white/90 hover:text-white"
              )}>
                Features
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <Link 
              href="#pricing" 
              className={cn(
                "font-medium text-sm transition-colors duration-200",
                isScrolled 
                  ? "text-gray-700 hover:text-[#1C4596]" 
                  : "text-white/90 hover:text-white"
              )}
            >
              Pricing
            </Link>
            
            <Link 
              href="#about" 
              className={cn(
                "font-medium text-sm transition-colors duration-200",
                isScrolled 
                  ? "text-gray-700 hover:text-[#1C4596]" 
                  : "text-white/90 hover:text-white"
              )}
            >
              Why Barberlytics
            </Link>
          </nav>
        </div>
        
        {/* Right Side - CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button 
            variant="ghost" 
            className={cn(
              "font-medium px-4 py-2 h-auto rounded-lg transition-all duration-300",
              isScrolled
                ? "text-gray-700 hover:text-[#1C4596] hover:bg-gray-100"
                : "text-white/90 hover:text-white hover:bg-white/10"
            )}
            onClick={() => setIsLoginModalOpen(true)}
          >
            Log in
          </Button>
          
          <Button 
            variant="default" 
            className="bg-[#1C4596] hover:bg-[#1C4596]/90 text-white font-semibold px-5 py-2.5 h-auto rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Try it now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="container py-6">
            <nav className="flex flex-col gap-4 mb-6">
              <Link href="#businesses" className="text-gray-700 hover:text-[#1C4596] font-medium py-2">
                Businesses
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-[#1C4596] font-medium py-2">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-[#1C4596] font-medium py-2">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#1C4596] font-medium py-2">
                Why Barberlytics
              </Link>
            </nav>
            
            <div className="flex flex-col gap-3">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-[#1C4596] font-medium justify-start rounded-lg"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Log in
              </Button>
              <Button 
                variant="default" 
                className="bg-[#1C4596] hover:bg-[#1C4596]/90 text-white font-semibold rounded-full"
              >
                Try it now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </header>
  );
};

export default Navbar;