'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Lock, Bell, Eye, EyeOff, Save, User, Shield, LogOut } from 'lucide-react'

interface UserSettings {
  email: string
  fullName: string
  phone: string
  company?: string
  notifications: {
    emailNotifications: boolean
    bookingUpdates: boolean
    newPhotos: boolean
    promotions: boolean
  }
  privacy: {
    profileVisibility: 'public' | 'private'
    allowSharing: boolean
  }
}

export default function SettingsPage() {
  const [userRole, setUserRole] = useState<string>('customer')
  const [settings, setSettings] = useState<UserSettings>({
    email: 'john.doe@example.com',
    fullName: 'John Doe',
    phone: '+1 (555) 123-4567',
    company: 'Event Organizers Inc.',
    notifications: {
      emailNotifications: true,
      bookingUpdates: true,
      newPhotos: true,
      promotions: false,
    },
    privacy: {
      profileVisibility: 'private',
      allowSharing: true,
    },
  })
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    const role = localStorage.getItem('user_role') || 'customer'
    setUserRole(role)
    // TODO: Load user settings from backend
  }, [])

  const handleSettingsChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNotificationChange = (key: string) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key as keyof typeof prev.notifications]
      }
    }))
  }

  const handlePrivacyChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value
      }
    }))
  }

  const handleSaveSettings = async () => {
    setIsSaving(true)
    // TODO: Send settings to backend API
    setTimeout(() => {
      setIsSaving(false)
      setSuccessMessage('Settings saved successfully!')
      setEditingSection(null)
      setTimeout(() => setSuccessMessage(''), 3000)
    }, 1000)
  }

  const handleChangePassword = () => {
    // TODO: Implement password change functionality
    alert('Password change functionality - implement modal with current and new password fields')
  }

  const handleLogout = () => {
    localStorage.removeItem('user_email')
    localStorage.removeItem('user_role')
    window.location.href = '/login'
  }

  return (
    <div className="p-6 space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-sm text-green-500 font-medium">{successMessage}</p>
        </div>
      )}

      {/* Account Settings */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditingSection(editingSection === 'account' ? null : 'account')}
            >
              {editingSection === 'account' ? 'Cancel' : 'Edit'}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {editingSection === 'account' ? (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Full Name</label>
                <input
                  type="text"
                  value={settings.fullName}
                  onChange={(e) => handleSettingsChange('fullName', e.target.value)}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleSettingsChange('email', e.target.value)}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Phone</label>
                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => handleSettingsChange('phone', e.target.value)}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              {(userRole === 'admin' || userRole === 'organizer') && (
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Company/Organization</label>
                  <input
                    type="text"
                    value={settings.company}
                    onChange={(e) => handleSettingsChange('company', e.target.value)}
                    className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              )}
              <Button
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="text-foreground font-medium">{settings.fullName}</p>
                </div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    {settings.email}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">{settings.phone}</p>
                </div>
              </div>
              {(userRole === 'admin' || userRole === 'organizer') && (
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Company/Organization</p>
                    <p className="text-foreground font-medium">{settings.company || 'Not set'}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your password and account security</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div>
              <p className="font-medium text-foreground">Password</p>
              <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleChangePassword}
            >
              Change Password
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div>
              <p className="font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="text-muted-foreground hover:text-foreground bg-transparent"
            >
              Enable
            </Button>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <p className="font-medium text-foreground mb-2">Active Sessions</p>
            <p className="text-sm text-muted-foreground mb-3">1 active session</p>
            <Button
              size="sm"
              variant="ghost"
              className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
            >
              Logout from All Other Sessions
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Control how you receive updates</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 hover:bg-secondary/50 rounded-lg transition-colors">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive all updates via email</p>
            </div>
            <button
              onClick={() => handleNotificationChange('emailNotifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.emailNotifications ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-secondary/50 rounded-lg transition-colors">
            <div>
              <p className="font-medium text-foreground">Booking Updates</p>
              <p className="text-sm text-muted-foreground">Get notified about booking confirmations</p>
            </div>
            <button
              onClick={() => handleNotificationChange('bookingUpdates')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.bookingUpdates ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.bookingUpdates ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-secondary/50 rounded-lg transition-colors">
            <div>
              <p className="font-medium text-foreground">New Photos Available</p>
              <p className="text-sm text-muted-foreground">Notify when your photos are ready</p>
            </div>
            <button
              onClick={() => handleNotificationChange('newPhotos')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.newPhotos ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.newPhotos ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-secondary/50 rounded-lg transition-colors">
            <div>
              <p className="font-medium text-foreground">Marketing & Promotions</p>
              <p className="text-sm text-muted-foreground">Receive special offers and promotions</p>
            </div>
            <button
              onClick={() => handleNotificationChange('promotions')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.promotions ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.promotions ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <Button
            onClick={handleSaveSettings}
            disabled={isSaving}
            className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save Notification Preferences'}
          </Button>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle>Privacy</CardTitle>
              <CardDescription>Control your privacy settings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground block">Profile Visibility</label>
            <div className="space-y-2">
              <div
                onClick={() => handlePrivacyChange('profileVisibility', 'public')}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                  settings.privacy.profileVisibility === 'public'
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-border/80'
                }`}
              >
                <p className="font-medium text-foreground">Public</p>
                <p className="text-sm text-muted-foreground">Your profile is visible to everyone</p>
              </div>
              <div
                onClick={() => handlePrivacyChange('profileVisibility', 'private')}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                  settings.privacy.profileVisibility === 'private'
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-border/80'
                }`}
              >
                <p className="font-medium text-foreground">Private</p>
                <p className="text-sm text-muted-foreground">Your profile is only visible to you</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-secondary/50 rounded-lg transition-colors border-t border-border pt-4 mt-4">
            <div>
              <p className="font-medium text-foreground">Allow Photo Sharing</p>
              <p className="text-sm text-muted-foreground">Allow event organizers to share your photos</p>
            </div>
            <button
              onClick={() => handlePrivacyChange('allowSharing', !settings.privacy.allowSharing)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.privacy.allowSharing ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.privacy.allowSharing ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <Button
            onClick={handleSaveSettings}
            disabled={isSaving}
            className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save Privacy Settings'}
          </Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-500/20 bg-red-500/5">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <CardTitle className="text-red-500">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full text-red-500 hover:text-red-600 hover:bg-red-500/10 border-red-500/20 bg-transparent"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
          <Button
            variant="outline"
            className="w-full text-red-500 hover:text-red-600 hover:bg-red-500/10 border-red-500/20 bg-transparent"
            // TODO: Implement delete account functionality
          >
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
