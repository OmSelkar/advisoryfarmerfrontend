"use client"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Cloud,
  Wind,
  Sun,
  Droplets,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  MapPin,
  CloudRain,
  Sprout,
  Wheat,
  Building2,
  ExternalLink,
  Calendar,
  X 
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DashboardPage() {
    const [showAlert, setShowAlert] = useState(true);

  
  return (
    <AppLayout>
      <div className="space-y-6">
        {showAlert && (
        <Alert className="relative border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800 dark:text-orange-200">
            <strong>Weather Alert:</strong> Heavy rainfall expected in the next 24 hours. Consider protecting sensitive
            crops and ensure proper drainage.
          </AlertDescription>

          {/* Cross button inside the alert */}
          <button
            onClick={() => setShowAlert(false)}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
        </Alert>
      )}

        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-4 lg:p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold mb-2">Welcome back, Ravi!</h1>
              <p className="text-teal-100 mb-3 lg:mb-4 text-sm lg:text-base">
                Here's what's happening with your farm today.
              </p>
              <div className="flex items-center gap-2 text-teal-100">
                <MapPin className="w-4 h-4" />
                <span className="text-sm lg:text-base">Palakkad</span>
              </div>
            </div>
            <div className="lg:hidden"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Today's Weather */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg text-foreground">
                <Cloud className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500" />
                Today's Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 lg:gap-4 text-center">
                <div>
                  <Droplets className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500 mx-auto mb-1 lg:mb-2" />
                  <p className="text-xs lg:text-sm text-muted-foreground">Humidity</p>
                  <p className="text-lg lg:text-2xl font-bold text-foreground">75%</p>
                </div>
                <div>
                  <Wind className="w-6 h-6 lg:w-8 lg:h-8 text-gray-500 mx-auto mb-1 lg:mb-2" />
                  <p className="text-xs lg:text-sm text-muted-foreground">Wind</p>
                  <p className="text-lg lg:text-2xl font-bold text-foreground">
                    12 <span className="text-xs lg:text-sm font-normal">km/h</span>
                  </p>
                </div>
                <div>
                  <Sun className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <p className="text-xs lg:text-sm text-muted-foreground">UV Index</p>
                  <p className="text-lg lg:text-2xl font-bold text-foreground">6</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today's Market Prices */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle className="flex items-center justify-between text-base lg:text-lg text-foreground">
                <span>Today's Market Prices</span>
                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Wheat className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-700" />
                  </div>
                  <div>
                    <p className="font-medium text-sm lg:text-base text-foreground">Rice</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Per quintal</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm lg:text-base text-foreground">₹2,850</p>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs lg:text-sm">2.5%</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 text-xs lg:text-sm">🥥</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm lg:text-base text-foreground">Coconut</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Per piece</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm lg:text-base text-foreground">₹25</p>
                  <p className="text-xs lg:text-sm text-muted-foreground">stable</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-700 text-xs lg:text-sm">🌶️</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm lg:text-base text-foreground">Pepper</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Per kg</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm lg:text-base text-foreground">₹425</p>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs lg:text-sm">1.2%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg text-foreground">                
                <div className="flex items-center gap-2">
                  <Sprout className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
                  Crop Recommendations
                </div>
                <Link href="/disease-prediction">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4">
              <div className="flex items-start gap-2 lg:gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <Sprout className="w-4 h-4 lg:w-5 lg:h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200 text-sm lg:text-base">
                    Perfect time for Tomato planting
                  </p>
                  <p className="text-xs lg:text-sm text-green-700 dark:text-green-300">
                    Based on current weather conditions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 lg:gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <CloudRain className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800 dark:text-blue-200 text-sm lg:text-base">
                    Consider Okra for monsoon season
                  </p>
                  <p className="text-xs lg:text-sm text-blue-700 dark:text-blue-300">High market demand expected</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disease Prediction - Updated to link to separate page */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle className="flex items-center justify-between text-base lg:text-lg text-foreground">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
                  Disease Prediction
                </div>
                <Link href="/disease-prediction">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4">
              <div className="flex items-start gap-2 lg:gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <AlertTriangle className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200 text-sm lg:text-base">
                    High risk of Blight on Paddy Field A
                  </p>
                  <p className="text-xs lg:text-sm text-yellow-700 dark:text-yellow-300">Detected 2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-2 lg:gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200 text-sm lg:text-base">
                    Coconut Plantation is healthy
                  </p>
                  <p className="text-xs lg:text-sm text-green-700 dark:text-green-300">Last checked 4 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3 lg:pb-6">
            <CardTitle className="flex items-center justify-between text-base lg:text-lg text-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
                Government Schemes
              </div>
              <Link href="/government-schemes">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 lg:space-y-4">
            <div className="flex items-start gap-2 lg:gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <Building2 className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-blue-800 dark:text-blue-200 text-sm lg:text-base">PM-KISAN Scheme</p>
                    <p className="text-xs lg:text-sm text-blue-700 dark:text-blue-300 mb-2">
                      Direct income support of ₹6,000 per year
                    </p>
                    <div className="flex items-center gap-1 text-xs text-blue-600">
                      <Calendar className="w-3 h-3" />
                      <span>Next installment: March 2025</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 lg:gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <Building2 className="w-4 h-4 lg:w-5 lg:h-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200 text-sm lg:text-base">
                      Soil Health Card Scheme
                    </p>
                    <p className="text-xs lg:text-sm text-green-700 dark:text-green-300 mb-2">
                      Free soil testing and nutrient recommendations
                    </p>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <Calendar className="w-3 h-3" />
                      <span>Available now</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 lg:gap-3 p-3 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
              <Building2 className="w-4 h-4 lg:w-5 lg:h-5 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-orange-800 dark:text-orange-200 text-sm lg:text-base">
                      Pradhan Mantri Fasal Bima Yojana
                    </p>
                    <p className="text-xs lg:text-sm text-orange-700 dark:text-orange-300 mb-2">
                      Crop insurance with premium subsidy
                    </p>
                    <div className="flex items-center gap-1 text-xs text-orange-600">
                      <Calendar className="w-3 h-3" />
                      <span>Registration deadline: April 15, 2025</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Advice */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3 lg:pb-6">
            <CardTitle className="flex items-center gap-2 text-base lg:text-lg text-foreground">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
              Recent Advice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 lg:space-y-4">
              <div className="border-l-4 border-teal-500 pl-3 lg:pl-4">
                <h4 className="font-medium mb-2 text-sm lg:text-base text-foreground">Fertilizer for Paddy Field A</h4>
                <p className="text-xs lg:text-sm text-muted-foreground mb-2">
                  Based on the current weather and soil moisture, it's recommended to apply a nitrogen-rich
                  fertilizer...
                </p>
                <Button variant="link" className="p-0 h-auto text-teal-600 hover:text-teal-700 text-xs lg:text-sm">
                  Read more
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
