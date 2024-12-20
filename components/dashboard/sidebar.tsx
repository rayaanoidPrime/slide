import Link from "next/link";
import {
  BarChart,
  Home,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  PlusCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarNavItems = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
    variant: "default" as const,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart,
    variant: "ghost" as const,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
    variant: "ghost" as const,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
    variant: "ghost" as const,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    variant: "ghost" as const,
  },
];

export function Sidebar() {
  return (
    <div className="w-64 border-r border-border bg-card fixed inset-y-0">
      {/* Logo area */}
      <div className="p-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold text-lg text-primary"
        >
          <LayoutDashboard className="h-6 w-6" />
          <span>Slide</span>
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="h-[calc(100vh-5rem)] pb-10">
        <div className="flex flex-col gap-1 px-4">
          {sidebarNavItems.map((item, index) => (
            <Button
              key={index}
              variant={item.variant}
              asChild
              className="w-full justify-start gap-2"
            >
              <Link href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-4 px-4">
          <Button className="w-full justify-start gap-2">
            <PlusCircle className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
