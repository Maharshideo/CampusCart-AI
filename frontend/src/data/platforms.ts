import type { Platform } from "@/types";

export const platforms: Platform[] = [
  { id: "blinkit", name: "Blinkit", category: "Groceries", freeDeliveryThreshold: 199, avgDeliveryFee: 35, color: "#F8CB46", description: "10-min groceries" },
  { id: "instamart", name: "Instamart", category: "Groceries", freeDeliveryThreshold: 249, avgDeliveryFee: 40, color: "#FC8019", description: "Daily essentials" },
  { id: "zepto", name: "Zepto", category: "Groceries", freeDeliveryThreshold: 199, avgDeliveryFee: 30, color: "#7C3AED", description: "10-min delivery" },
  { id: "swiggy", name: "Swiggy", category: "Food", freeDeliveryThreshold: 199, avgDeliveryFee: 45, color: "#FC8019", description: "Food from restaurants" },
  { id: "zomato", name: "Zomato", category: "Food", freeDeliveryThreshold: 199, avgDeliveryFee: 49, color: "#E23744", description: "Restaurant delivery" },
];

export const getPlatform = (id: string) => platforms.find((p) => p.id === id);
