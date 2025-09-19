import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wheat, MapPin, Calendar, Droplets } from "lucide-react"

export default function MyFieldsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">My Fields</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <Card>
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                <Wheat className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                Paddy Field A
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 lg:space-y-3">
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>North Section, 2.5 acres</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Planted: March 15, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <Droplets className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Last watered: 2 days ago</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                Healthy
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                <Wheat className="w-4 h-4 lg:w-5 lg:h-5 text-amber-600" />
                Coconut Plantation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 lg:space-y-3">
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>South Section, 1.8 acres</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Planted: January 2020</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <Droplets className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Last fertilized: 1 week ago</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                Productive
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                <Wheat className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
                Spice Garden
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 lg:space-y-3">
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>East Section, 0.5 acres</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Planted: February 10, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                <Droplets className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Last watered: Yesterday</span>
              </div>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                Growing
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
