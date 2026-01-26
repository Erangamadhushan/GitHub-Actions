"use client";

import Link from "next/link";
import { Award, Users, Heart, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Events Captured", value: "500+", icon: Award },
    { label: "Happy Clients", value: "1000+", icon: Users },
    { label: "Years Experience", value: "8+", icon: Heart },
    { label: "Photos Delivered", value: "50K+", icon: Zap },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Lead Photographer",
      specialization: "Wedding & Event Photography",
    },
    {
      name: "Priya Sharma",
      role: "Creative Director",
      specialization: "Composition & Lighting",
    },
    {
      name: "Anil Verma",
      role: "Senior Photographer",
      specialization: "Portrait & Studio Work",
    },
    {
      name: "Kavya Singh",
      role: "Photo Editor",
      specialization: "Post-Processing & Enhancement",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About LensClick
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Capturing life's most precious moments with passion, creativity, and
            technical excellence since 2016.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              LensClick was founded with a simple vision: to make professional
              photography accessible to everyone. What started as a one-man
              operation has grown into a team of passionate photographers
              dedicated to preserving your most cherished memories.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Every wedding, birthday, convocation, and special event is unique.
              That's why we don't believe in one-size-fits-all photography. We
              work closely with each client to understand their vision and
              deliver images that tell their story authentically.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 500 events captured and thousands of satisfied clients,
              we've built our reputation on quality, reliability, and artistic
              excellence.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="h-64 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Zap size={48} className="mx-auto text-primary mb-3" />
                <p className="text-muted-foreground">Established 2016</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 py-12 border-y border-border">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <Icon size={32} className="mx-auto text-primary mb-3" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver exceptional photography that exceeds expectations,
              preserves precious moments, and tells compelling stories through
              the power of visual artistry. We believe in building lasting
              relationships with our clients through professionalism,
              creativity, and unwavering commitment to quality.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Excellence in every frame and interaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Integrity and transparent communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Innovation in techniques and technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Passion for capturing authentic moments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all"
              >
                <div className="w-24 h-24 bg-linear-to-br from-primary/30 to-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={40} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  {member.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose LensClick?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-lg">
                Professional Excellence
              </h3>
              <p className="text-muted-foreground">
                Industry-leading equipment and experienced photographers ensure
                top-quality results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">
                Personalized Approach
              </h3>
              <p className="text-muted-foreground">
                We understand your vision and deliver custom solutions tailored
                to your needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Quick Turnaround</h3>
              <p className="text-muted-foreground">
                Receive edited, high-resolution photos within 2-3 weeks of your
                event.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">
                Competitive Pricing
              </h3>
              <p className="text-muted-foreground">
                Premium quality photography at affordable rates with flexible
                packages.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can capture your special moments with
            creativity and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Get in Touch
            </Link>
            <Link
              href="/book"
              className="inline-block bg-card border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:border-primary transition-all"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
