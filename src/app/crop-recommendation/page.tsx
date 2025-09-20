"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select,SelectTrigger,SelectContent,SelectValue,SelectItem } from "@/components/ui/select";
import {
  Wheat,
  Clock,
  Banknote,
  TrendingUp,
  Lightbulb,
  Droplets,
  Tractor,
  Zap,
  Mountain,
  Users,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Globe,
  Sprout,
  Home,
  ShoppingCart,
  Timer,
  Turtle,
  Scale,
  Wrench,
  Battery,
  Shield,
  Target,
  Coins,
  MapPin,
} from "lucide-react";
import { AppLayout } from "@/components/app-layout";
import Image from "next/image";

interface FormData {
  landSize: string;
  waterSource: string;
  cropPurpose: string;
  growthPreference: string;
  previousCrops: string;
  budget: string;
  workPreference: string;
  equipment: string[];
  electricity: string;
  riskTolerance: string;
  additionalInfo: string;
}

type Language = 'english' | 'hindi' | 'malayalam';

const translations = {
  english: {
    title: "Crop Recommendation",
    subtitle: "Smart farming suggestions for better harvest",
    description: "Tell us about your farm, and we'll provide the best crop recommendations tailored to your needs",
    selectLanguage: "Select Language",
    step: "Step",
    completed: "completed",
    next: "Next Question",
    previous: "Previous Question",
    getRecommendations: "Get Crop Recommendations",
    yourFarmland: "Your Farmland",
    waterClimate: "Water & Climate",
    farmingPurpose: "Farming Purpose",
    experienceBudget: "Experience & Budget",
    workEquipment: "Work & Equipment",
    powerRisk: "Power & Risk",
    landSizeQuestion: "How much farming land do you have?",
    waterSourceQuestion: "How do you get water for crops?",
    cropPurposeQuestion: "What is the purpose of growing crops?",
    growthPreferenceQuestion: "Do you prefer quick or slow growing crops?",
    previousCropsQuestion: "Which crops have you grown before?",
    budgetQuestion: "How much can you spend on seeds and inputs?",
    workPreferenceQuestion: "Do you prefer low-maintenance or high-maintenance crops?",
    equipmentQuestion: "Which farming equipment do you have?",
    electricityQuestion: "Do you have electricity on your farm?",
    riskToleranceQuestion: "Are you willing to take risks for higher profits?",
    additionalInfoQuestion: "Any additional information?",
    landSizeOptions: [
      { value: "1-3-acres", label: "1-3 acres", icon: <Sprout className="w-8 h-8 text-green-500" /> },
      { value: "3-5-acres", label: "3-5 acres", icon: <Mountain className="w-8 h-8 text-green-600" /> },
      { value: "5-10-acres", label: "5-10 acres", icon: <MapPin className="w-8 h-8 text-green-700" /> },
      { value: "10-plus-acres", label: "10+ acres", icon: <Globe className="w-8 h-8 text-green-800" /> }
    ],
    waterSourceOptions: [
      { value: "rainwater", label: "Rainwater only", icon: <Droplets className="w-8 h-8 text-blue-400" /> },
      { value: "irrigation", label: "Irrigation system", icon: <Zap className="w-8 h-8 text-blue-600" /> },
      { value: "mix", label: "Both sources", icon: <Globe className="w-8 h-8 text-blue-800" /> }
    ],
    cropPurposeOptions: [
      { value: "selling", label: "For selling", icon: <ShoppingCart className="w-8 h-8 text-purple-500" /> },
      { value: "family", label: "For family", icon: <Home className="w-8 h-8 text-purple-600" /> },
      { value: "both", label: "Both purposes", icon: <Users className="w-8 h-8 text-purple-700" /> }
    ],
    growthPreferenceOptions: [
      { value: "quickly", label: "Quick (3-6 months)", icon: <Timer className="w-8 h-8 text-orange-500" /> },
      { value: "slowly", label: "Slow (1+ years)", icon: <Turtle className="w-8 h-8 text-orange-600" /> },
      { value: "both-growth", label: "Both types", icon: <Scale className="w-8 h-8 text-orange-700" /> }
    ],
    budgetOptions: [
      { value: "low", label: "Low budget (₹10,000-25,000)", icon: <Coins className="w-8 h-8 text-yellow-500" /> },
      { value: "medium", label: "Medium budget (₹25,000-50,000)", icon: <Banknote className="w-8 h-8 text-yellow-600" /> },
      { value: "high", label: "High budget (₹50,000+)", icon: <TrendingUp className="w-8 h-8 text-yellow-700" /> }
    ],
    workPreferenceOptions: [
      { value: "less", label: "Less work", icon: <Clock className="w-8 h-8 text-indigo-500" /> },
      { value: "more", label: "More work", icon: <Wrench className="w-8 h-8 text-indigo-600" /> },
      { value: "no-preference", label: "No preference", icon: <Scale className="w-8 h-8 text-indigo-700" /> }
    ],
    equipmentOptions: [
      { value: "Tractor", label: "Tractor", icon: <Tractor className="w-8 h-8 text-red-500" /> },
      { value: "Plough / Tiller", label: "Plough/Tiller", icon: <Wrench className="w-8 h-8 text-red-600" /> },
      { value: "Harvester", label: "Harvester", icon: <Wheat className="w-8 h-8 text-red-700" /> },
      { value: "No machinery", label: "No machinery", icon: <AlertCircle className="w-8 h-8 text-gray-500" /> }
    ],
    electricityOptions: [
      { value: "yes", label: "Yes, reliable supply", icon: <Battery className="w-8 h-8 text-green-500" /> },
      { value: "intermittent", label: "Sometimes only", icon: <Zap className="w-8 h-8 text-yellow-500" /> },
      { value: "no", label: "No electricity", icon: <AlertCircle className="w-8 h-8 text-red-500" /> }
    ],
    riskToleranceOptions: [
      { value: "low", label: "Low risk", icon: <Shield className="w-8 h-8 text-blue-500" /> },
      { value: "medium", label: "Medium risk", icon: <Scale className="w-8 h-8 text-yellow-500" /> },
      { value: "high", label: "High risk", icon: <Target className="w-8 h-8 text-red-500" /> }
    ],
    recommendedCrops: "Recommended Crops for Your Farm",
    recommendedCropsSubtitle: "Based on your farm details and preferences",
    suitability: "Suitability",
    season: "Season",
    expectedYield: "Expected Yield",
    investment: "Investment",
    whyRecommended: "Why this crop is recommended:",
    modifyDetails: "Modify Details",
    saveRecommendations: "Save Recommendations",
    tips: "Tips",
    placeholders: {
      previousCrops: "e.g., banana, rice, wheat",
      additionalInfo: "e.g., need crops suitable for family consumption"
    }
  },
  hindi: {
    title: "फसल की सिफारिश",
    subtitle: "बेहतर फसल के लिए स्मार्ट खेती के सुझाव",
    description: "हमें अपनी खेती के बारे में बताएं, हम आपकी आवश्यकताओं के अनुसार सबसे अच्छी फसल की सिफारिश करेंगे",
    selectLanguage: "भाषा चुनें",
    step: "चरण",
    completed: "पूर्ण",
    next: "अगला प्रश्न",
    previous: "पिछला प्रश्न",
    getRecommendations: "फसल की सिफारिश प्राप्त करें",
    yourFarmland: "आपकी कृषि भूमि",
    waterClimate: "पानी और जलवायु",
    farmingPurpose: "खेती का उद्देश्य",
    experienceBudget: "अनुभव और बजट",
    workEquipment: "काम और उपकरण",
    powerRisk: "बिजली और जोखिम",
    landSizeQuestion: "आपके पास कितनी कृषि भूमि है?",
    waterSourceQuestion: "फसलों के लिए पानी कैसे मिलता है?",
    cropPurposeQuestion: "फसल उगाने का उद्देश्य क्या है?",
    growthPreferenceQuestion: "क्या आप जल्दी या धीमी बढ़ने वाली फसलें पसंद करते हैं?",
    previousCropsQuestion: "आपने पहले कौन सी फसलें उगाई हैं?",
    budgetQuestion: "बीज और अन्य सामग्री पर कितना खर्च कर सकते हैं?",
    workPreferenceQuestion: "क्या आप कम रखरखाव या अधिक रखरखाव वाली फसलें पसंद करते हैं?",
    equipmentQuestion: "आपके पास कौन से कृषि उपकरण हैं?",
    electricityQuestion: "क्या आपके खेत में बिजली है?",
    riskToleranceQuestion: "क्या आप अधिक मुनाफे के लिए जोखिम उठाने को तैयार हैं?",
    additionalInfoQuestion: "कोई अतिरिक्त जानकारी?",
    landSizeOptions: [
      { value: "1-3-acres", label: "1-3 एकड़", icon: <Sprout className="w-8 h-8 text-green-500" /> },
      { value: "3-5-acres", label: "3-5 एकड़", icon: <Mountain className="w-8 h-8 text-green-600" /> },
      { value: "5-10-acres", label: "5-10 एकड़", icon: <MapPin className="w-8 h-8 text-green-700" /> },
      { value: "10-plus-acres", label: "10+ एकड़", icon: <Globe className="w-8 h-8 text-green-800" /> }
    ],
    waterSourceOptions: [
      { value: "rainwater", label: "केवल बारिश का पानी", icon: <Droplets className="w-8 h-8 text-blue-400" /> },
      { value: "irrigation", label: "सिंचाई व्यवस्था", icon: <Zap className="w-8 h-8 text-blue-600" /> },
      { value: "mix", label: "दोनों स्रोत", icon: <Globe className="w-8 h-8 text-blue-800" /> }
    ],
    cropPurposeOptions: [
      { value: "selling", label: "बेचने के लिए", icon: <ShoppingCart className="w-8 h-8 text-purple-500" /> },
      { value: "family", label: "परिवार के लिए", icon: <Home className="w-8 h-8 text-purple-600" /> },
      { value: "both", label: "दोनों उद्देश्य", icon: <Users className="w-8 h-8 text-purple-700" /> }
    ],
    growthPreferenceOptions: [
      { value: "quickly", label: "जल्दी (3-6 महीने)", icon: <Timer className="w-8 h-8 text-orange-500" /> },
      { value: "slowly", label: "धीमी (1+ साल)", icon: <Turtle className="w-8 h-8 text-orange-600" /> },
      { value: "both-growth", label: "दोनों प्रकार", icon: <Scale className="w-8 h-8 text-orange-700" /> }
    ],
    budgetOptions: [
      { value: "low", label: "कम बजट (₹10,000-25,000)", icon: <Coins className="w-8 h-8 text-yellow-500" /> },
      { value: "medium", label: "मध्यम बजट (₹25,000-50,000)", icon: <Banknote className="w-8 h-8 text-yellow-600" /> },
      { value: "high", label: "उच्च बजट (₹50,000+)", icon: <TrendingUp className="w-8 h-8 text-yellow-700" /> }
    ],
    workPreferenceOptions: [
      { value: "less", label: "कम काम", icon: <Clock className="w-8 h-8 text-indigo-500" /> },
      { value: "more", label: "अधिक काम", icon: <Wrench className="w-8 h-8 text-indigo-600" /> },
      { value: "no-preference", label: "कोई प्राथमिकता नहीं", icon: <Scale className="w-8 h-8 text-indigo-700" /> }
    ],
    equipmentOptions: [
      { value: "Tractor", label: "ट्रैक्टर", icon: <Tractor className="w-8 h-8 text-red-500" /> },
      { value: "Plough / Tiller", label: "हल/कुदाल", icon: <Wrench className="w-8 h-8 text-red-600" /> },
      { value: "Harvester", label: "हार्वेस्टर", icon: <Wheat className="w-8 h-8 text-red-700" /> },
      { value: "No machinery", label: "कोई मशीन नहीं", icon: <AlertCircle className="w-8 h-8 text-gray-500" /> }
    ],
    electricityOptions: [
      { value: "yes", label: "हाँ, विश्वसनीय आपूर्ति", icon: <Battery className="w-8 h-8 text-green-500" /> },
      { value: "intermittent", label: "कभी-कभी", icon: <Zap className="w-8 h-8 text-yellow-500" /> },
      { value: "no", label: "बिजली नहीं", icon: <AlertCircle className="w-8 h-8 text-red-500" /> }
    ],
    riskToleranceOptions: [
      { value: "low", label: "कम जोखिम", icon: <Shield className="w-8 h-8 text-blue-500" /> },
      { value: "medium", label: "मध्यम जोखिम", icon: <Scale className="w-8 h-8 text-yellow-500" /> },
      { value: "high", label: "उच्च जोखिम", icon: <Target className="w-8 h-8 text-red-500" /> }
    ],
    recommendedCrops: "आपके खेत के लिए सुझाई गई फसलें",
    recommendedCropsSubtitle: "आपकी खेती की जानकारी के आधार पर",
    suitability: "उपयुक्तता",
    season: "मौसम",
    expectedYield: "अपेक्षित उत्पादन",
    investment: "निवेश",
    whyRecommended: "यह फसल क्यों सुझाई गई है:",
    modifyDetails: "विवरण संशोधित करें",
    saveRecommendations: "सिफारिशें सहेजें",
    tips: "सुझाव",
    placeholders: {
      previousCrops: "जैसे: केला, चावल, गेहूं",
      additionalInfo: "जैसे: पारिवारिक उपयोग के लिए उपयुक्त फसल चाहिए"
    }
  },
  malayalam: {
    title: "വിള ശുപാർശ",
    subtitle: "മികച്ച വിളവിനായി സ്മാർട്ട് കൃഷി നിർദ്ദേശങ്ങൾ",
    description: "നിങ്ങളുടെ കൃഷിയെക്കുറിച്ച് പറയൂ, ഞങ്ങൾ മികച്ച വിള ശുപാർശകൾ നൽകാം",
    selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    step: "ഘട്ടം",
    completed: "പൂർത്തിയായി",
    next: "അടുത്ത ചോദ്യം",
    previous: "മുമ്പത്തെ ചോദ്യം",
    getRecommendations: "വിള ശുപാർശകൾ കാണിക്കുക",
    yourFarmland: "നിങ്ങളുടെ കൃഷിഭൂമി",
    waterClimate: "വെള്ളം & കാലാവസ്ഥ",
    farmingPurpose: "കൃഷിയുടെ ലക്ഷ്യം",
    experienceBudget: "അനുഭവം & ബജറ്റ്",
    workEquipment: "വേല & യന്ത്രങ്ങൾ",
    powerRisk: "വൈദ്യുതി & റിസ്ക്",
    landSizeQuestion: "നിങ്ങൾക്ക് എത്ര ഏക്കർ കൃഷിഭൂമി ഉണ്ട്?",
    waterSourceQuestion: "വിളകൾക്ക് വെള്ളം എങ്ങനെ ലഭിക്കുന്നു?",
    cropPurposeQuestion: "എന്തിനാണ് വിള കൃഷി ചെയ്യുന്നത്?",
    growthPreferenceQuestion: "വേഗത്തിൽ വളരുന്ന വിളയോ പതുക്കെ വളരുന്ന വിളയോ?",
    previousCropsQuestion: "മുമ്പ് ഏത് വിളകൾ കൃഷി ചെയ്തിട്ടുണ്ട്?",
    budgetQuestion: "വിത്തുകൾക്കും മറ്റ് ആവശ്യങ്ങൾക്കും എത്ര പണം ചിലവാക്കാം?",
    workPreferenceQuestion: "കുറച്ച് വേലയുള്ള വിളയോ കൂടുതൽ വേലയുള്ള വിളയോ?",
    equipmentQuestion: "ഏത് കൃഷി യന്ത്രങ്ങൾ ഉണ്ട്?",
    electricityQuestion: "കൃഷിയിടത്തിൽ വൈദ്യുതി ഉണ്ടോ?",
    riskToleranceQuestion: "കൂടുതൽ ലാഭത്തിനായി റിസ്ക് എടുക്കാൻ തയ്യാറാണോ?",
    additionalInfoQuestion: "മറ്റെന്തെങ്കിലും പറയാനുണ്ടോ?",
    landSizeOptions: [
      { value: "1-3-acres", label: "1-3 ഏക്കർ", icon: <Sprout className="w-8 h-8 text-green-500" /> },
      { value: "3-5-acres", label: "3-5 ഏക്കർ", icon: <Mountain className="w-8 h-8 text-green-600" /> },
      { value: "5-10-acres", label: "5-10 ഏക്കർ", icon: <MapPin className="w-8 h-8 text-green-700" /> },
      { value: "10-plus-acres", label: "10+ ഏക്കർ", icon: <Globe className="w-8 h-8 text-green-800" /> }
    ],
    waterSourceOptions: [
      { value: "rainwater", label: "മഴവെള്ളം മാത്രം", icon: <Droplets className="w-8 h-8 text-blue-400" /> },
      { value: "irrigation", label: "ജലസേചന സംവിധാനം", icon: <Zap className="w-8 h-8 text-blue-600" /> },
      { value: "mix", label: "രണ്ടും", icon: <Globe className="w-8 h-8 text-blue-800" /> }
    ],
    cropPurposeOptions: [
      { value: "selling", label: "വിൽക്കാൻ", icon: <ShoppingCart className="w-8 h-8 text-purple-500" /> },
      { value: "family", label: "കുടുംബത്തിന്", icon: <Home className="w-8 h-8 text-purple-600" /> },
      { value: "both", label: "രണ്ടിനും", icon: <Users className="w-8 h-8 text-purple-700" /> }
    ],
    growthPreferenceOptions: [
      { value: "quickly", label: "വേഗത്തിൽ (3-6 മാസം)", icon: <Timer className="w-8 h-8 text-orange-500" /> },
      { value: "slowly", label: "പതുക്കെ (1+ വർഷം)", icon: <Turtle className="w-8 h-8 text-orange-600" /> },
      { value: "both-growth", label: "രണ്ടും", icon: <Scale className="w-8 h-8 text-orange-700" /> }
    ],
    budgetOptions: [
      { value: "low", label: "കുറച്ച് (₹10,000-25,000)", icon: <Coins className="w-8 h-8 text-yellow-500" /> },
      { value: "medium", label: "ഇടത്തരം (₹25,000-50,000)", icon: <Banknote className="w-8 h-8 text-yellow-600" /> },
      { value: "high", label: "കൂടുതൽ (₹50,000+)", icon: <TrendingUp className="w-8 h-8 text-yellow-700" /> }
    ],
    workPreferenceOptions: [
      { value: "less", label: "കുറച്ച് വേല", icon: <Clock className="w-8 h-8 text-indigo-500" /> },
      { value: "more", label: "കൂടുതൽ വേല", icon: <Wrench className="w-8 h-8 text-indigo-600" /> },
      { value: "no-preference", label: "പ്രശ്നമില്ല", icon: <Scale className="w-8 h-8 text-indigo-700" /> }
    ],
    equipmentOptions: [
      { value: "Tractor", label: "ട്രാക്ടർ", icon: <Tractor className="w-8 h-8 text-red-500" /> },
      { value: "Plough / Tiller", label: "കലപ്പ / കുഴിയന്ത്രം", icon: <Wrench className="w-8 h-8 text-red-600" /> },
      { value: "Harvester", label: "വിളവെടുപ്പ് യന്ത്രം", icon: <Wheat className="w-8 h-8 text-red-700" /> },
      { value: "No machinery", label: "യന്ത്രങ്ങൾ ഇല്ല", icon: <AlertCircle className="w-8 h-8 text-gray-500" /> }
    ],
    electricityOptions: [
      { value: "yes", label: "ഉണ്ട്, നല്ല സപ്ലൈ", icon: <Battery className="w-8 h-8 text-green-500" /> },
      { value: "intermittent", label: "ചിലപ്പോൾ മാത്രം", icon: <Zap className="w-8 h-8 text-yellow-500" /> },
      { value: "no", label: "ഇല്ല", icon: <AlertCircle className="w-8 h-8 text-red-500" /> }
    ],
    riskToleranceOptions: [
      { value: "low", label: "കുറച്ച് റിസ്ക്", icon: <Shield className="w-8 h-8 text-blue-500" /> },
      { value: "medium", label: "ഇടത്തരം റിസ്ക്", icon: <Scale className="w-8 h-8 text-yellow-500" /> },
      { value: "high", label: "കൂടുതൽ റിസ്ക്", icon: <Target className="w-8 h-8 text-red-500" /> }
    ],
    recommendedCrops: "നിങ്ങളുടെ കൃഷിക്ക് ശുപാർശ ചെയ്യുന്ന വിളകൾ",
    recommendedCropsSubtitle: "നിങ്ങളുടെ കൃഷിയുടെ വിവരങ്ങൾ അടിസ്ഥാനമാക്കി",
    suitability: "അനുയോജ്യത",
    season: "സീസൺ",
    expectedYield: "പ്രതീക്ഷിക്കുന്ന വിളവ്",
    investment: "നിക്ഷേപം",
    whyRecommended: "ഈ വിള ശുപാര്‍ശ ചെയ്യുന്നത് എന്തുകൊണ്ട്:",
    modifyDetails: "വിവരങ്ങൾ മാറ്റുക",
    saveRecommendations: "ശുപാർശകൾ സേവ് ചെയ്യുക",
    tips: "സൂചനകൾ",
    placeholders: {
      previousCrops: "ഉദാഹരണം: വാഴ, നെല്ല്, ഗോതമ്പ്",
      additionalInfo: "ഉദാഹരണം: കുടുംബത്തിന് നേരിട്ട് കഴിക്കാൻ പറ്റുന്ന വിള വേണം"
    }
  }
};

export default function CropRecommendationPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('english');
  const [formData, setFormData] = useState<FormData>({
    landSize: "",
    waterSource: "",
    cropPurpose: "",
    growthPreference: "",
    previousCrops: "",
    budget: "",
    workPreference: "",
    equipment: [],
    electricity: "",
    riskTolerance: "",
    additionalInfo: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showLanguageSelection, setShowLanguageSelection] = useState(true);

  const t = translations[selectedLanguage];

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setShowLanguageSelection(false);
  };

  const handleEquipmentChange = (equipment: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      equipment: checked ? [...prev.equipment, equipment] : prev.equipment.filter((item) => item !== equipment),
    }));
  };

  const handleSubmit = () => {
    setShowRecommendations(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
const cropOptions = [
  {
    value: "coconut",
    label: "Coconut",
    category: "Tree Crop",
    image: "https://images.unsplash.com/photo-1565598484066-49b0b7c7e0da?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "rubber",
    label: "Rubber",
    category: "Tree Crop",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "tea",
    label: "Tea",
    category: "Plantation Crop",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "coffee",
    label: "Coffee",
    category: "Plantation Crop",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "cardamom",
    label: "Cardamom",
    category: "Spice",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "black_pepper",
    label: "Black Pepper",
    category: "Spice",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "paddy_rice",
    label: "Paddy (Rice)",
    category: "Cereal",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "banana",
    label: "Banana",
    category: "Fruit",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "cashew",
    label: "Cashew",
    category: "Nut",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "arecanut",
    label: "Arecanut",
    category: "Nut",
    image: "https://images.unsplash.com/photo-1582899718505-cec84a45ee5a?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "jackfruit",
    label: "Jackfruit",
    category: "Fruit",
    image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=200&h=200&fit=crop&crop=center"
  },
  {
    value: "vanilla",
    label: "Vanilla",
    category: "Spice",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=200&fit=crop&crop=center"
  }
];
  const steps = [
    {
      title: t.yourFarmland,
      icon: <Mountain className="w-8 h-8 text-emerald-600" />,
      questions: [
        {
          question: t.landSizeQuestion,
          field: "landSize",
          type: "radio",
          options: t.landSizeOptions,
        },
      ],
    },
    {
      title: t.waterClimate,
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      questions: [
        {
          question: t.waterSourceQuestion,
          field: "waterSource",
          type: "radio",
          options: t.waterSourceOptions,
        },
      ],
    },
    {
      title: t.farmingPurpose,
      icon: <Users className="w-8 h-8 text-purple-600" />,
      questions: [
        {
          question: t.cropPurposeQuestion,
          field: "cropPurpose",
          type: "radio",
          options: t.cropPurposeOptions,
        },
        {
          question: t.growthPreferenceQuestion,
          field: "growthPreference",
          type: "radio",
          options: t.growthPreferenceOptions,
        },
      ],
    },
    {
      title: t.experienceBudget,
      icon: <Banknote className="w-8 h-8 text-yellow-600" />,
      questions: [
        {
          question: t.previousCropsQuestion,
          field: "previousCrops",
          type: "input",
          placeholder: t.placeholders.previousCrops,
        },
        {
          question: t.budgetQuestion,
          field: "budget",
          type: "radio",
          options: t.budgetOptions,
        },
      ],
    },
    {
      title: t.workEquipment,
      icon: <Tractor className="w-8 h-8 text-orange-600" />,
      questions: [
        {
          question: t.workPreferenceQuestion,
          field: "workPreference",
          type: "radio",
          options: t.workPreferenceOptions,
        },
        {
          question: t.equipmentQuestion,
          field: "equipment",
          type: "checkbox",
          options: t.equipmentOptions,
        },
      ],
    },
    {
      title: t.powerRisk,
      icon: <Zap className="w-8 h-8 text-red-600" />,
      questions: [
        {
          question: t.electricityQuestion,
          field: "electricity",
          type: "radio",
          options: t.electricityOptions,
        },
        {
          question: t.riskToleranceQuestion,
          field: "riskTolerance",
          type: "radio",
          options: t.riskToleranceOptions,
        },
        {
          question: t.additionalInfoQuestion,
          field: "additionalInfo",
          type: "textarea",
          placeholder: t.placeholders.additionalInfo,
        },
      ],
    },
  ];

  const recommendations = [
    {
      crop: selectedLanguage === 'english' ? 'Rice (Paddy)' : selectedLanguage === 'hindi' ? 'चावल (धान)' : 'നെല്ല് (പാടി)',
      suitability: "95%",
      season: selectedLanguage === 'english' ? 'Kharif Season' : selectedLanguage === 'hindi' ? 'खरीफ सीजन' : 'ഖരീഫ് സീസൺ',
      expectedYield: selectedLanguage === 'english' ? '4-5 tons/acre' : selectedLanguage === 'hindi' ? '4-5 टन/एकड़' : '4-5 ടൺ/ഏക്കർ',
      investment: "₹25,000-30,000",
      icon: <Wheat className="w-12 h-12 text-green-600" />,
      color: "bg-gradient-to-br from-green-50 to-emerald-100 border-green-300",
      reasons: selectedLanguage === 'english' ? 
        ["Suitable for your land size", "Good water availability", "Previous experience", "Family consumption"] :
        selectedLanguage === 'hindi' ?
        ["आपकी भूमि के आकार के लिए उपयुक्त", "अच्छी पानी की उपलब्धता", "पिछला अनुभव", "पारिवारिक उपयोग"] :
        ["നിങ്ങളുടെ ഭൂമിയുടെ വലുപ്പത്തിന് അനുയോജ്യം", "നല്ല വെള്ളം ലഭ്യത", "മുൻ അനുഭവം ഉണ്ട്", "കുടുംബത്തിന്റെ ഭക്ഷണത്തിന്"]
    },
    {
      crop: selectedLanguage === 'english' ? 'Coconut' : selectedLanguage === 'hindi' ? 'नारियल' : 'തേങ്ങ',
      suitability: "88%",
      season: selectedLanguage === 'english' ? 'Year-round' : selectedLanguage === 'hindi' ? 'साल भर' : 'വർഷം മുഴുവൻ',
      expectedYield: selectedLanguage === 'english' ? '60-80 nuts/tree/year' : selectedLanguage === 'hindi' ? '60-80 नारियल/पेड़/साल' : '60-80 തേങ്ങ/വൃക്ഷം/വർഷം',
      investment: "₹15,000-20,000",
      icon: <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl">🥥</div>,
      color: "bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-300",
      reasons: selectedLanguage === 'english' ? 
        ["Long-term investment", "Suitable for mixed farming", "Good market demand"] :
        selectedLanguage === 'hindi' ?
        ["दीर्घकालिक निवेश", "मिश्रित खेती के लिए उपयुक्त", "अच्छी बाजार मांग"] :
        ["ദീർഘകാല നിക്ഷേപം", "മിശ്ര കൃഷിക്ക് അനുയോജ്യം", "നല്ല മാർക്കറ്റ് ഡിമാന്റ്"]
    },
    {
      crop: selectedLanguage === 'english' ? 'Banana' : selectedLanguage === 'hindi' ? 'केला' : 'വാഴ',
      suitability: "82%",
      season: selectedLanguage === 'english' ? 'Year-round' : selectedLanguage === 'hindi' ? 'साल भर' : 'വർഷം മുഴുവൻ',
      expectedYield: selectedLanguage === 'english' ? '25-30 tons/acre' : selectedLanguage === 'hindi' ? '25-30 टन/एकड़' : '25-30 ടൺ/ഏക്കർ',
      investment: "₹40,000-50,000",
      icon: <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">🍌</div>,
      color: "bg-gradient-to-br from-yellow-50 to-amber-100 border-yellow-300",
      reasons: selectedLanguage === 'english' ? 
        ["Previous experience", "Quick returns", "Good for family use"] :
        selectedLanguage === 'hindi' ?
        ["पिछला अनुभव", "त्वरित रिटर्न", "पारिवारिक उपयोग के लिए अच्छा"] :
        ["മുൻ അനുഭവം ഉണ്ട്", "വേഗത്തിൽ വരുമാനം", "കുടുംബത്തിന്റെ ഉപയോഗത്തിന്"]
    },
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  
  if (showLanguageSelection) {
    return (
      <AppLayout>

      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-center">
            <Globe className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Select Language</h1>
            <p className="text-emerald-100">भाषा चुनें | ഭാഷ തിരഞ്ഞെടുക്കുക</p>
          </div>
          <CardContent className="p-8">
            <div className="space-y-4">
              {[
                { key: 'english', label: 'English', flag: '🇺🇸', desc: 'Continue in English' },
                { key: 'hindi', label: 'हिन्दी', flag: '🇮🇳', desc: 'हिन्दी में जारी रखें' },
                { key: 'malayalam', label: 'മലയാളം', flag: '🇮🇳', desc: 'മലയാളത്തിൽ തുടരുക' }
              ].map((lang) => (
                <button
                  key={lang.key}
                  onClick={() => handleLanguageSelect(lang.key as Language)}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 flex items-center gap-4 group"
                >
                  <span className="text-3xl">{lang.flag}</span>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-gray-800 group-hover:text-emerald-700">
                      {lang.label}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-emerald-600">
                      {lang.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg">
              <Wheat className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 font-medium">{t.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.description}
          </p>
          
          {/* Language switcher */}
          <Button
            onClick={() => setShowLanguageSelection(true)}
            variant="outline"
            className="mt-4 border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <Globe className="w-4 h-4 mr-2" />
            {t.selectLanguage}
          </Button>
        </div>

        {!showRecommendations ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-700 mb-3 font-medium">
                <span>{t.step} {currentStep + 1} / {steps.length}</span>
                <span>{Math.round(progress)}% {t.completed}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500 shadow-sm" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>

            {/* Step Card */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    {currentStepData.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                  {currentStepData.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 space-y-8">
                {currentStepData.questions.map((question, qIndex) => (
                  <div key={qIndex} className="space-y-6">
                    <div className="text-center">
                      <Label className="text-xl font-bold text-gray-800 block mb-4 leading-relaxed">
                        {question.question}
                      </Label>
                    </div>

                    {/* Radio */}
                    {question.type === "radio" && (
                      <RadioGroup
                        value={formData[question.field as keyof FormData] as string}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, [question.field]: value }))}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      >
                        {question.options?.map((option) => (
                          <label
                            key={option.value}
                            className="relative flex items-center p-4 rounded-2xl border-2 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                          >
                            <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                            <div className="flex flex-col items-center text-center w-full space-y-3">
                              <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-white group-hover:shadow-md transition-all duration-200">
                                {option.icon}
                              </div>
                              <div className="text-base font-semibold text-gray-800 group-hover:text-emerald-700">
                                {option.label}
                              </div>
                            </div>
                            <div className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-emerald-500 transition-colors duration-200">
                              {formData[question.field as keyof FormData] === option.value && (
                                <div className="w-full h-full rounded-full bg-emerald-500 scale-50"></div>
                              )}
                            </div>
                          </label>
                        ))}
                      </RadioGroup>
                    )}

                    {/* Checkbox */}
                    {question.type === "checkbox" && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {question.options?.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center p-4 rounded-2xl border-2 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                          >
                            <Checkbox
                              id={option.value}
                              checked={formData.equipment.includes(option.value)}
                              onCheckedChange={(checked) => handleEquipmentChange(option.value, checked as boolean)}
                              className="mr-4"
                            />
                            <div className="flex items-center gap-4 flex-1">
                              <div className="p-2 rounded-xl bg-gray-50 group-hover:bg-white transition-all duration-200">
                                {option.icon}
                              </div>
                              <div className="text-base font-medium text-gray-800 group-hover:text-emerald-700">
                                {option.label}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}

                    {/* Input */}
                    {/* Dropdown */}
{question.type === "input" && (
  <Select
    value={formData[question.field as keyof FormData] as string}
    onValueChange={(value) => setFormData((prev) => ({ ...prev, [question.field]: value }))}
  >
    <SelectTrigger className="text-lg p-4 border-2 rounded-xl border-gray-300 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-200">
      <SelectValue placeholder={question.placeholder} />
    </SelectTrigger>
    <SelectContent>
      {cropOptions.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          <div className="flex items-center gap-2">
            <Image
              src={option.image} 
              alt={option.label} 
              className="w-6 h-6 rounded-full object-cover"
            />
            <div>
              <div>{option.label}</div>
              <div className="text-sm text-gray-500">{option.category}</div>
            </div>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)}

                    {/* Textarea */}
                    {question.type === "textarea" && (
                      <Textarea
                        placeholder={question.placeholder}
                        value={formData[question.field as keyof FormData] as string}
                        onChange={(e) => setFormData((prev) => ({ ...prev, [question.field]: e.target.value }))}
                        className="text-lg p-4 border-2 rounded-xl border-gray-300 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 min-h-[120px] transition-all duration-200"
                      />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={prevStep} 
                disabled={currentStep === 0} 
                variant="outline" 
                className="flex-1 p-4 h-14 border-2 border-gray-300 hover:border-emerald-400 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t.previous}
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button 
                  onClick={handleSubmit} 
                  className="flex-1 p-4 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Lightbulb className="w-5 h-5 mr-2" />
                  {t.getRecommendations}
                </Button>
              ) : (
                <Button 
                  onClick={nextStep} 
                  className="flex-1 p-4 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {t.next}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </>
        ) : (
          <div className="space-y-8">
            {/* Results Header */}
            <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 shadow-2xl overflow-hidden">
              <CardHeader className="text-center p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-white/20 rounded-3xl backdrop-blur-sm">
                    <Lightbulb className="w-12 h-12" />
                  </div>
                </div>
                <CardTitle className="text-3xl sm:text-4xl font-bold mb-3">
                  {t.recommendedCrops}
                </CardTitle>
                <p className="text-xl opacity-90 font-medium">{t.recommendedCropsSubtitle}</p>
              </CardHeader>
            </Card>

            {/* Recommendations */}
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <Card key={index} className={`${rec.color} border-2 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                      <div className="flex items-start gap-6 flex-1">
                        <div className="p-4 bg-white/80 rounded-2xl shadow-md">
                          {rec.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                            {rec.crop}
                          </h3>

                          <div className="flex flex-wrap gap-3 mb-6">
                            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                              <Clock className="w-5 h-5 text-gray-600" />
                              <div className="text-sm font-medium text-gray-800">
                                {rec.season}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                              <TrendingUp className="w-5 h-5 text-gray-600" />
                              <div className="text-sm font-medium text-gray-800">
                                {rec.expectedYield}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                              <Banknote className="w-5 h-5 text-gray-600" />
                              <div className="text-sm font-medium text-gray-800">
                                {rec.investment}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center bg-white/90 p-6 rounded-2xl shadow-lg min-w-[140px]">
                        <div className="text-4xl font-bold text-emerald-600 mb-2">
                          {rec.suitability}
                        </div>
                        <div className="text-base font-bold text-gray-700">
                          {t.suitability}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/95 p-6 rounded-2xl mt-6 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-3 text-lg">
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                        {t.whyRecommended}
                      </h4>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {rec.reasons.map((reason, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-800 font-medium leading-relaxed">{reason}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={() => {
                  setShowRecommendations(false);
                  setCurrentStep(0);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                variant="outline"
                className="flex-1 p-4 h-14 border-2 border-gray-300 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t.modifyDetails}
              </Button>

              <Button className="flex-1 p-4 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200">
                <CheckCircle className="w-5 h-5 mr-2" />
                {t.saveRecommendations}
              </Button>
            </div>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-800 flex items-center gap-3 text-xl">
                  <AlertCircle className="w-6 h-6" />
                  {t.tips}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-amber-800">
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl">🌾</div>
                    <div>
                      <p className="font-semibold mb-1">
                        {selectedLanguage === 'english' ? 'Rice farming:' : selectedLanguage === 'hindi' ? 'चावल की खेती:' : 'നെല്ല് കൃഷി:'}
                      </p>
                      <p className="text-sm">
                        {selectedLanguage === 'english' ? 'Start planting in June-July for best results' : 
                         selectedLanguage === 'hindi' ? 'सर्वोत्तम परिणामों के लिए जून-जुलाई में रोपाई शुरू करें' : 
                         'മികച്ച ഫലത്തിനായി ജൂൺ-ജൂലൈയിൽ നടാൻ തുടങ്ങുക'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl">🥥</div>
                    <div>
                      <p className="font-semibold mb-1">
                        {selectedLanguage === 'english' ? 'Coconut:' : selectedLanguage === 'hindi' ? 'नारियल:' : 'തേങ്ങ്:'}
                      </p>
                      <p className="text-sm">
                        {selectedLanguage === 'english' ? 'Plant once, harvest for 60+ years' : 
                         selectedLanguage === 'hindi' ? 'एक बार लगाएं, 60+ साल तक फसल लें' : 
                         'ഒരു തവണ നട്ടാൽ 60+ വർഷം വിളവ്'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl">🍌</div>
                    <div>
                      <p className="font-semibold mb-1">
                        {selectedLanguage === 'english' ? 'Banana:' : selectedLanguage === 'hindi' ? 'केला:' : 'വാഴ:'}
                      </p>
                      <p className="text-sm">
                        {selectedLanguage === 'english' ? 'Harvest in 9-12 months with good returns' : 
                         selectedLanguage === 'hindi' ? '9-12 महीने में अच्छे रिटर्न के साथ फसल' : 
                         '9-12 മാസത്തിൽ നല്ല വരുമാനത്തോടെ വിളവ്'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
    </AppLayout>
  );
}