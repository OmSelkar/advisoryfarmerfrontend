"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IndianRupee, Wheat, Shield, Droplets, Zap, ExternalLink, Calendar, MapPin, Phone } from "lucide-react"

const schemes = [
  {
    id: 1,
    title: "PM-KISAN Samman Nidhi",
    description: "Direct income support of ₹6,000 per year to small and marginal farmers",
    amount: "₹6,000/year",
    eligibility: "Small & marginal farmers with cultivable land",
    status: "Active",
    category: "Income Support",
    icon: IndianRupee,
    color: "text-green-600",
    bgColor: "bg-green-100",
    deadline: "Ongoing",
    contact: "1800-115-526",
  },
  {
    id: 2,
    title: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop insurance scheme providing financial support against crop loss",
    amount: "Up to ₹2 lakh",
    eligibility: "All farmers (landowner/tenant/sharecropper)",
    status: "Active",
    category: "Insurance",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    deadline: "Before sowing season",
    contact: "1800-266-0123",
  },
  {
    id: 3,
    title: "Kisan Credit Card (KCC)",
    description: "Credit facility for farmers to meet agricultural expenses",
    amount: "Up to ₹3 lakh",
    eligibility: "All farmers with valid land documents",
    status: "Active",
    category: "Credit",
    icon: Wheat,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    deadline: "Ongoing",
    contact: "1800-180-1551",
  },
  {
    id: 4,
    title: "PM Kusum Yojana",
    description: "Solar pumps and grid-connected solar power plants for farmers",
    amount: "90% subsidy",
    eligibility: "Individual farmers, FPOs, cooperatives",
    status: "Active",
    category: "Energy",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    deadline: "March 2025",
    contact: "1800-180-3333",
  },
  {
    id: 5,
    title: "Pradhan Mantri Krishi Sinchai Yojana",
    description: "Micro irrigation and water conservation for sustainable farming",
    amount: "Up to 55% subsidy",
    eligibility: "All categories of farmers",
    status: "Active",
    category: "Irrigation",
    icon: Droplets,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    deadline: "Ongoing",
    contact: "1800-180-1551",
  },
  {
    id: 6,
    title: "Kerala Karshaka Samridhi Yojana",
    description: "State scheme for comprehensive farmer welfare and development",
    amount: "₹25,000/year",
    eligibility: "Kerala farmers with valid documents",
    status: "New",
    category: "State Scheme",
    icon: MapPin,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    deadline: "December 2024",
    contact: "0471-2301010",
  },
]

const categoryColors = {
  "Income Support": "bg-green-100 text-green-800",
  Insurance: "bg-blue-100 text-blue-800",
  Credit: "bg-orange-100 text-orange-800",
  Energy: "bg-yellow-100 text-yellow-800",
  Irrigation: "bg-cyan-100 text-cyan-800",
  "State Scheme": "bg-purple-100 text-purple-800",
}

export default function GovernmentSchemesPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Government Schemes</h1>
          <p className="text-muted-foreground">
            Explore various government schemes and subsidies available for farmers in Kerala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-lg ${scheme.bgColor} mb-3`}>
                    <scheme.icon className={`w-6 h-6 ${scheme.color}`} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge
                      variant={scheme.status === "New" ? "default" : "secondary"}
                      className={scheme.status === "New" ? "bg-green-600" : ""}
                    >
                      {scheme.status}
                    </Badge>
                    <Badge variant="outline" className={categoryColors[scheme.category as keyof typeof categoryColors]}>
                      {scheme.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{scheme.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{scheme.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Amount:</span>
                    <span className="text-sm font-semibold text-green-600">{scheme.amount}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm font-medium text-foreground">Eligibility:</span>
                    <p className="text-xs text-muted-foreground">{scheme.eligibility}</p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{scheme.deadline}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{scheme.contact}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-teal-50 border-teal-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Contact your local agriculture officer or visit the nearest Krishi Vigyan Kendra for assistance with
                  scheme applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Toll-free: 1800-180-1551
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Kerala Agriculture: 0471-2301010
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
