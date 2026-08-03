import { Router } from 'express';
import {
  createPaymentHandler,
  getPaymentsByRoomHandler,
  getPaymentsByUserHandler,
  verifyPaymentHandler,
} from '../controllers/paymentController';

const router = Router();

router.post('/', createPaymentHandler);
router.get('/room/:roomId', getPaymentsByRoomHandler);
router.get('/user', getPaymentsByUserHandler);
router.put('/:participantId/verify', verifyPaymentHandler);

export default router;
