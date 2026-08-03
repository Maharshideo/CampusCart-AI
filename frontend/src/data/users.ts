import type { User } from "@/types";

export const currentUser: User = {
  id: "u1",
  name: "Aarav Sharma",
  email: "aarav.sharma@iitb.ac.in",
  collegeId: "iitb",
  hostelId: "h12",
  avatarUrl: "https://i.pravatar.cc/150?img=12",
  ordersCompleted: 28,
  moneySaved: 1840,
};

export const users: User[] = [
  currentUser,
  { id: "u2", name: "Priya Mehta", email: "priya@iitb.ac.in", collegeId: "iitb", hostelId: "h12", avatarUrl: "https://i.pravatar.cc/150?img=47", ordersCompleted: 16, moneySaved: 940 },
  { id: "u3", name: "Rohan Iyer", email: "rohan@iitb.ac.in", collegeId: "iitb", hostelId: "h3", avatarUrl: "https://i.pravatar.cc/150?img=33", ordersCompleted: 41, moneySaved: 2610 },
  { id: "u4", name: "Sneha Kapoor", email: "sneha@iitb.ac.in", collegeId: "iitb", hostelId: "h16", avatarUrl: "https://i.pravatar.cc/150?img=20", ordersCompleted: 9, moneySaved: 520 },
  { id: "u5", name: "Karan Patel", email: "karan@iitb.ac.in", collegeId: "iitb", hostelId: "h12", avatarUrl: "https://i.pravatar.cc/150?img=15", ordersCompleted: 22, moneySaved: 1280 },
  { id: "u6", name: "Ananya Reddy", email: "ananya@iitb.ac.in", collegeId: "iitb", hostelId: "h4", avatarUrl: "https://i.pravatar.cc/150?img=44", ordersCompleted: 33, moneySaved: 2010 },
];

export const getUser = (id: string) => users.find((u) => u.id === id);
