import {
  Bell,
  LayoutDashboard,
  Link as LinkIcon,
  PlusCircle,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ClerkAuth } from "./clerkauth";
import { sidebarNavItems } from "@/constants";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { UpgradeCard } from "./upgradecard";
import Link from "next/link";

export const ToggleTheme = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={cn(
        "rounded-full bg-background text-foreground hover:text-background shadow-none",
        className
      )}
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      {...props}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export const NavBar = ({ slug, path }: { slug: string; path: string[] }) => {
  const page = path[path.length - 1];

  return (
    <header className="border-b ml-2 border-border h-14 flex items-center justify-between px-6">
      <div className="flex lg:hidden mr-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-0">
            <div className="p-6 ">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 font-semibold text-lg text-primary"
              >
                <LayoutDashboard className="h-6 w-6" />
                <span>Slide</span>
              </Link>
            </div>

            <ScrollArea className="h-[calc(100vh-10rem)] px-4 py-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  {sidebarNavItems.map((item, index) => {
                    const isActive =
                      (page === slug && item.label === "home") ||
                      page === item.label;

                    return (
                      <Link
                        key={index}
                        href={
                          item.label === "home"
                            ? `/dashboard/${slug}`
                            : `/dashboard/${slug}/${item.label}`
                        }
                      >
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          className="w-full justify-start gap-3"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Button>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-2">
                  <Link href={`/dashboard/${slug}/new`}>
                    <Button
                      variant="secondary"
                      className="w-full justify-start gap-3"
                    >
                      <PlusCircle className="h-4 w-4" />
                      <span>New Project</span>
                    </Button>
                  </Link>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center gap-3 ">
                  <ClerkAuth />
                  <p className="text-foreground">Profile</p>
                </div>
              </div>
            </ScrollArea>

            <div className="absolute bottom-0 left-0 right-0 p-2 bg-background">
              <UpgradeCard type="FREE" />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <span className="font-semibold mr-auto">{path.join("/")}</span>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
          <span className="sr-only">Notifications</span>
        </Button>
        <ToggleTheme />
      </div>
    </header>
  );
};
