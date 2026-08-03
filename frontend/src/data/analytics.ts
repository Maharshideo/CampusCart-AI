import type { ActivityItem, DashboardStats } from "@/types";

export const dashboardStats: DashboardStats = {
  activeOrders: 14,
  studentsOnline: 86,
  moneySaved: 12480,
};

export const recentActivity: ActivityItem[] = [
  { id: "a1", type: "joined", text: "You joined Priya's Blinkit order", timestamp: "2m ago" },
  { id: "a2", type: "saved", text: "Saved ₹35 on delivery with Hostel 12 group", timestamp: "1h ago" },
  { id: "a3", type: "delivered", text: "Zepto order delivered to Hostel 12", timestamp: "Yesterday" },
  { id: "a4", type: "created", text: "You created a Swiggy order", timestamp: "2d ago" },
];

export const aiSuggestions: { id: string; title: string; description: string }[] = [
  { id: "s1", title: "Join Priya's Blinkit order", description: "96% match · saves you ₹35 on delivery" },
  { id: "s2", title: "Start a Zepto order now", description: "4 students in Hostel 12 placed Zepto orders in the last hour" },
  { id: "s3", title: "Pizza Friday at Hostel 12?", description: "Swiggy has a buy-1-get-1 on Domino's till 11 PM" },
];
