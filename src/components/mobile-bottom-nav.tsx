"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Bot, Wheat, User, Sprout } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Officer", href: "/ai-assistant", icon: Bot },
  { name: "Crop Advisor", href: "/crop-recommendation", icon: Sprout },

  { name: "Profile", href: "/profile", icon: User },
]

export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-4 py-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-1 text-xs font-medium transition-colors",
                isActive ? "text-teal-600" : "text-gray-500 hover:text-gray-700",
              )}
            >
              <item.icon className={cn("w-5 h-5 mb-1", isActive ? "text-teal-600" : "text-gray-500")} />
              <span className="truncate">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
