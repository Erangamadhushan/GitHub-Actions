'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Camera,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Replace with your backend API endpoint
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@lensclick.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(555) 123-4567',
      description: 'Call us during business hours for immediate assistance',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '123 Photography Lane, City',
      description: 'Visit us for consultations and portfolio viewing',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      description: 'Weekends available for events and consultations',
    },
  ]

  const faqs = [
    {
      question: 'What is your booking process?',
      answer:
        'Our booking process is simple. Select your preferred date and service package on our booking page, fill in your event details, and complete the payment. You\'ll receive a confirmation email with all the details.',
    },
    {
      question: 'When will I receive my edited photos?',
      answer:
        'We deliver edited photos within 2-4 weeks of your event. For urgent deliveries, we offer a rush service at an additional cost with a 1-week turnaround.',
    },
    {
      question: 'Do you offer videography services?',
      answer:
        'Yes, we offer professional videography as an add-on to our photography packages. This includes highlight reels and full event videos with professional editing.',
    },
    {
      question: 'What happens if I\'m not satisfied with the photos?',
      answer:
        'We offer a 100% satisfaction guarantee. If you\'re not happy with your photos, we\'ll work with you to retake shots or provide a full refund.',
    },
    {
      question: 'Can you travel for events?',
      answer:
        'Absolutely! We travel locally and regionally for events. Travel fees may apply for locations outside our service area. Contact us for specific details.',
    },
    {
      question: 'Do you provide prints or only digital photos?',
      answer:
        'We provide digital photos by default. However, our packages include print rights, and we can arrange professional printing or include printed albums in our premium packages.',
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
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have questions about our services? We'd love to hear from you. Reach out and let's
              discuss your photography needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon
              return (
                <Card key={idx} className="border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="font-medium text-primary mb-2">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="space-y-4 py-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a subject</option>
                          <option value="booking">Booking Inquiry</option>
                          <option value="wedding">Wedding Photography</option>
                          <option value="birthday">Birthday Photography</option>
                          <option value="event">Special Event</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your event and photography needs..."
                          required
                          rows={5}
                          className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                        {!loading && <Send className="w-4 h-4 ml-2" />}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <div className="h-96 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map - Google Maps Integration</p>
                  <p className="text-sm text-muted-foreground mt-2">Replace with actual map embed</p>
                </div>
              </div>

              <Card className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-foreground">By Appointment</span>
                    </div>
                    <p className="text-sm text-muted-foreground pt-3 border-t border-border">
                      Available for events throughout the week, including weekends with prior
                      arrangement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-border bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-foreground hover:text-primary transition-colors">
                      {faq.question}
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{faq.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Ready to Book?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Don't wait! Reserve your photography session today and let us capture your most
              precious moments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              <Link href="/book">Book Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/services">View Services</Link>
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
              <p className="text-sm text-muted-foreground">
                Professional photography services for your special moments.
              </p>
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
