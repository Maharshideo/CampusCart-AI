import type { Order } from "@/types";

export const orders: Order[] = [];

// User's own created/joined orders
export const myCreatedOrders: Order[] = [];
export const myJoinedOrders: Order[] = [];

export const getOrder = (id: string) => orders.find((o) => o.id === id);
