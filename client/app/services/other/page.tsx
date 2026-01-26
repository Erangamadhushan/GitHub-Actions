"use client";

import Link from "next/link";
import { CheckCircle2, Camera, Users, Star } from "lucide-react";

export default function OtherEventsPhotography() {
  const eventTypes = [
    {
      title: "Corporate Events",
      description:
        "Product launches, conferences, team building, and business celebrations",
    },
    {
      title: "Family Portraits",
      description:
        "Professional family photos, reunion photography, and group sessions",
    },
    {
      title: "Anniversaries",
      description: "Silver, golden, and milestone anniversary celebrations",
    },
    {
      title: "Engagements",
      description: "Pre-wedding engagement shoots and celebration events",
    },
    {
      title: "Festivals & Cultural Events",
      description:
        "Diwali, Holi, religious ceremonies, and cultural celebrations",
    },
    {
      title: "Charity & Fundraising",
      description: "Event coverage for non-profits and charity galas",
    },
  ];

  const features = [
    {
      icon: Camera,
      title: "Versatile Coverage",
      description: "Expertise in photographing any type of event",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Experienced photographers for all event types",
    },
    {
      icon: Star,
      title: "Creative Approach",
      description: "Unique perspectives tailored to your event",
    },
    {
      icon: Camera,
      title: "Full Service",
      description: "From pre-event planning to post-editing delivery",
    },
  ];

  const packages = [
    {
      name: "Basic Event",
      price: "₹7,500",
      hours: "3 hours",
      features: [
        "One photographer",
        "Event coverage",
        "Digital delivery",
        "60+ edited photos",
        "Quick turnaround",
      ],
    },
    {
      name: "Standard Event",
      price: "₹12,500",
      hours: "5 hours",
      features: [
        "One photographer",
        "Extended coverage",
        "Pre & post event setup",
        "120+ edited photos",
        "Album design",
      ],
      highlighted: true,
    },
    {
      name: "Premium Event",
      price: "₹18,500",
      hours: "8 hours",
      features: [
        "Two photographers",
        "Complete day coverage",
        "Video highlights",
        "200+ photos",
        "Premium album",
        "Custom requests",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center border-b border-border"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=1200&h=400&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Event Photography</h1>
            <p className="text-xl">
              Capture the essence of your special occasion
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Celebrate Every Occasion
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Whether it's a corporate event, family gathering, cultural
              celebration, or any special occasion, we have the expertise to
              capture the moments that matter. Every event has a unique story,
              and we're here to tell it beautifully through our lens.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With experience across diverse event types and cultures, our team
              knows how to adapt to different environments, lighting conditions,
              and expectations to deliver stunning photography that exceeds your
              vision.
            </p>
            <Link
              href="/book"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Book Your Event
            </Link>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6">We Photograph</h3>
            <ul className="space-y-3">
              {eventTypes.map((event) => (
                <li key={event.title} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">•</span>
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
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

        {/* Event Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Event Photography Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Camera size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Event Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg overflow-hidden border transition-all bg-card ${
                  pkg.highlighted
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary"
                }`}
              >
                <div
                  className={`h-1 ${pkg.highlighted ? "bg-primary" : "bg-border"}`}
                />
                <div className="p-6">
                  {pkg.highlighted && (
                    <div className="text-primary text-sm font-bold mb-2">
                      MOST POPULAR
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
                        <CheckCircle2
                          size={16}
                          className="text-primary flex-shrink-0 mt-1"
                        />
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

        {/* Why Choose Us */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Us for Your Event
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Professional Expertise",
                desc: "Years of experience in diverse event photography",
              },
              {
                title: "Adaptive Approach",
                desc: "We customize our style to match your event needs",
              },
              {
                title: "Quick Turnaround",
                desc: "Edited photos delivered within 2 weeks",
              },
              {
                title: "Equipment & Backup",
                desc: "Professional gear with backup equipment on set",
              },
              {
                title: "Creative Direction",
                desc: "We suggest shots and compositions for better results",
              },
              {
                title: "Competitive Pricing",
                desc: "Quality photography at affordable rates",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Capture Your Event?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Let's discuss your event photography needs and create a custom
            package that works perfectly for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-card border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:border-primary transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
