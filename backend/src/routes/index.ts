import { Router } from 'express';
import authRoutes from './auth';
import orderRoutes from './orders';
import collegesRoutes from './colleges';
import hostelsRoutes from './hostels';
import usersRoutes from './users';
import messagesRoutes from './messages';
import notificationsRoutes from './notifications';
import paymentsRoutes from './payments';

const router = Router();

router.use('/auth', authRoutes);
router.use('/orders', orderRoutes);
router.use('/colleges', collegesRoutes);
router.use('/hostels', hostelsRoutes);
router.use('/users', usersRoutes);
router.use('/messages', messagesRoutes);
router.use('/notifications', notificationsRoutes);
router.use('/payments', paymentsRoutes);

export default router;
