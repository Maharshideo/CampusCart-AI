import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { MobileNav } from '@/components/mobile-nav';
import { OrderCard } from '@/components/order-card';
import { orders } from '@/data/orders';
import type { Order } from '@/types';

export default function ActiveOrdersPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col md:hidden">
        <Navbar />
        <MobileNav />
      </div>
      <div className="hidden flex-1 flex-col md:flex">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">Active Orders</h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {orders.map((order: Order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
