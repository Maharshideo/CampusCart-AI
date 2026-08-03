"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Search, PlusCircle, ListChecks, User, Sparkles } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { currentUser } from "@/data/users";
import { Button } from "@/components/ui/button";

export const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/active-orders", label: "Active Orders", icon: Search },
  { to: "/create-order", label: "Create Order", icon: PlusCircle },
  { to: "/my-orders", label: "My Orders", icon: ListChecks },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-sidebar p-4 md:flex">
      <div className="px-2 py-2">
        <Link href="/dashboard">
          <Logo />
        </Link>
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.to || (item.to !== "/dashboard" && pathname.startsWith(item.to));
          return (
            <Link
              key={item.to}
              href={item.to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-3">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            CartAI
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            3 students near you are ordering Blinkit right now.
          </p>
          <Button size="sm" className="mt-3 w-full" asChild>
            <Link href="/active-orders">See matches</Link>
          </Button>
        </div>

        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-lg p-2 hover:bg-sidebar-accent"
        >
          <UserAvatar name={currentUser.name} src={currentUser.avatarUrl} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">{currentUser.name}</p>
            <p className="truncate text-xs text-muted-foreground">Hostel 12 · IITB</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
