import Navbar from "@/components/navbar";
import AnimatedHero from "@/components/sections/animated-hero";
import PainPoints from "@/components/sections/pain-points";
import ScrollableCards from "@/components/sections/scrollable-cards";
import Positioning from "@/components/sections/positioning";
import FeatureCards from "@/components/sections/feature-cards";
import FeatureHighlight from "@/components/sections/feature-highlight";
import ModernTestimonials from "@/components/sections/modern-testimonials";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <AnimatedHero />
        
        {/* Curved divider for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-30">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[60px] md:h-[80px]"
          >
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7EAEFF" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#FCC100" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1"/>
              </linearGradient>
            </defs>
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,109,20.48,321.39,56.44Z"
              fill="url(#curveGradient)"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Pain Points Section - Gradient positioned lower */}
      <div className="relative">
        <div className="absolute inset-x-0 top-20 bottom-0 bg-gradient-to-b from-yellow-50/15 via-blue-50/10 to-white"></div>
        <div className="relative">
          <PainPoints />
        </div>
      </div>
      
      {/* Scrollable Cards Section */}
      <div className="bg-white">
        <ScrollableCards />
      </div>
      
      {/* Positioning Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/20"></div>
        <div className="relative">
          <Positioning />
        </div>
      </div>
      
      {/* Feature Cards Section */}
      <div className="bg-white">
        <FeatureCards />
      </div>
      
      {/* Feature Highlight Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tl from-white via-blue-50/25 to-yellow-50/15"></div>
        <div className="relative">
          <FeatureHighlight />
        </div>
      </div>
      
      {/* Modern Testimonials Section */}
      <div className="bg-white">
        <ModernTestimonials />
      </div>

      {/* Testimonials Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-blue-50/20 to-yellow-50/10"></div>
        <div className="relative">
          <Testimonials />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-white">
        <CTA />
      </div>
      
      {/* FAQ Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/15 to-gray-50"></div>
        <div className="relative">
          <FAQ />
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </main>
  );
}