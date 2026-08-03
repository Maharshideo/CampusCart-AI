import type { ActivityItem, DashboardStats } from "@/types";

export const dashboardStats: DashboardStats = {
  activeOrders: 0,
  studentsOnline: 0,
  moneySaved: 0,
};

export const recentActivity: ActivityItem[] = [];

export const aiSuggestions: { id: string; title: string; description: string }[] = [];
