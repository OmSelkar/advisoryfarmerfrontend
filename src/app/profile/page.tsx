"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Phone, Settings, Sun, Moon } from "lucide-react"

export default function ProfilePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "Ravi Kumar",
    userId: "RKUMAR_PALAKKAD",
    location: "Palakkad, Kerala",
    primaryFarmingType: "Spices",
    phoneNumber: "+91 98765 43210",
    emailAddress: "ravi.kumar@email.com",
    marketPriceAlerts: true,
    weatherNotifications: true,
    aiAssistantSummary: true,
    language: "Malayalam",
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving profile data:", formData)
  }

  const handleCancel = () => {
    // Reset form or navigate back
    console.log("Cancelling changes")
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Profile Management</h1>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4" />
            <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            <Moon className="w-4 h-4" />
            <span className="text-sm text-gray-600 ml-2">{isDarkMode ? "Dark" : "Light"}</span>
          </div>
        </div>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <Avatar className="w-20 h-20 mx-auto lg:mx-0">
                <AvatarImage src="/indian-farmer-portrait.png" />
                <AvatarFallback className="bg-teal-100 text-teal-700 text-xl">RK</AvatarFallback>
              </Avatar>

              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="userId">User ID</Label>
                  <Input
                    id="userId"
                    value={formData.userId}
                    onChange={(e) => handleInputChange("userId", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="farmingType">Primary Farming Type</Label>
                  <Select
                    value={formData.primaryFarmingType}
                    onValueChange={(value) => handleInputChange("primaryFarmingType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Spices">Spices</SelectItem>
                      <SelectItem value="Rice">Rice</SelectItem>
                      <SelectItem value="Coconut">Coconut</SelectItem>
                      <SelectItem value="Rubber">Rubber</SelectItem>
                      <SelectItem value="Mixed">Mixed Farming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              Contact Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="emailAddress">Email Address</Label>
                <Input
                  id="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-600" />
              App Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Receive Market Price Alerts</p>
                  <p className="text-sm text-gray-500">Get notified about price changes</p>
                </div>
                <Switch
                  checked={formData.marketPriceAlerts}
                  onCheckedChange={(checked) => handleInputChange("marketPriceAlerts", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weather Forecast Notifications</p>
                  <p className="text-sm text-gray-500">Daily weather updates</p>
                </div>
                <Switch
                  checked={formData.weatherNotifications}
                  onCheckedChange={(checked) => handleInputChange("weatherNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">AI Assistant Daily Summary</p>
                  <p className="text-sm text-gray-500">Receive daily farming insights</p>
                </div>
                <Switch
                  checked={formData.aiAssistantSummary}
                  onCheckedChange={(checked) => handleInputChange("aiAssistantSummary", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-sm text-gray-500">Choose your preferred language</p>
                </div>
                <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Malayalam">Malayalam (മലയാളം)</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi (हिंदी)</SelectItem>
                    <SelectItem value="Tamil">Tamil (தமிழ்)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-end">
          <Button variant="outline" onClick={handleCancel} className="lg:w-auto bg-transparent">
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700 lg:w-auto">
            Save Changes
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
