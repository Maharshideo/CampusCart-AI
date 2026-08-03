import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { MobileNav } from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserAvatar } from '@/components/user-avatar';
import { currentUser } from '@/data/users';

export default function ProfilePage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">Profile</h1>
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <UserAvatar name={currentUser.name} src={currentUser.avatarUrl} size="lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{currentUser.name}</h2>
                    <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={currentUser.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={currentUser.email} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="college">College</Label>
                    <Input id="college" defaultValue="IIT Bombay" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hostel">Hostel</Label>
                    <Input id="hostel" defaultValue="Hostel 12" disabled />
                  </div>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
