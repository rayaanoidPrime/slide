import Link from "next/link";
import { LayoutDashboard, PlusCircle } from "lucide-react";
import { sidebarNavItems } from "@/constants";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "../ui/separator";
import { ClerkAuth } from "./clerkauth";
import { UpgradeCard } from "./upgradecard";

export function Sidebar({ slug, page }: { slug: string; page: string }) {
  return (
    <div className="w-64 overflow-hidden radial border-2 rounded-3xl my-2 ml-1 bg-gradient-to-b from-blue-600 via-black to-blue-600 border-border bg-card fixed inset-y-0 md:inline-block hidden">
      <div className="flex flex-col h-full bg-opacity-80 bg-black bg-clip-padding backdrop-filter backdrop-blur-3xl">
        {/* Logo area */}
        <div className="p-6 mb-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-semibold text-lg text-primary"
          >
            <LayoutDashboard className="h-6 w-6" />
            <span>Slide</span>
          </Link>
        </div>

        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-1 px-4">
              {sidebarNavItems.map((item, index) => (
                <Button
                  key={index}
                  variant={
                    page === slug && item.label === "home"
                      ? "default"
                      : page === item.label
                      ? "default"
                      : "ghost"
                  }
                  asChild
                  className="w-full justify-start gap-2"
                >
                  <Link
                    href={
                      item.label === "home"
                        ? `/dashboard/${slug}`
                        : `/dashboard/${slug}/${item.label}`
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-4 px-4">
              <Button
                variant={"secondary"}
                className="w-full justify-start gap-2"
              >
                <Link
                  className="flex gap-2 justify-center items-center"
                  href={`/dashboard/${slug}/new`}
                >
                  <PlusCircle className="h-4 w-4" />
                  New Project
                </Link>
              </Button>
            </div>

            {/* Separator */}
            <div className="px-16 m-4 ">
              <Separator orientation="horizontal" className="bg-[#333336]" />
            </div>
            <div className="flex gap-x-2 px-4">
              <ClerkAuth />
              <p className="text-foreground">Profile</p>
            </div>
          </ScrollArea>
        </div>
        <div className="mt-auto">
          <UpgradeCard type="FREE" />
        </div>
      </div>
    </div>
  );
}
