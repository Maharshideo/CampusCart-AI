import type { User } from "@/types";

export const currentUser: User = {
  id: "u1",
  name: "Aarav Sharma",
  email: "aarav.sharma@iitb.ac.in",
  collegeId: "iitb",
  hostelId: "h12",
  avatarUrl: "https://i.pravatar.cc/150?img=12",
  ordersCompleted: 0,
  moneySaved: 0,
};

export const users: User[] = [
  currentUser,
];

export const getUser = (id: string) => users.find((u) => u.id === id);
