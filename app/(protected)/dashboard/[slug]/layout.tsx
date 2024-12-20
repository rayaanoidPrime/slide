"use client";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/dashboard/sidebar";
import { NavBar } from "@/components/dashboard/navbar";
import { usePath } from "@/app/hooks/usePath";

const inter = Inter({ subsets: ["latin"] });

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export default function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { path, page } = usePath();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden lg:block w-[250px] flex-shrink-0">
        <Sidebar slug={params.slug} page={page} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-auto">
        <NavBar slug={params.slug} path={path} />
        <main className={cn("flex-1 p-6", inter.className)}>{children}</main>
      </div>
    </div>
  );
}
