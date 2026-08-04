"use client";

import { Logo } from "@/components/logo";
import { StatsCard } from "@/components/stats-card";
import { OrderCard } from "@/components/order-card";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, ShoppingCart, DollarSign, Users, Star } from "lucide-react";
import Link from "next/link";
import type { Order } from "@/types";
import { useOrders } from "@/context/order-context";

export default function DashboardPage() {
  const { orders } = useOrders();
  
  const activeOrders = orders.filter(order => new Date(order.expiresAt).getTime() > Date.now());

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/"><Logo /></Link>
          <nav className="flex items-center gap-4">
            <Link href="/active-orders">
              <Button variant="ghost" size="sm">Active Orders</Button>
            </Link>
            <Link href="/create-order">
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
          <StatsCard 
            label="Active Orders" 
            value={activeOrders.length.toString()} 
            icon={ShoppingCart} 
            trend={`${activeOrders.length} this week`} 
          />
          <StatsCard label="Money Saved" value="₹0" icon={DollarSign} trend="₹0 this week" />
          <StatsCard label="Matches Found" value="0" icon={Users} trend="0 this week" />
          <StatsCard label="Trust Score" value="5.0" icon={Star} trend="0.0 this week" />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <Link href="/my-orders">
              <Button variant="ghost" size="sm">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {activeOrders.length > 0 ? (
              activeOrders.slice(0, 2).map(order => <OrderCard key={order.id} order={order} />)
            ) : (
              <p className="text-muted-foreground text-sm col-span-2 text-center py-8">No recent orders found.</p>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">New Matches</h2>
            <Link href="/matches">
              <Button variant="ghost" size="sm">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {activeOrders.length > 2 ? (
              activeOrders.slice(2, 4).map(order => <OrderCard key={order.id} order={order} />)
            ) : (
              <p className="text-muted-foreground text-sm col-span-2 text-center py-8">No new matches found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
