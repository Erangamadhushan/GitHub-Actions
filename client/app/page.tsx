'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, Heart, Zap, Users, ChevronRight, Star } from 'lucide-react'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Professional Photography Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Capture Your Precious Moments
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                LensClick brings professional photography expertise to your weddings, birthday parties, convocations, and special events. Let us preserve your memories with stunning, high-quality photographs.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  size="lg"
                  onClick={() => router.push('/book')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Book Now
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => router.push('/portfolio')}
                >
                  View Portfolio
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">Photos Captured</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">5★</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Camera className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Professional Photography Showcase</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Professional photography for every special occasion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Wedding Photography */}
            <Card className="border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Wedding Photography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Capture the love and joy of your wedding day with professional, artistic photographs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Pre-wedding shoots
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    8-10 hours coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    500+ edited photos
                  </li>
                </ul>
                <Button size="sm" variant="outline" className="w-full text-xs mt-4 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Birthday Party Photography */}
            <Card className="border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Birthday Party</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Celebrate milestones with beautiful photographs that capture the fun and excitement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    4-6 hours coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Candid moments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    200+ edited photos
                  </li>
                </ul>
                <Button size="sm" variant="outline" className="w-full text-xs mt-4 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Convocation Photography */}
            <Card className="border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Convocation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Document the achievements of your institution with professional event photography.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Full event coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Group and individual shots
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    300+ edited photos
                  </li>
                </ul>
                <Button size="sm" variant="outline" className="w-full text-xs mt-4 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Other Events */}
            <Card className="border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Other Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Corporate events, family portraits, anniversaries, and more. Custom packages available.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Custom duration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Flexible packages
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Tailored approach
                  </li>
                </ul>
                <Button size="sm" variant="outline" className="w-full text-xs mt-4 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose LensClick?</h2>
            <p className="text-lg text-muted-foreground">What sets us apart from the rest</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Camera className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Expertise</h3>
              <p className="text-muted-foreground">
                Over 10 years of experience capturing life's most important moments with artistic vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Personalized Service</h3>
              <p className="text-muted-foreground">
                We understand each event is unique. Custom packages tailored to your specific needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quick Delivery</h3>
              <p className="text-muted-foreground">
                High-quality edited photos delivered within 2-3 weeks of your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Recent Work</h2>
            <p className="text-lg text-muted-foreground">Explore our latest photography projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center cursor-pointer hover:border-primary/50 transition-all group"
              >
                <div className="text-center group-hover:scale-110 transition-transform">
                  <Camera className="w-16 h-16 text-primary/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Event {item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => router.push('/portfolio')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              View Full Portfolio
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Ready to Book Your Session?</h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us today to discuss your photography needs and find the perfect package for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => router.push('/signup')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Get Started
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">LensClick</h3>
              <p className="text-sm text-muted-foreground">Professional photography services for your special moments.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/wedding" className="hover:text-foreground">Weddings</Link></li>
                <li><Link href="/services/birthday" className="hover:text-foreground">Birthday Parties</Link></li>
                <li><Link href="/services/convocation" className="hover:text-foreground">Convocations</Link></li>
                <li><Link href="/services/other" className="hover:text-foreground">Other Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 LensClick. All rights reserved. Built with care for photography lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
