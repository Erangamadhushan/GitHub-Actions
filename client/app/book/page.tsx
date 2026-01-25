'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ChevronLeft, Calendar, MapPin, Users, Clock } from 'lucide-react'
import type { EventType } from '@/types'

interface BookingFormData {
  eventType: EventType | ''
  servicePackage: string
  eventDate: string
  eventTime: string
  eventLocation: string
  eventDescription: string
  organizerName: string
  organizerEmail: string
  phoneNumber: string
}

const servicePackages: Record<EventType, { name: string; price: number; duration: number; description: string }[]> = {
  wedding: [
    { name: 'Premium', price: 50000, duration: 8, description: '8 hours coverage with pre-wedding shoot' },
    { name: 'Standard', price: 35000, duration: 6, description: '6 hours coverage with highlights' },
    { name: 'Essential', price: 20000, duration: 4, description: '4 hours coverage for ceremony and reception' },
  ],
  birthday: [
    { name: 'Deluxe', price: 8000, duration: 6, description: 'Full party coverage with decorations' },
    { name: 'Standard\', price: 5000, duration: 4, description \'Half-day coverage of main events' },
    { name: 'Basic', price: 3000, duration: 2, description: 'Cake cutting and key moments' },
  ],
  convocation: [
    { name: 'Premium', price: 25000, duration: 8, description: 'Full day coverage with group photos' },
    { name: 'Standard', price: 15000, duration: 6, description: 'Ceremony and key moments' },
    { name: 'Ceremony Only', price: 8000, duration: 3, description: 'Convocation ceremony coverage' },
  ],
  other: [
    { name: 'Custom', price: 0, duration: 0, description: 'Contact us for custom pricing' },
  ],
}

export default function BookPage() {
  const [step, setStep] = useState<'service' | 'details'>('service')
  const [formData, setFormData] = useState<BookingFormData>({
    eventType: '',
    servicePackage: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventDescription: '',
    organizerName: '',
    organizerEmail: '',
    phoneNumber: '',
  })
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; price: number; duration: number; description: string } | null>(null)

  const handleSelectEventType = (type: EventType) => {
    setFormData(prev => ({ ...prev, eventType: type, servicePackage: '' }))
    setSelectedPackage(null)
  }

  const handleSelectPackage = (pkg: { name: string; price: number; duration: number; description: string }) => {
    setSelectedPackage(pkg)
    setFormData(prev => ({ ...prev, servicePackage: pkg.name }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submission:', formData)
    // TODO: Integrate with your backend API
    // const response = await fetch('/api/bookings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    alert('Booking request submitted! We will confirm your appointment soon.')
  }

  const eventTypes: EventType[] = ['wedding', 'birthday', 'convocation', 'other']

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              Back Home
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">Book Your Photography Session</h1>
            <p className="text-muted-foreground">Choose your service and let us capture your special moments</p>
          </div>

          {/* Step Indicator */}
          <div className="flex gap-2 mb-8">
            <div className={`flex-1 h-1 rounded-full transition-colors ${step === 'service' ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`flex-1 h-1 rounded-full transition-colors ${step === 'details' ? 'bg-primary' : 'bg-muted'}`} />
          </div>

          {step === 'service' ? (
            // Service Selection Step
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Select Your Event Type</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleSelectEventType(type)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        formData.eventType === type
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-muted-foreground'
                      }`}
                    >
                      <h3 className="font-semibold text-foreground capitalize mb-2">{type} Photography</h3>
                      <p className="text-sm text-muted-foreground">
                        {type === 'wedding' && 'Capture your love story'}
                        {type === 'birthday' && 'Celebrate your special day'}
                        {type === 'convocation' && 'Document the achievement'}
                        {type === 'other' && 'Custom event photography'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {formData.eventType && formData.eventType !== 'other' && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Select Your Package</h2>
                  <div className="space-y-3">
                    {servicePackages[formData.eventType as EventType].map((pkg, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectPackage(pkg)}
                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                          selectedPackage?.name === pkg.name
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-muted-foreground'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-foreground">{pkg.name} Package</h3>
                          <span className="text-primary font-bold">₹{pkg.price.toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                        <div className="flex gap-6 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {pkg.duration} hours
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {formData.eventType === 'other' && (
                <Card className="border-primary/50 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      For custom event photography, please proceed to the next step and let us know your requirements. We'll provide personalized pricing.
                    </p>
                  </CardContent>
                </Card>
              )}

              <div className="flex gap-3">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Cancel
                  </Button>
                </Link>
                <Button
                  onClick={() => setStep('details')}
                  disabled={!formData.eventType || (!selectedPackage && formData.eventType !== 'other')}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </Button>
              </div>
            </div>
          ) : (
            // Details Collection Step
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="text-foreground">Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventTime" className="text-foreground">Event Start Time</Label>
                      <Input
                        id="eventTime"
                        name="eventTime"
                        type="time"
                        value={formData.eventTime}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventLocation" className="text-foreground">Event Location</Label>
                    <Input
                      id="eventLocation"
                      name="eventLocation"
                      placeholder="Venue address or location"
                      value={formData.eventLocation}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventDescription" className="text-foreground">Event Description</Label>
                    <Textarea
                      id="eventDescription"
                      name="eventDescription"
                      placeholder="Tell us more about your event (optional)"
                      value={formData.eventDescription}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground min-h-24 resize-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Information</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organizerName" className="text-foreground">Full Name</Label>
                      <Input
                        id="organizerName"
                        name="organizerName"
                        placeholder="Your full name"
                        value={formData.organizerName}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="text-foreground">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organizerEmail" className="text-foreground">Email Address</Label>
                    <Input
                      id="organizerEmail"
                      name="organizerEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.organizerEmail}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Event Type:</span>
                    <span className="text-foreground font-medium capitalize">{formData.eventType}</span>
                  </div>
                  {selectedPackage && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Package:</span>
                        <span className="text-foreground font-medium">{selectedPackage.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-foreground font-medium">{selectedPackage.duration} hours</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-primary/20">
                        <span className="text-foreground font-semibold">Total Price:</span>
                        <span className="text-primary font-bold text-lg">₹{selectedPackage.price.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={() => setStep('service')}
                  variant="outline"
                  className="flex-1"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Confirm Booking
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
