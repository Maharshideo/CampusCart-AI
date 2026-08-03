import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { MobileNav } from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserAvatar } from '@/components/user-avatar';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, DollarSign } from 'lucide-react';
import { currentUser } from '@/data/users';
import { getOrder } from '@/data/orders';

export default function RoomDetailPage({ params }: { params: { roomId: string } }) {
  const order = getOrder(params.roomId || 'default');

  if (!order) {
    return (
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="hidden flex-1 flex-col md:flex">
          <Navbar />
          <main className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Order not found</p>
          </main>
        </div>
      </div>
    );
  }

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
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Order Room</h1>
                <p className="text-muted-foreground">Order #{order.id}</p>
              </div>
              <Badge variant={order.status === 'open' ? 'default' : 'secondary'}>
                {order.status}
              </Badge>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Expires in {Math.ceil((new Date(order.expiresAt).getTime() - Date.now()) / 60000)} min</span>
                      </div>
                      <Separator orientation="vertical" className="h-4" />
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{order.participants.length}/{order.maxParticipants} participants</span>
                      </div>
                      <Separator orientation="vertical" className="h-4" />
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>₹{order.savingsPerPerson} savings/person</span>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-2">Note</h3>
                      <p className="text-muted-foreground">{order.note}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Participants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {order.participants.map((participant) => (
                        <div key={participant.userId} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <UserAvatar
                              name={participant.name}
                              src={participant.avatarUrl}
                              size="sm"
                            />
                            <div>
                              <p className="font-medium">{participant.name}</p>
                              <p className="text-sm text-muted-foreground">{participant.hostel}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹{participant.amount}</p>
                            <Badge variant={participant.paid ? 'default' : 'secondary'}>
                              {participant.paid ? 'Paid' : 'Pending'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Join Order</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold">₹{order.amount}</p>
                      <p className="text-sm text-muted-foreground">Total order amount</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-lg font-semibold">Your Share</p>
                      <p className="text-sm text-muted-foreground">
                        ₹{Math.round(order.amount / (order.participants.length + 1))}
                      </p>
                    </div>
                    <Button className="w-full" size="lg">
                      Join Order
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Open Chat Room
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
