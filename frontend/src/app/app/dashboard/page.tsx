"use client";

import { Logo } from "@/components/logo";
import { StatsCard } from "@/components/stats-card";
import { OrderCard } from "@/components/order-card";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, ShoppingCart, DollarSign, Users, Star } from "lucide-react";
import Link from "next/link";
import type { Order } from "@/types";

const mockOrders: Order[] = [
  {
    id: "1",
    creatorId: "1",
    platform: "blinkit",
    amount: 350,
    creatorName: "John Doe",
    hostel: "Hostel 12",
    note: "Ordering groceries for the week",
    maxParticipants: 4,
    participants: [
      { userId: "1", name: "John Doe", hostel: "Hostel 12", amount: 120, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=1" },
      { userId: "2", name: "Jane Smith", hostel: "Hostel 12", amount: 115, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=2" },
      { userId: "3", name: "Bob Johnson", hostel: "Hostel 12", amount: 115, paid: false, avatarUrl: "https://i.pravatar.cc/150?img=3" }
    ],
    savingsPerPerson: 35,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    status: "open"
  },
  {
    id: "2",
    creatorId: "2",
    platform: "zepto",
    amount: 280,
    creatorName: "Jane Smith",
    hostel: "Hostel 8",
    note: "Quick snack run",
    maxParticipants: 3,
    participants: [
      { userId: "2", name: "Jane Smith", hostel: "Hostel 8", amount: 140, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=2" },
      { userId: "4", name: "Alice Brown", hostel: "Hostel 8", amount: 140, paid: false, avatarUrl: "https://i.pravatar.cc/150?img=4" }
    ],
    savingsPerPerson: 25,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
    status: "matching"
  },
  {
    id: "3",
    creatorId: "3",
    platform: "instamart",
    amount: 420,
    creatorName: "Bob Johnson",
    hostel: "Hostel 5",
    note: "Dinner supplies",
    maxParticipants: 5,
    participants: [
      { userId: "3", name: "Bob Johnson", hostel: "Hostel 5", amount: 105, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=3" },
      { userId: "5", name: "Charlie Wilson", hostel: "Hostel 5", amount: 105, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=5" },
      { userId: "6", name: "Diana Lee", hostel: "Hostel 5", amount: 105, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=6" },
      { userId: "7", name: "Eve Davis", hostel: "Hostel 5", amount: 105, paid: false, avatarUrl: "https://i.pravatar.cc/150?img=7" }
    ],
    savingsPerPerson: 40,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 20 * 60 * 1000).toISOString(),
    status: "confirmed"
  },
  {
    id: "4",
    creatorId: "4",
    platform: "swiggy",
    amount: 390,
    creatorName: "Alice Brown",
    hostel: "Hostel 3",
    note: "Late night cravings",
    maxParticipants: 4,
    participants: [
      { userId: "4", name: "Alice Brown", hostel: "Hostel 3", amount: 130, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=4" },
      { userId: "8", name: "Frank Miller", hostel: "Hostel 3", amount: 130, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=8" },
      { userId: "9", name: "Grace Kim", hostel: "Hostel 3", amount: 130, paid: false, avatarUrl: "https://i.pravatar.cc/150?img=9" }
    ],
    savingsPerPerson: 30,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 25 * 60 * 1000).toISOString(),
    status: "confirmed"
  }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/"><Logo /></Link>
          <nav className="flex items-center gap-4">
            <Link href="/app/active-orders">
              <Button variant="ghost" size="sm">Active Orders</Button>
            </Link>
            <Link href="/app/create-order">
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create Order
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Welcome back! Here's what's happening.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard label="Active Orders" value="12" icon={ShoppingCart} trend="+2 this week" />
          <StatsCard label="Money Saved" value="₹840" icon={DollarSign} trend="+₹120 this week" />
          <StatsCard label="Matches Found" value="28" icon={Users} trend="+5 this week" />
          <StatsCard label="Trust Score" value="4.8" icon={Star} trend="+0.2 this week" />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <Link href="/app/my-orders">
              <Button variant="ghost" size="sm">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <OrderCard order={mockOrders[0]} />
            <OrderCard order={mockOrders[1]} />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">New Matches</h2>
            <Link href="/app/matches">
              <Button variant="ghost" size="sm">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <OrderCard order={mockOrders[2]} />
            <OrderCard order={mockOrders[3]} />
          </div>
        </div>
      </main>
    </div>
  );
}
