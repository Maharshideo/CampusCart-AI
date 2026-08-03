import Notification from '../models/Notification';

export const createNotification = async (
  userId: string,
  title: string,
  body: string
) => {
  const notification = new Notification({
    userId,
    title,
    body,
    read: false,
  });

  await notification.save();
  return notification;
};

export const getUserNotifications = async (userId: string, unreadOnly: boolean = false) => {
  const query: any = { userId };
  if (unreadOnly) {
    query.read = false;
  }

  const notifications = await Notification.find(query)
    .sort({ createdAt: -1 })
    .limit(50);

  return notifications;
};

export const markAsRead = async (notificationId: string, userId: string) => {
  const notification = await Notification.findOneAndUpdate(
    { _id: notificationId, userId },
    { read: true },
    { new: true }
  );

  if (!notification) {
    throw new Error('Notification not found');
  }

  return notification;
};

export const markAllAsRead = async (userId: string) => {
  const result = await Notification.updateMany(
    { userId, read: false },
    { read: true }
  );

  return { modifiedCount: result.modifiedCount };
};

export const deleteNotification = async (notificationId: string, userId: string) => {
  const notification = await Notification.findOneAndDelete({
    _id: notificationId,
    userId,
  });

  if (!notification) {
    throw new Error('Notification not found');
  }

  return notification;
};
