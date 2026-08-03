"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { currentUser } from "@/data/users";
import { navItems } from "@/components/sidebar";

export function Navbar() {
  const pathname = usePathname();
  const current = navItems.find((n) => pathname.startsWith(n.to));

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur md:h-16 md:px-8">
      <div className="md:hidden">
        <Link href="/dashboard">
          <Logo showText={false} />
        </Link>
      </div>
      <h1 className="hidden text-lg font-semibold text-foreground md:block">
        {current?.label ?? "CampusCart"}
      </h1>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>
        <Link href="/profile" className="md:hidden">
          <UserAvatar name={currentUser.name} src={currentUser.avatarUrl} size="sm" />
        </Link>
      </div>
    </header>
  );
}
