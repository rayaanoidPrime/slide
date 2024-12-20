"use client";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

const inter = Inter({ subsets: ["latin"] });

// Note: Metadata export is not allowed in Client Components
// You might need to move this to a separate file if you need it
// export const metadata: Metadata = {
//   title: "Dashboard | Web Prodigies",
//   description: "Manage your web automation and AI responses",
// }

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={`min-h-screen flex bg-background`}>
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 pl-64">
        {/* Top Navigation */}
        <Header />
        {/* Page Content */}
        <main className={cn("flex-1", inter.className)}>{children}</main>
      </div>
    </div>
  );
}
