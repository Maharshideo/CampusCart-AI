"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Order } from "@/types";

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cartai_orders");
    if (saved) {
      try {
        setOrders(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse orders from localStorage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const addOrder = (order: Order) => {
    setOrders((prev) => {
      const newOrders = [order, ...prev];
      localStorage.setItem("cartai_orders", JSON.stringify(newOrders));
      return newOrders;
    });
  };

  // Prevent hydration mismatch by not rendering children until local storage is loaded
  if (!isLoaded) return null;

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
}
