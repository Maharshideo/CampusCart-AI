import { ShoppingBag, Users, PiggyBank, Sparkles, Clock, Shield } from "lucide-react";

export const howItWorks = [
  { step: 1, title: "Post your order", description: "Tell CartAI what you want to order and from where." },
  { step: 2, title: "Get matched instantly", description: "We find students in your hostel ordering at the same time." },
  { step: 3, title: "Split & save", description: "Cross free-delivery thresholds together and split the cost." },
];

export const benefits = [
  { icon: PiggyBank, title: "Save on every order", description: "Hit free-delivery thresholds together and stop paying ₹40 fees." },
  { icon: Users, title: "Hostel-first matching", description: "Only match with students from your hostel for one-stop drop-offs." },
  { icon: Sparkles, title: "CartAI suggestions", description: "Personalised recommendations on when, where, and with whom to order." },
  { icon: Clock, title: "Fast 10-min matches", description: "Get matched in under a minute on Blinkit, Zepto, and Instamart." },
  { icon: ShoppingBag, title: "All your apps in one place", description: "Blinkit, Instamart, Zepto, Swiggy, and Zomato — one feed." },
  { icon: Shield, title: "Trusted by your campus", description: "Verified college email logins. Real students, not bots." },
];

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [];

export const faqs = [
  { q: "Is CampusCart free?", a: "Yes — CampusCart is completely free for students. We only help you save on delivery fees." },
  { q: "Which apps are supported?", a: "Blinkit, Instamart, Zepto, Swiggy, and Zomato. More coming soon." },
  { q: "How does payment work?", a: "Each participant pays their share via UPI directly to the order creator. CampusCart never handles money." },
  { q: "Is my data safe?", a: "We only use your college email to verify you're a real student. We never sell your data." },
  { q: "Can I cancel after joining?", a: "You can leave an order any time before it's placed. Once placed, the group decides together." },
];
