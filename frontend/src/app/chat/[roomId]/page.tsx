import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { MobileNav } from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { UserAvatar } from '@/components/user-avatar';
import { Send } from 'lucide-react';
import { currentUser } from '@/data/users';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
}

const mockMessages: Message[] = [];

export default function ChatRoomPage({ params }: { params: { roomId?: string } }) {
  const roomId = params.roomId || 'default';
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col md:hidden">
        <Navbar />
        <MobileNav />
      </div>
      <div className="hidden flex-1 flex-col md:flex">
        <Navbar />
        <main className="flex-1 overflow-hidden">
          <div className="flex h-full">
            <div className="flex-1 flex flex-col">
              <div className="border-b px-6 py-4">
                <h1 className="text-xl font-semibold text-foreground">Order Room #{roomId}</h1>
                <p className="text-sm text-muted-foreground">Blinkit Order - Hostel 12</p>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.senderId === 'u1' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    <UserAvatar
                      name={message.senderName}
                      src={message.senderAvatar}
                      size="sm"
                    />
                    <Card className={`max-w-md ${message.senderId === 'u1' ? 'bg-primary text-primary-foreground' : ''}`}>
                      <CardContent className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{message.senderName}</span>
                          <span className="text-xs opacity-70">{message.timestamp}</span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
