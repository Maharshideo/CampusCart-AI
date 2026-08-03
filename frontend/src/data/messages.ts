import type { ChatMessage } from "@/types";

export const messages: ChatMessage[] = [
  { id: "msg1", orderId: "o1", userId: "u2", userName: "Priya Mehta", avatarUrl: "https://i.pravatar.cc/150?img=47", text: "Hey! Adding Amul milk 1L and brown bread. Anything else?", timestamp: "10:15 AM" },
  { id: "msg2", orderId: "o1", userId: "u1", userName: "Aarav Sharma", avatarUrl: "https://i.pravatar.cc/150?img=12", text: "Can you add a dozen eggs and Maggi 4-pack?", timestamp: "10:16 AM", self: true },
  { id: "msg3", orderId: "o1", userId: "u5", userName: "Karan Patel", avatarUrl: "https://i.pravatar.cc/150?img=15", text: "Add Lays cream & onion x2 please 🙏", timestamp: "10:17 AM" },
  { id: "msg4", orderId: "o1", userId: "u2", userName: "Priya Mehta", avatarUrl: "https://i.pravatar.cc/150?img=47", text: "Done. Cart is at ₹420 — we cross the free delivery threshold ✅", timestamp: "10:19 AM" },
  { id: "msg5", orderId: "o1", userId: "u1", userName: "Aarav Sharma", avatarUrl: "https://i.pravatar.cc/150?img=12", text: "Perfect. Placing UPI now.", timestamp: "10:20 AM", self: true },
];
