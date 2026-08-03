export interface IUser {
  _id: string;
  name: string;
  email: string;
  collegeId: string;
  hostelId: string;
  avatar?: string;
  trustScore: number;
  ordersCreated: number;
  ordersJoined: number;
  moneySaved: number;
  createdAt: Date;
}

export interface ICollege {
  _id: string;
  name: string;
  city: string;
}

export interface IHostel {
  _id: string;
  collegeId: string;
  name: string;
}

export interface IOrder {
  _id: string;
  ownerId: string;
  platform: string;
  amount: number;
  hostelId: string;
  note?: string;
  orderWindow: number;
  status: 'open' | 'matching' | 'confirmed' | 'delivered' | 'cancelled';
  participantCount: number;
  totalAmount: number;
  freeDeliveryTarget: number;
  createdAt: Date;
  expiresAt: Date;
}

export interface IMatch {
  _id: string;
  orderId: string;
  userId: string;
  score: number;
  reasons: string[];
}

export interface IRoom {
  _id: string;
  hostelId: string;
  platform: string;
  orderIds: string[];
  expiresAt: Date;
  status: 'active' | 'closed';
}

export interface IParticipant {
  _id: string;
  roomId: string;
  userId: string;
  amount: number;
  paymentStatus: 'pending' | 'paid' | 'failed';
}

export interface IMessage {
  _id: string;
  roomId: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

export interface INotification {
  _id: string;
  userId: string;
  title: string;
  body: string;
  read: boolean;
  createdAt: Date;
}

export interface ApiResponse<T = any> {
  success: true;
  data: T;
  message: string;
}

export interface ApiError {
  success: false;
  error: string;
}

export type PlatformId = 'blinkit' | 'instamart' | 'zepto' | 'swiggy' | 'zomato';
