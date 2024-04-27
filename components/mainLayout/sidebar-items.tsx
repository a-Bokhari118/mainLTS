"use client";
import { cn } from "@/lib/utils";
import {
  Badge,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItems = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="/client"
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          pathname === "/client"
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        )}
      >
        <Home className="h-4 w-4" />
        Client
      </Link>
      <Link
        href="/server"
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          pathname === "/server"
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        )}
      >
        <Home className="h-4 w-4" />
        Server
      </Link>
      <Link
        href="/admin"
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          pathname === "/admin"
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        )}
      >
        <Home className="h-4 w-4" />
        Admin
      </Link>
      <Link
        href="/settings"
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          pathname === "/settings"
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        )}
      >
        <Home className="h-4 w-4" />
        Settings
      </Link>
    </nav>
  );
};

export default SidebarItems;
