import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ArrowRight, Check, ChevronDown, Sparkles, Star } from "lucide-react";
import { howItWorks, benefits, testimonials, faqs } from "@/data/marketing";
import { platforms } from "@/data/platforms";
import { UserAvatar } from "@/components/user-avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/"><Logo /></Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#benefits" className="hover:text-foreground">Benefits</a>
            <a href="#platforms" className="hover:text-foreground">Platforms</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/login">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(ellipse_at_top,theme(colors.accent)_0%,transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                <Sparkles className="h-3 w-3 text-primary" />
                Powered by CartAI · matches in under a minute
              </span>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                Order together.<br />
                <span className="text-primary">Save together.</span>
              </h1>
              <p className="max-w-lg text-base text-muted-foreground md:text-lg">
                CampusCart matches you with hostel-mates ordering on Blinkit, Zepto, Instamart, Swiggy and Zomato — so you cross free-delivery thresholds together and stop paying ₹40 in fees.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/login">Get started <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/login">Login</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                <div className="flex -space-x-2">
                  {testimonials.map((t) => (
                    <UserAvatar key={t.id} name={t.name} src={t.avatarUrl} size="sm" className="ring-2 ring-background" />
                  ))}
                </div>
                <span>Trusted by 2,400+ students across IITs, BITS and VIT.</span>
              </div>
            </div>

            {/* Visual mock */}
            <div className="relative">
              <Card className="border-border/70 shadow-xl">
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Sparkles className="h-4 w-4 text-primary" />
                      CartAI Match
                    </div>
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">96% match</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-muted/40 p-3">
                    <UserAvatar name="Priya Mehta" src="https://i.pravatar.cc/150?img=47" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Priya · Hostel 12</p>
                      <p className="text-xs text-muted-foreground">Blinkit · cart ₹240 · placing in 8 min</p>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                  {["Same hostel", "Crosses free-delivery threshold", "Saves you ₹35 on delivery"].map((r) => (
                    <div key={r} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary" /> {r}
                    </div>
                  ))}
                  <div className="rounded-xl border border-dashed border-primary/30 bg-accent/40 p-3 text-center text-xs font-medium text-accent-foreground">
                    You + Priya = ₹420 cart · free delivery unlocked ✓
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">How it works</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Three steps to free delivery</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {howItWorks.map((step) => (
              <Card key={step.step} className="border-border/70 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="border-b border-border/60 bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Why CampusCart</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Built for hostel life</h2>
            <p className="mt-3 text-muted-foreground">Every feature, tuned for the way students actually order.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Card key={b.title} className="border-border/70 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Supported platforms</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">All your apps in one feed</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {platforms.map((p) => (
              <Card key={p.id} className="border-border/70 shadow-sm">
                <CardContent className="flex flex-col items-center p-5 text-center">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: p.color }} />
                  <p className="mt-3 font-semibold">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border/60 bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Loved by students</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Real savings, real stories</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.id} className="border-border/70 shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <div className="flex gap-0.5 text-secondary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-2">
                    <UserAvatar name={t.name} src={t.avatarUrl} size="sm" />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="bg-primary/5 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to save on your next order?</h2>
          <p className="mt-3 text-muted-foreground">Join CampusCart with your college email. Free, always.</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/login">Get started <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" /></Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-sm text-muted-foreground md:flex-row md:justify-between md:px-6">
          <Link href="/"><Logo /></Link>
          <p>© 2026 CampusCart. Order Together. Save Together.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
