'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // TODO: Integrate with your backend API
      console.log('Login with:', formData)
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      
      // For now, simulate a successful login
      localStorage.setItem('user_email', formData.email)
      router.push('/dashboard')
    } catch (err) {
      setError('Login failed. Please try again.')
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background pt-20 px-4">
      <div className="max-w-md mx-auto">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">LensClick</h1>
          <p className="text-sm text-muted-foreground mt-2">Professional Photography Services</p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader className="space-y-2">
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive">
                  {error}
                </div>
              )}

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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/90">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
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
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Don't have an account?{' '}
                <Link href="/signup" className="text-primary hover:text-primary/90 font-medium">
                  Create one
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Helpful Info */}
        <div className="mt-8 grid gap-3">
          <div className="rounded-lg bg-secondary/30 border border-border p-4">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Customer?</span> Book your photography session and manage appointments.
            </p>
          </div>
          <div className="rounded-lg bg-secondary/30 border border-border p-4">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Admin?</span> Manage bookings, upload photos, and control access.
            </p>
          </div>
          <div className="rounded-lg bg-secondary/30 border border-border p-4">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Organizer?</span> View and download your event photos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
