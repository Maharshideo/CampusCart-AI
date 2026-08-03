import type { MatchSuggestion } from "@/types";

export const matches: MatchSuggestion[] = [
  {
    id: "m1",
    user: { id: "u2", name: "Priya Mehta", avatarUrl: "https://i.pravatar.cc/150?img=47" },
    hostel: "Hostel 12",
    platform: "blinkit",
    amount: 240,
    matchPercent: 96,
    reasons: ["Same hostel", "Crosses free-delivery threshold", "Ordering in next 10 min"],
    expiresInMin: 12,
  },
  {
    id: "m2",
    user: { id: "u5", name: "Karan Patel", avatarUrl: "https://i.pravatar.cc/150?img=15" },
    hostel: "Hostel 12",
    platform: "blinkit",
    amount: 180,
    matchPercent: 88,
    reasons: ["Same hostel", "Similar order size"],
    expiresInMin: 18,
  },
  {
    id: "m3",
    user: { id: "u6", name: "Ananya Reddy", avatarUrl: "https://i.pravatar.cc/150?img=44" },
    hostel: "Hostel 4",
    platform: "blinkit",
    amount: 310,
    matchPercent: 74,
    reasons: ["Nearby hostel", "Splits delivery 3 ways"],
    expiresInMin: 24,
  },
];
