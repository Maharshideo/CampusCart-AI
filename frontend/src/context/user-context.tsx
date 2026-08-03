"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { currentUser as initialUser } from "@/data/users";
import type { User } from "@/types";

interface UserContextType {
  user: User;
  updateUser: (updates: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(initialUser);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cartai_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => {
      const newUser = { ...prev, ...updates };
      localStorage.setItem("cartai_user", JSON.stringify(newUser));
      return newUser;
    });
  };

  // Prevent hydration mismatch by not rendering children until local storage is loaded
  if (!isLoaded) return null;

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
