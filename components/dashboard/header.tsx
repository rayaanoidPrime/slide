import { Bell } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

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
export const Header = () => {
  return (
    <header className="border-b border-border h-14 flex items-center justify-between px-6">
      <span className="font-semibold">Dashboard</span>
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
