"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { MobileNav } from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { platforms } from '@/data/platforms';
import { useOrders } from '@/context/order-context';
import { useUser } from '@/context/user-context';
import type { PlatformId, Order } from '@/types';
import { toast } from 'sonner';

export default function CreateOrderPage() {
  const router = useRouter();
  const { addOrder } = useOrders();
  const { user } = useUser();
  
  const [platform, setPlatform] = useState<PlatformId | ''>('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !amount || !participants) {
      toast.error("Please fill all required fields");
      return;
    }
    
    const newOrder: Order = {
      id: `o${Date.now()}`,
      creatorId: user.id,
      creatorName: user.name,
      hostel: user.hostelId,
      platform: platform as PlatformId,
      amount: Number(amount),
      note: note,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 60000).toISOString(), // expires in 30 mins
      status: "open",
      participants: [{
        userId: user.id,
        name: user.name,
        hostel: user.hostelId,
        amount: Number(amount),
        paid: true,
        avatarUrl: user.avatarUrl
      }],
      maxParticipants: Number(participants),
      savingsPerPerson: 0,
    };

    addOrder(newOrder);
    toast.success("Order created successfully!");
    router.push("/active-orders");
  };

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
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">Create Order</h1>
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="platform">Platform</Label>
                    <Select onValueChange={(val: PlatformId) => setPlatform(val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Order Amount (₹)</Label>
                    <Input 
                      id="amount" 
                      type="number" 
                      placeholder="Enter order amount" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="participants">Max Participants</Label>
                    <Input 
                      id="participants" 
                      type="number" 
                      placeholder="Number of participants" 
                      min="2" 
                      max="10" 
                      value={participants}
                      onChange={(e) => setParticipants(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="note">Note (optional)</Label>
                    <Textarea 
                      id="note" 
                      placeholder="Add any special instructions..." 
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full">Create Order</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
