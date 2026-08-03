"use client";

import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 md:px-6">
          <a href="/"><Logo /></a>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md border-border/70 shadow-sm">
          <CardContent className="p-8">
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold tracking-tight">Welcome to CampusCart</h1>
              <p className="text-sm text-muted-foreground">Tell us about yourself to get started.</p>
            </div>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); router.push("/app/dashboard"); }}
            >
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="college">College</Label>
                <Input id="college" type="text" placeholder="IIT Bombay" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="hostel">Hostel</Label>
                <Input id="hostel" type="text" placeholder="Hostel 12" required />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
