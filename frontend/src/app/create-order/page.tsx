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

export default function CreateOrderPage() {
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
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      {platforms.map((platform) => (
                        <SelectItem key={platform.id} value={platform.id}>
                          {platform.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Order Amount (₹)</Label>
                  <Input id="amount" type="number" placeholder="Enter order amount" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="participants">Max Participants</Label>
                  <Input id="participants" type="number" placeholder="Number of participants" min="2" max="10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="note">Note (optional)</Label>
                  <Textarea id="note" placeholder="Add any special instructions..." />
                </div>
                <Button className="w-full">Create Order</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
