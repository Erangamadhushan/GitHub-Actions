'use client';

import Link from 'next/link';
import { CheckCircle2, Camera, Sparkles, Users } from 'lucide-react';

export default function BirthdayPhotography() {
  const features = [
    { icon: Sparkles, title: 'Celebration Coverage', description: 'Capture all the fun, laughter, and special moments' },
    { icon: Camera, title: 'Creative Composition', description: 'Artistic shots that showcase personality and joy' },
    { icon: Users, title: 'Group Photos', description: 'Perfectly composed group shots with family and friends' },
    { icon: Camera, title: 'Quick Turnaround', description: 'Edited photos within 1-2 weeks for sharing' },
  ];

  const packages = [
    {
      name: 'Birthday Bash',
      price: '₹8,000',
      hours: '2 hours',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
      features: ['One photographer', 'Cake cutting & celebrations', '50+ edited photos', 'Digital delivery'],
    },
    {
      name: 'Party Perfect',
      price: '₹15,000',
      hours: '4 hours',
      image: 'https://images.unsplash.com/photo-1504674900769-0c8fcb0aad18?w=600&h=400&fit=crop',
      features: ['One photographer', 'Complete party coverage', 'Pre-party portraits', '120+ edited photos', 'Album design', 'Social media ready'],
      highlighted: true,
    },
    {
      name: 'Day-Long Celebration',
      price: '₹22,000',
      hours: '6-8 hours',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop',
      features: ['Two photographers', 'Decorations & setup', 'Party throughout day', 'Professional portraits', '200+ edited photos', 'Premium album', 'Video highlights available'],
    },
  ];

  const ideaCards = [
    { title: 'Themed Shoots', description: 'Incorporate party theme into your photos' },
    { title: 'Candid Moments', description: 'Genuine laughter and joy captured naturally' },
    { title: 'Cake Artistry', description: 'Beautiful shots of the cake and cake-cutting ceremony' },
    { title: 'Guest Interactions', description: 'Group photos and fun moments with friends' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center border-b border-border" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=400&fit=crop)',
      }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Birthday Photography</h1>
            <p className="text-xl">Celebrate with pictures worth a thousand smiles</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Make Your Birthday Unforgettable</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Birthdays are all about celebration, joy, and creating memories. Our photographers specialize in capturing 
              the genuine happiness, fun moments, and special connections that make birthday parties memorable.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether it's a kids' birthday, milestone celebration, or adult gathering, we know how to capture the energy, 
              emotions, and party spirit in beautiful, shareable photos.
            </p>
            <Link
              href="/book"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Book Birthday Photographer
            </Link>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {['Experience with all age groups', 'Creative and fun approach', 'Quick delivery of photos', 'Professional editing and enhancement', 'Social media ready formats', 'Affordable packages'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
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
              <div key={feature.title} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all">
                <Icon size={32} className="mx-auto text-primary mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Birthday Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg overflow-hidden border transition-all ${
                  pkg.highlighted
                    ? 'border-primary bg-primary/5 ring-2 ring-primary/20 scale-105'
                    : 'bg-card border-border hover:border-primary'
                }`}
              >
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  {pkg.highlighted && <div className="text-primary text-sm font-bold mb-2">MOST POPULAR</div>}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground mb-6">{pkg.hours}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-primary font-bold text-lg">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book"
                    className={`block text-center py-2 rounded-lg font-semibold transition-all ${
                      pkg.highlighted
                        ? 'bg-primary text-primary-foreground hover:bg-opacity-90'
                        : 'bg-card border border-border text-foreground hover:border-primary'
                    }`}
                  >
                    Choose Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Ideas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Photography Ideas for Your Party</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ideaCards.map((idea) => (
              <div key={idea.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all">
                <h3 className="font-semibold mb-2 text-lg">{idea.title}</h3>
                <p className="text-muted-foreground text-sm">{idea.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Capture the Birthday Fun?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Let's book your photographer and ensure every precious moment is beautifully captured.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
