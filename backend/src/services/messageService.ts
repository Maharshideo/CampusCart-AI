import Message from '../models/Message';
import Room from '../models/Room';

export const createMessage = async (
  roomId: string,
  senderId: string,
  content: string
) => {
  const room = await Room.findById(roomId);
  if (!room) {
    throw new Error('Room not found');
  }

  const message = new Message({
    roomId,
    senderId,
    content,
  });

  await message.save();
  
  // Update room's last message timestamp
  room.updatedAt = new Date();
  await room.save();

  return message;
};

export const getMessagesByRoom = async (roomId: string, limit: number = 50) => {
  const messages = await Message.find({ roomId })
    .populate('senderId', 'name avatar')
    .sort({ createdAt: -1 })
    .limit(limit);

  return messages.reverse();
};

export const deleteMessage = async (messageId: string, userId: string) => {
  const message = await Message.findById(messageId);
  if (!message) {
    throw new Error('Message not found');
  }

  if (message.senderId.toString() !== userId) {
    throw new Error('Unauthorized to delete this message');
  }

  await Message.findByIdAndDelete(messageId);
  return message;
};
