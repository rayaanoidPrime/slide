import { BarChart, Home, MessageSquare, Settings, Users } from "lucide-react";

export const sidebarNavItems = [
  {
    title: "Home",
    label: "home",
    icon: Home,
    variant: "ghost" as const,
  },
  {
    title: "Analytics",
    label: "analytics",
    icon: BarChart,
    variant: "ghost" as const,
  },
  {
    title: "Messages",
    label: "messages",
    icon: MessageSquare,
    variant: "ghost" as const,
  },
  {
    title: "Users",
    label: "users",
    icon: Users,
    variant: "ghost" as const,
  },
  {
    title: "Settings",
    label: "settings",
    icon: Settings,
    variant: "ghost" as const,
  },
];
