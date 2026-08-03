import Participant from '../models/Participant';
import Order from '../models/Order';
import User from '../models/User';

export const createPayment = async (
  roomId: string,
  userId: string,
  amount: number
) => {
  const participant = await Participant.findOne({ roomId, userId });
  if (!participant) {
    throw new Error('Participant not found');
  }

  participant.amount = amount;
  participant.isPaid = true;
  participant.paidAt = new Date();
  await participant.save();

  // Update user stats
  await User.findByIdAndUpdate(userId, {
    $inc: { moneySaved: amount * 0.1 },
  });

  return participant;
};

export const getPaymentsByRoom = async (roomId: string) => {
  const participants = await Participant.find({ roomId })
    .populate('userId', 'name avatar')
    .sort({ createdAt: 1 });

  return participants;
};

export const getPaymentsByUser = async (userId: string) => {
  const participants = await Participant.find({ userId })
    .populate('roomId')
    .sort({ createdAt: -1 });

  return participants;
};

export const verifyPayment = async (participantId: string) => {
  const participant = await Participant.findByIdAndUpdate(
    participantId,
    { isPaid: true, paidAt: new Date() },
    { new: true }
  );

  if (!participant) {
    throw new Error('Participant not found');
  }

  return participant;
};
