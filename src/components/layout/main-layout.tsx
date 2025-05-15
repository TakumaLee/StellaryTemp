"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BookMarked,
  FileImage,
  FilePlus2,
  UploadCloud,
  Library,
  Settings,
  UserCircle,
  LogIn,
  Home,
  BookOpen,
} from "lucide-react"

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home", icon: Home, exactMatch: true },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/library", label: "Library", icon: Library },
  { href: "/my-works/novels", label: "My Novels", icon: BookMarked },
  { href: "/my-works/comics", label: "My Comics", icon: FileImage },
  { type: "separator" as const },
  { href: "/editor/new", label: "Create Novel", icon: FilePlus2 },
  { href: "/comics/upload", label: "Upload Comic", icon: UploadCloud },
]

const bottomNavItems = [
 { href: "/settings", label: "Settings", icon: Settings },
]

// Placeholder for authentication state
const isAuthenticated = false; 

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarProvider defaultOpen variant="inset" collapsible="icon">
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-xl font-semibold group-data-[collapsible=icon]:hidden">Stellary</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item, index) =>
              item.type === "separator" ? (
                <Separator key={`sep-${index}`} className="my-2" />
              ) : (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.exactMatch ? pathname === item.href : pathname.startsWith(item.href)}
                    tooltip={{ children: item.label }}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <SidebarMenu>
             {bottomNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.href)}
                    tooltip={{ children: item.label }}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
          <Separator className="my-2" />
          <div className="flex items-center justify-between">
             {isAuthenticated ? (
                <Link href="/profile" passHref>
                  <Button variant="ghost" className="w-full justify-start">
                    <Avatar className="mr-2 h-7 w-7">
                      <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="profile avatar" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span className="group-data-[collapsible=icon]:hidden">Profile</span>
                  </Button>
                </Link>
             ) : (
                <Link href="/signin" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center">
                    <LogIn className="mr-2 group-data-[collapsible=icon]:mr-0" />
                    <span className="group-data-[collapsible=icon]:hidden">Sign In</span>
                  </Button>
                </Link>
             )}
            <ThemeToggle />
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6 md:hidden">
            <SidebarTrigger/>
            <div className="flex items-center gap-2">
                <Logo />
                <h1 className="text-lg font-semibold">Stellary</h1>
            </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
