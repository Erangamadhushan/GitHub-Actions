"use client";

import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

import Footer from "@/components/footer";
import HeroSection from "@/components/pages/home/hero-section";
import ServicesSection from "@/components/pages/home/services-section";
import WhyChooseUsSection from "@/components/pages/home/why-choose-us-section";
import PortfolioSection from "@/components/pages/home/portfolio-section";
import CTASection from "@/components/pages/home/cta-section";


export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <CTASection />

      <Footer />
      
    </div>
  );
}
