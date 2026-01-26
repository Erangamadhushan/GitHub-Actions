"use client";

import React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  LogOut,
  Home,
  Calendar,
  Users,
  ImageIcon,
  Settings,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const userRole =
    typeof window !== "undefined"
      ? localStorage.getItem("user_role") || "customer"
      : "customer";

  const handleLogout = () => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_role");
    router.push("/login");
  };

  const getNavItems = () => {
    const baseItems = [{ icon: Home, label: "Overview", href: "/dashboard" }];

    if (userRole === "customer") {
      return [
        ...baseItems,
        { icon: Calendar, label: "My Bookings", href: "/dashboard/bookings" },
        { icon: ImageIcon, label: "My Photos", href: "/dashboard/photos" },
        { icon: Settings, label: "Settings", href: "/dashboard/settings" },
      ];
    }

    if (userRole === "admin") {
      return [
        ...baseItems,
        {
          icon: Calendar,
          label: "Appointments",
          href: "/dashboard/appointments",
        },
        { icon: Users, label: "Customers", href: "/dashboard/customers" },
        { icon: ImageIcon, label: "Photo Gallery", href: "/dashboard/gallery" },
        { icon: Settings, label: "Settings", href: "/dashboard/settings" },
      ];
    }

    if (userRole === "organizer") {
      return [
        ...baseItems,
        {
          icon: ImageIcon,
          label: "My Photos",
          href: "/dashboard/organizer-photos",
        },
        { icon: Settings, label: "Settings", href: "/dashboard/settings" },
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 h-screen bg-card border-r border-border flex flex-col transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">LensClick</span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-1 hover:bg-secondary rounded-lg"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 py-6 border-t border-border">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center px-3 py-2 rounded-lg bg-secondary/50">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {userRole}
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
