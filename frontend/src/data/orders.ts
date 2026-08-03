import type { Order } from "@/types";

export const orders: Order[] = [
  {
    id: "o1",
    creatorId: "u2",
    creatorName: "Priya Mehta",
    hostel: "Hostel 12",
    platform: "blinkit",
    amount: 240,
    note: "Need milk, bread, eggs. Open to add-ons.",
    createdAt: "2026-06-27T10:14:00Z",
    expiresAt: "2026-06-27T10:44:00Z",
    status: "open",
    maxParticipants: 4,
    savingsPerPerson: 35,
    participants: [
      { userId: "u2", name: "Priya Mehta", hostel: "Hostel 12", amount: 240, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=47" },
      { userId: "u5", name: "Karan Patel", hostel: "Hostel 12", amount: 120, paid: false, avatarUrl: "https://i.pravatar.cc/150?img=15" },
    ],
  },
  {
    id: "o2",
    creatorId: "u3",
    creatorName: "Rohan Iyer",
    hostel: "Hostel 3",
    platform: "zepto",
    amount: 320,
    note: "Snacks + cold drinks for movie night",
    createdAt: "2026-06-27T10:05:00Z",
    expiresAt: "2026-06-27T10:35:00Z",
    status: "open",
    maxParticipants: 5,
    savingsPerPerson: 28,
    participants: [
      { userId: "u3", name: "Rohan Iyer", hostel: "Hostel 3", amount: 320, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=33" },
      { userId: "u6", name: "Ananya Reddy", hostel: "Hostel 4", amount: 180, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=44" },
      { userId: "u4", name: "Sneha Kapoor", hostel: "Hostel 16", amount: 90, paid: false, avatarUrl: "https://i.pravatar.cc/150?img=20" },
    ],
  },
  {
    id: "o3",
    creatorId: "u4",
    creatorName: "Sneha Kapoor",
    hostel: "Hostel 16",
    platform: "swiggy",
    amount: 480,
    note: "Domino's — pizza party",
    createdAt: "2026-06-27T09:58:00Z",
    expiresAt: "2026-06-27T10:28:00Z",
    status: "open",
    maxParticipants: 6,
    savingsPerPerson: 42,
    participants: [
      { userId: "u4", name: "Sneha Kapoor", hostel: "Hostel 16", amount: 480, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=20" },
    ],
  },
  {
    id: "o4",
    creatorId: "u6",
    creatorName: "Ananya Reddy",
    hostel: "Hostel 4",
    platform: "instamart",
    amount: 190,
    note: "Maggi, chips, coffee",
    createdAt: "2026-06-27T09:50:00Z",
    expiresAt: "2026-06-27T10:20:00Z",
    status: "open",
    maxParticipants: 4,
    savingsPerPerson: 30,
    participants: [
      { userId: "u6", name: "Ananya Reddy", hostel: "Hostel 4", amount: 190, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=44" },
      { userId: "u3", name: "Rohan Iyer", hostel: "Hostel 3", amount: 140, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=33" },
    ],
  },
  {
    id: "o5",
    creatorId: "u5",
    creatorName: "Karan Patel",
    hostel: "Hostel 12",
    platform: "zomato",
    amount: 560,
    note: "Late night biryani",
    createdAt: "2026-06-27T09:30:00Z",
    expiresAt: "2026-06-27T10:00:00Z",
    status: "open",
    maxParticipants: 5,
    savingsPerPerson: 48,
    participants: [
      { userId: "u5", name: "Karan Patel", hostel: "Hostel 12", amount: 560, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=15" },
      { userId: "u2", name: "Priya Mehta", hostel: "Hostel 12", amount: 240, paid: true, avatarUrl: "https://i.pravatar.cc/150?img=47" },
    ],
  },
];

// User's own created/joined orders
export const myCreatedOrders: Order[] = [orders[4]];
export const myJoinedOrders: Order[] = [orders[0], orders[1]];

export const getOrder = (id: string) => orders.find((o) => o.id === id);
