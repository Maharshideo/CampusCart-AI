import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import {
  createNotification,
  getUserNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} from '../services/notificationService';

export const createNotificationHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId, title, body } = req.body;
    const notification = await createNotification(userId, title, body);

    res.status(201).json({
      success: true,
      data: notification,
      message: 'Notification created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create notification',
    });
  }
};

export const getNotificationsHandler = async (
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

    const { unreadOnly } = req.query;
    const notifications = await getUserNotifications(
      req.user.userId,
      unreadOnly === 'true'
    );

    res.status(200).json({
      success: true,
      data: notifications,
      message: 'Notifications fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch notifications',
    });
  }
};

export const markAsReadHandler = async (
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

    const { notificationId } = req.params;
    const notification = await markAsRead(notificationId as string, req.user.userId);

    res.status(200).json({
      success: true,
      data: notification,
      message: 'Notification marked as read',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to mark notification as read',
    });
  }
};

export const markAllAsReadHandler = async (
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

    const result = await markAllAsRead(req.user.userId);

    res.status(200).json({
      success: true,
      data: result,
      message: 'All notifications marked as read',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to mark all notifications as read',
    });
  }
};

export const deleteNotificationHandler = async (
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

    const { notificationId } = req.params;
    const notification = await deleteNotification(notificationId as string, req.user.userId);

    res.status(200).json({
      success: true,
      data: notification,
      message: 'Notification deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete notification',
    });
  }
};
