'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Camera, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { UserRole } from '@/types'

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer' as UserRole,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value as UserRole }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setIsLoading(true)

    try {
      // TODO: Integrate with your backend API
      console.log('Signup with:', formData)
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     fullName: formData.fullName,
      //     email: formData.email,
      //     password: formData.password,
      //     role: formData.role,
      //   }),
      // })
      
      // For now, simulate a successful signup
      localStorage.setItem('user_email', formData.email)
      localStorage.setItem('user_role', formData.role)
      router.push(`/dashboard?role=${formData.role}`)
    } catch (err) {
      setError('Signup failed. Please try again.')
      console.error('Signup error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background pt-20 px-4 pb-12">
      <div className="max-w-2xl mx-auto">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">LensClick</h1>
          <p className="text-sm text-muted-foreground mt-2">Create Your Account</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Customer Card */}
          <div className={`rounded-lg border-2 p-4 cursor-pointer transition-all ${
            formData.role === 'customer'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-muted-foreground'
          }`}
          onClick={() => handleRoleChange('customer')}
          role="button"
          tabIndex={0}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-foreground">Customer</h3>
              {formData.role === 'customer' && (
                <Check className="w-5 h-5 text-primary" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Book professional photography services for your special events
            </p>
          </div>

          {/* Admin Card */}
          <div className={`rounded-lg border-2 p-4 cursor-pointer transition-all ${
            formData.role === 'admin'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-muted-foreground'
          }`}
          onClick={() => handleRoleChange('admin')}
          role="button"
          tabIndex={0}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-foreground">Admin</h3>
              {formData.role === 'admin' && (
                <Check className="w-5 h-5 text-primary" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Manage bookings, upload photos, and control access
            </p>
          </div>

          {/* Organizer Card */}
          <div className={`rounded-lg border-2 p-4 cursor-pointer transition-all ${
            formData.role === 'organizer'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-muted-foreground'
          }`}
          onClick={() => handleRoleChange('organizer')}
          role="button"
          tabIndex={0}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-foreground">Organizer</h3>
              {formData.role === 'organizer' && (
                <Check className="w-5 h-5 text-primary" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Access and download your event photos securely
            </p>
          </div>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Fill in your details to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Already have an account?{' '}
                <Link href="/login" className="text-primary hover:text-primary/90 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground text-center mt-6">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}
