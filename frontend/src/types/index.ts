export type PlatformId = "blinkit" | "instamart" | "zepto" | "swiggy" | "zomato";

export interface Platform {
  id: PlatformId;
  name: string;
  category: "Groceries" | "Food";
  freeDeliveryThreshold: number;
  avgDeliveryFee: number;
  color: string; // tailwind-friendly hex for accent dot only
  description: string;
}

export interface College {
  id: string;
  name: string;
  city: string;
}

export interface Hostel {
  id: string;
  collegeId: string;
  name: string;
  block?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  collegeId: string;
  hostelId: string;
  avatarUrl?: string;
  ordersCompleted: number;
  moneySaved: number;
}

export type OrderStatus = "open" | "matching" | "confirmed" | "delivered" | "cancelled";

export interface Order {
  id: string;
  creatorId: string;
  creatorName: string;
  hostel: string;
  platform: PlatformId;
  amount: number;
  note?: string;
  createdAt: string;
  expiresAt: string;
  status: OrderStatus;
  participants: OrderParticipant[];
  maxParticipants: number;
  savingsPerPerson: number;
}

export interface OrderParticipant {
  userId: string;
  name: string;
  hostel: string;
  amount: number;
  paid: boolean;
  avatarUrl?: string;
}

export interface MatchSuggestion {
  id: string;
  user: Pick<User, "id" | "name" | "avatarUrl">;
  hostel: string;
  platform: PlatformId;
  amount: number;
  matchPercent: number;
  reasons: string[];
  expiresInMin: number;
}

export interface ChatMessage {
  id: string;
  orderId: string;
  userId: string;
  userName: string;
  avatarUrl?: string;
  text: string;
  timestamp: string;
  self?: boolean;
}

export interface ActivityItem {
  id: string;
  type: "joined" | "created" | "saved" | "delivered";
  text: string;
  timestamp: string;
}

export interface DashboardStats {
  activeOrders: number;
  studentsOnline: number;
  moneySaved: number;
}
