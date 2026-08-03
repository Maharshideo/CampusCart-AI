import { Router } from 'express';
import {
  createNotificationHandler,
  getNotificationsHandler,
  markAsReadHandler,
  markAllAsReadHandler,
  deleteNotificationHandler,
} from '../controllers/notificationController';

const router = Router();

router.post('/', createNotificationHandler);
router.get('/', getNotificationsHandler);
router.put('/:notificationId/read', markAsReadHandler);
router.put('/read-all', markAllAsReadHandler);
router.delete('/:notificationId', deleteNotificationHandler);

export default router;
