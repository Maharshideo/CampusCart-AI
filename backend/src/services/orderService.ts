import Order from '../models/Order';
import Match from '../models/Match';
import Room from '../models/Room';

const PLATFORM_THRESHOLDS: Record<string, number> = {
  blinkit: 400,
  instamart: 350,
  zepto: 299,
  swiggy: 249,
  zomato: 199,
};

export const createOrder = async (
  ownerId: string,
  platform: string,
  amount: number,
  hostelId: string,
  note?: string,
  orderWindow: number = 15
) => {
  const freeDeliveryTarget = PLATFORM_THRESHOLDS[platform] || 400;
  const expiresAt = new Date(Date.now() + orderWindow * 60 * 1000);

  const order = new Order({
    ownerId,
    platform,
    amount,
    hostelId,
    note,
    orderWindow,
    freeDeliveryTarget,
    expiresAt,
    status: 'open',
    participantCount: 1,
    totalAmount: amount,
  });

  await order.save();

  return order;
};

export const getActiveOrders = async (hostelId?: string) => {
  const query: any = { status: 'open', expiresAt: { $gt: new Date() } };
  if (hostelId) {
    query.hostelId = hostelId;
  }

  const orders = await Order.find(query)
    .populate('ownerId', 'name avatar')
    .populate('hostelId', 'name')
    .sort({ createdAt: -1 });

  return orders;
};

export const getOrderById = async (orderId: string) => {
  const order = await Order.findById(orderId)
    .populate('ownerId', 'name avatar')
    .populate('hostelId', 'name');

  if (!order) {
    throw new Error('Order not found');
  }

  return order;
};

export const findMatches = async (
  platform: string,
  hostelId: string,
  amount: number,
  timeWindow: number = 15
) => {
  const timeThreshold = new Date(Date.now() + timeWindow * 60 * 1000);
  
  const matchingOrders = await Order.find({
    platform,
    hostelId,
    status: 'open',
    expiresAt: { $lte: timeThreshold },
    amount: { $gte: amount - 100, $lte: amount + 100 },
  }).populate('ownerId', 'name avatar');

  const matches = matchingOrders.map((order) => {
    const score = calculateMatchScore(amount, order.amount);
    const reasons = generateMatchReasons(score, order.amount);
    
    const ownerId = order.ownerId as any;
    
    return {
      orderId: order._id.toString(),
      userId: ownerId._id ? ownerId._id.toString() : ownerId.toString(),
      score,
      reasons,
    };
  });

  return matches;
};

const calculateMatchScore = (userAmount: number, orderAmount: number): number => {
  const difference = Math.abs(userAmount - orderAmount);
  const maxDifference = 200;
  const score = Math.max(0, 100 - (difference / maxDifference) * 100);
  return Math.round(score);
};

const generateMatchReasons = (score: number, orderAmount: number): string[] => {
  const reasons: string[] = [];
  
  if (score > 80) {
    reasons.push('Similar order amount');
  }
  if (score > 60) {
    reasons.push('Good timing match');
  }
  if (score > 40) {
    reasons.push('Same platform');
  }
  
  return reasons;
};

export const createRoom = async (
  hostelId: string,
  platform: string,
  orderIds: string[]
) => {
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

  const room = new Room({
    hostelId,
    platform,
    orderIds,
    expiresAt,
    status: 'active',
  });

  await room.save();

  return room;
};
