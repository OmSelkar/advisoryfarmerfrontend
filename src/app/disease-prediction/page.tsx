"use client"

import type React from "react"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle, Camera, Send, CheckCircle, X, MicIcon } from "lucide-react"

export default function DiseasePredictionPage() {
  const [description, setDescription] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setUploadedImages((prev) => [...prev, ...files])
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleVoiceRecording = () => {
    setIsRecording(!isRecording)
    // Voice recording logic would go here
  }

  const handleAnalysis = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setResults({
        disease: "Leaf Blight",
        confidence: 87,
        severity: "Moderate",
        treatment: "Apply copper-based fungicide and improve drainage",
        prevention: "Ensure proper spacing between plants and avoid overhead watering",
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 lg:p-6 text-white">
          <h1 className="text-xl lg:text-2xl font-bold mb-2">Disease Prediction & Analysis</h1>
          <p className="text-blue-100 text-sm lg:text-base">
            Describe your crop problem or upload photos for AI-powered disease detection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Text Description */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Describe the Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description" className="text-foreground">
                    What issues are you observing?
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the symptoms you're seeing on your crops (e.g., yellow spots on leaves, wilting, unusual growth patterns...)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-2 min-h-[100px] bg-background border-border text-foreground"
                  />
                </div>

                {/* Voice Input */}
                <div className="flex items-center gap-2">
                  <Button
                    variant={isRecording ? "destructive" : "outline"}
                    size="sm"
                    onClick={handleVoiceRecording}
                    className="flex items-center gap-2"
                  >
                    <MicIcon className="w-4 h-4" />
                    {isRecording ? "Stop Recording" : "Voice Input"}
                  </Button>
                  {isRecording && (
                    <div className="flex items-center gap-2 text-red-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                      <span className="text-sm">Recording...</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Image Upload */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Upload Photos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="images" className="text-foreground">
                    Upload multiple photos of affected crops
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                </div>

                {/* Uploaded Images Preview */}
                {uploadedImages.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-foreground">Uploaded Images ({uploadedImages.length})</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {uploadedImages.map((file, index) => (
                        <div key={index} className="relative">
                          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border">
                            <Camera className="w-8 h-8 text-muted-foreground" />
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute -top-2 -right-2 h-6 w-6"
                            onClick={() => removeImage(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                          <p className="text-xs text-muted-foreground mt-1 truncate">{file.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Analyze Button */}
                <Button
                  onClick={handleAnalysis}
                  disabled={!description && uploadedImages.length === 0}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Analyze Problem
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {results ? (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Analysis Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-foreground font-medium">Detected Disease</Label>
                      <p className="text-lg font-semibold text-red-600">{results.disease}</p>
                    </div>

                    <div>
                      <Label className="text-foreground font-medium">Confidence Level</Label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${results.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-foreground">{results.confidence}%</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-foreground font-medium">Severity</Label>
                      <p className="text-orange-600 font-medium">{results.severity}</p>
                    </div>

                    <div>
                      <Label className="text-foreground font-medium">Recommended Treatment</Label>
                      <p className="text-muted-foreground">{results.treatment}</p>
                    </div>

                    <div>
                      <Label className="text-foreground font-medium">Prevention Tips</Label>
                      <p className="text-muted-foreground">{results.prevention}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    Get Detailed Report
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card border-border">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <AlertTriangle className="w-12 h-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">No Analysis Yet</h3>
                  <p className="text-muted-foreground">
                    Describe your crop problem or upload photos to get AI-powered disease detection results.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Recent Predictions */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Predictions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800 dark:text-yellow-200 text-sm">Blight on Paddy Field A</p>
                    <p className="text-xs text-yellow-700 dark:text-yellow-300">2 hours ago • 92% confidence</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200 text-sm">Healthy Coconut Plantation</p>
                    <p className="text-xs text-green-700 dark:text-green-300">4 hours ago • 95% confidence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
