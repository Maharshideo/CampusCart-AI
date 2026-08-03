import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import {
  createMessage,
  getMessagesByRoom,
  deleteMessage,
} from '../services/messageService';

export const createMessageHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        error: 'User not authenticated',
      });
      return;
    }

    const { roomId, content } = req.body;
    const message = await createMessage(roomId, req.user.userId, content);

    res.status(201).json({
      success: true,
      data: message,
      message: 'Message created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create message',
    });
  }
};

export const getMessagesHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { roomId } = req.params;
    const { limit } = req.query;
    const messages = await getMessagesByRoom(roomId as string, parseInt(limit as string) || 50);

    res.status(200).json({
      success: true,
      data: messages,
      message: 'Messages fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch messages',
    });
  }
};

export const deleteMessageHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        error: 'User not authenticated',
      });
      return;
    }

    const { messageId } = req.params;
    const message = await deleteMessage(messageId as string, req.user.userId);

    res.status(200).json({
      success: true,
      data: message,
      message: 'Message deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete message',
    });
  }
};
