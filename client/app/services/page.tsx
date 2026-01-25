'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Heart,
  Cake,
  GraduationCap,
  Sparkles,
  Check,
  Clock,
  Users,
  Camera,
  Zap,
  Award,
} from 'lucide-react'

export default function ServicesPage() {
  const router = useRouter()

  const services = [
    {
      id: 1,
      title: 'Wedding Photography',
      icon: Heart,
      description: 'Capture every magical moment of your special day',
      price: 'Starting at $2,000',
      features: [
        'Pre-wedding photoshoot',
        'Full day coverage (8-12 hours)',
        'Professional editing',
        'Digital album (500+ photos)',
        'Engagement photo session',
        'Bridal shoot',
      ],
      color: 'from-red-500/10 to-pink-500/10',
      borderColor: 'border-red-500/20',
      iconColor: 'text-red-500',
    },
    {
      id: 2,
      title: 'Birthday Photography',
      icon: Cake,
      description: 'Celebrate and preserve birthday memories forever',
      price: 'Starting at $500',
      features: [
        '4-6 hours coverage',
        'Candid shots',
        'Professional editing',
        'Digital album (150+ photos)',
        'Group photos included',
        'Highlight reel (optional)',
      ],
      color: 'from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/20',
      iconColor: 'text-yellow-500',
    },
    {
      id: 3,
      title: 'Convocation Photography',
      icon: GraduationCap,
      description: 'Document your academic achievements with pride',
      price: 'Starting at $800',
      features: [
        'Full event coverage',
        'Individual portraits',
        'Group photos',
        'Professional editing',
        'Digital album (300+ photos)',
        'Certificate printing options',
      ],
      color: 'from-blue-500/10 to-purple-500/10',
      borderColor: 'border-blue-500/20',
      iconColor: 'text-blue-500',
    },
    {
      id: 4,
      title: 'Special Events',
      icon: Sparkles,
      description: 'Professional coverage for your corporate and private events',
      price: 'Custom Pricing',
      features: [
        'Flexible duration',
        'Multiple photographers',
        'Real-time editing',
        'Custom digital album',
        'Video clips (optional)',
        'Same-day delivery (optional)',
      ],
      color: 'from-purple-500/10 to-indigo-500/10',
      borderColor: 'border-purple-500/20',
      iconColor: 'text-purple-500',
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Award-Winning Photographers',
      description: 'Our team has won multiple photography awards and recognitions',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Edited photos delivered within 2-4 weeks of your event',
    },
    {
      icon: Camera,
      title: 'Premium Equipment',
      description: 'State-of-the-art cameras and professional-grade equipment',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: '10+ years of combined experience in professional photography',
    },
    {
      icon: Zap,
      title: 'Creative Vision',
      description: 'Unique artistic style that tells your story beautifully',
    },
    {
      icon: Check,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee or your money back',
    },
  ]

  const packages = [
    {
      name: 'Basic',
      description: 'Perfect for intimate gatherings',
      duration: '3-4 hours',
      photos: '100-150 photos',
      editing: 'Standard editing',
      price: '$500',
      features: ['Single photographer', 'Digital album', 'Print rights included', 'Online gallery'],
    },
    {
      name: 'Professional',
      description: 'Ideal for most events',
      duration: '6-8 hours',
      photos: '300-400 photos',
      editing: 'Premium editing',
      price: '$1,200',
      features: [
        'Two photographers',
        'Digital album',
        'Print rights included',
        'Online gallery',
        'Highlight video',
        'USB delivery',
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      description: 'Complete event coverage',
      duration: 'Full day (12+ hours)',
      photos: '600+ photos',
      editing: 'Premium + artistic',
      price: '$2,500',
      features: [
        'Two photographers',
        'Professional videographer',
        'Digital album',
        'Print rights included',
        'Online gallery',
        'Highlight video',
        'USB delivery',
        'Album book included',
        'Print package (50 prints)',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional photography services tailored for every special occasion. From intimate
              gatherings to grand celebrations, we capture moments that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-muted-foreground text-lg">
              Choose the service that best fits your event needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className={`border ${service.borderColor} bg-card/50 backdrop-blur hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10`}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-semibold text-primary text-lg">{service.price}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Service Packages</h2>
            <p className="text-muted-foreground text-lg">
              Flexible packages designed to meet your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <Card
                key={idx}
                className={`border-border bg-card transition-all ${
                  pkg.highlighted ? 'md:scale-105 border-primary/50 shadow-lg shadow-primary/20' : ''
                }`}
              >
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                  <p className="text-3xl font-bold text-primary mt-4">{pkg.price}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3 border-t border-border pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium text-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Photos:</span>
                      <span className="font-medium text-foreground">{pkg.photos}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Editing:</span>
                      <span className="font-medium text-foreground">{pkg.editing}</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-border pt-6">
                    <p className="text-sm font-semibold text-foreground mb-3">What's Included:</p>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-6 ${
                      pkg.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        : ''
                    }`}
                    variant={pkg.highlighted ? 'default' : 'outline'}
                    onClick={() => router.push('/book')}
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose LensClick</h2>
            <p className="text-muted-foreground text-lg">
              We're committed to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <Card key={idx} className="border-border bg-card/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Ready to Book Your Session?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Don't miss out on capturing your precious moments. Get in touch with us today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => router.push('/book')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Book Now
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
      <footer className="border-t border-border bg-card/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">LensClick</span>
              </div>
              <p className="text-sm text-muted-foreground">Professional photography services for your special moments.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Wedding Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Birthday Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Event Coverage
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Get In Touch</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📧 info@lensclick.com</li>
                <li>📱 (555) 123-4567</li>
                <li>📍 123 Photography Lane, City</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LensClick. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
