import type React from "react"
import { Sidebar } from "./sidebar"
import { MobileBottomNav } from "./mobile-bottom-nav"
// import { LanguageSwitcher } from "./language-switcher"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <div className="flex justify-end p-4 lg:hidden">
          {/* <LanguageSwitcher /> */}
        </div>
        <main className="p-4 lg:p-8 pb-20 lg:pb-8">{children}</main>
      </div>
      <MobileBottomNav />
    </div>
  )
}
