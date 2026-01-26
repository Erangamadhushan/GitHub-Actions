"use client";

import Link from "next/link";
import { CheckCircle2, Heart, Users, Camera } from "lucide-react";

export default function WeddingPhotography() {
  const features = [
    {
      icon: Users,
      title: "Multi-Photographer Coverage",
      description: "Capture every angle with 2 dedicated photographers",
    },
    {
      icon: Camera,
      title: "Pre-Wedding Shoot",
      description: "Complimentary engagement photos at your favorite location",
    },
    {
      icon: Heart,
      title: "Emotional Moments",
      description: "Candid shots that capture genuine emotions and reactions",
    },
    {
      icon: Camera,
      title: "Professional Editing",
      description: "Color correction, enhancement, and artistic touch-ups",
    },
  ];

  const packages = [
    {
      name: "Ceremony Only",
      price: "₹25,000",
      hours: "3 hours",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      features: [
        "Professional coverage",
        "Same-day editing samples",
        "100+ edited photos",
        "Cloud storage access",
      ],
    },
    {
      name: "Full Day Coverage",
      price: "₹50,000",
      hours: "6-8 hours",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      features: [
        "2 photographers",
        "Pre-wedding shoot",
        "All ceremonies + reception",
        "300+ edited photos",
        "Premium album design",
        "Gift prints",
      ],
      highlighted: true,
    },
    {
      name: "Extended Coverage",
      price: "₹75,000",
      hours: "10-12 hours",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      features: [
        "2-3 photographers",
        "Pre-wedding + mehndi",
        "Complete wedding coverage",
        "500+ edited photos",
        "Premium album",
        "Videographer coordination",
        "Drone shots available",
      ],
    },
  ];

  const timeline = [
    {
      step: "Pre-Wedding Consultation",
      description: "Discuss your vision, style preferences, and event timeline",
    },
    {
      step: "Pre-Wedding Shoot",
      description: "Capture engagement photos at your chosen location",
    },
    {
      step: "Wedding Day Coverage",
      description: "Comprehensive photography throughout all ceremonies",
    },
    {
      step: "Professional Editing",
      description: "Careful editing and enhancement of all photos",
    },
    {
      step: "Album & Delivery",
      description: "Premium album design and delivery of all images",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center border-b border-border"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=400&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Wedding Photography</h1>
            <p className="text-xl">Capture the magic of your special day</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Your Love Story, Beautifully Captured
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your wedding day is one of the most important moments in your
              life. We believe in capturing not just the events, but the
              emotions, connections, and beautiful details that make your day
              uniquely yours.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With years of experience photographing weddings across diverse
              cultures and styles, our team knows how to anticipate candid
              moments and compose stunning portraits that you'll treasure
              forever.
            </p>
            <Link
              href="/book"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Book Your Wedding
            </Link>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6">What's Included</h3>
            <ul className="space-y-4">
              {[
                "Multi-photographer coverage",
                "Pre-wedding engagement shoot",
                "Professional color editing",
                "High-resolution digital copies",
                "Premium album design",
                "Cloud storage for guests",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-primary shrink-0 mt-1"
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
            Wedding Packages
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
                      POPULAR
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

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Photography Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timeline.map((item, idx) => (
              <div
                key={item.step}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-semibold mb-2">{item.step}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Preserve Your Wedding Memories?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Let's discuss your wedding photography needs and create a custom
            package that fits your vision.
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
