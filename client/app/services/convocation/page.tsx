"use client";

import Link from "next/link";
import { CheckCircle2, Award, Camera, Users } from "lucide-react";

export default function ConvocationPhotography() {
  const features = [
    {
      icon: Award,
      title: "Achievement Moments",
      description: "Capture the pride and joy of academic accomplishments",
    },
    {
      icon: Camera,
      title: "Professional Coverage",
      description: "Ceremonies, achievements, and celebration moments",
    },
    {
      icon: Users,
      title: "Group Portraits",
      description: "Perfectly composed photos with classmates and faculty",
    },
    {
      icon: Camera,
      title: "Event Documentation",
      description: "Complete record of your convocation day",
    },
  ];

  const packages = [
    {
      name: "Basic Coverage",
      price: "₹6,000",
      hours: "3 hours",
      image:
        "https://images.unsplash.com/photo-1427504494785-cdde41707539?w=600&h=400&fit=crop",
      features: [
        "One photographer",
        "Ceremony coverage",
        "Individual portraits",
        "80+ edited photos",
        "Digital delivery",
      ],
    },
    {
      name: "Complete Event",
      price: "₹12,000",
      hours: "5-6 hours",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
      features: [
        "One-two photographers",
        "Full ceremony coverage",
        "Celebration moments",
        "Group & individual portraits",
        "180+ edited photos",
        "Album design",
        "Photo slideshow",
      ],
      highlighted: true,
    },
    {
      name: "Premium Documentation",
      price: "₹18,000",
      hours: "8 hours",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      features: [
        "Two photographers",
        "Complete day coverage",
        "Before & after event",
        "Professional video highlights",
        "280+ photos",
        "Premium album",
        "Drone shots available",
      ],
    },
  ];

  const benefits = [
    "Preserve your achievement forever",
    "Share with family and friends worldwide",
    "Professional quality memorable keepsake",
    "Social media ready formats",
    "Quick turnaround delivery",
    "Affordable and professional service",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center border-b border-border"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1427504494785-cdde41707539?w=1200&h=400&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Convocation Photography</h1>
            <p className="text-xl">
              Celebrate your achievements with professional photography
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Commemorate Your Graduation
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your convocation day marks the culmination of years of hard work
              and dedication. It's a milestone worth celebrating and preserving
              forever. Our photographers know how to capture the pride, joy, and
              significance of this momentous occasion.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From the ceremonial robes to the celebratory moments with family,
              we ensure every important aspect of your convocation is documented
              beautifully and professionally.
            </p>
            <Link
              href="/book"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Book Your Photographer
            </Link>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-primary flex-shrink-0 mt-1"
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 py-12 border-y border-border">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all"
              >
                <Icon size={32} className="mx-auto text-primary mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Convocation Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg overflow-hidden border transition-all ${
                  pkg.highlighted
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20 scale-105"
                    : "bg-card border-border hover:border-primary"
                }`}
              >
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  {pkg.highlighted && (
                    <div className="text-primary text-sm font-bold mb-2">
                      RECOMMENDED
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground mb-6">{pkg.hours}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-primary font-bold text-lg">
                          ✓
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book"
                    className={`block text-center py-2 rounded-lg font-semibold transition-all ${
                      pkg.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-opacity-90"
                        : "bg-card border border-border text-foreground hover:border-primary"
                    }`}
                  >
                    Choose Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Capture */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">What We Capture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Formal entrance into auditorium",
              "Academic procession and ceremony",
              "Individual graduation moments",
              "Certificate/degree receiving",
              "Family celebration photos",
              "Group photos with classmates",
              "Candid moments of joy",
              "Post-ceremony celebrations",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">→</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Preserve Your Academic Achievement
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Book your convocation photographer now and ensure this milestone is
            captured professionally.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
