import { Router } from 'express';
import {
  createOrderHandler,
  getActiveOrdersHandler,
  getOrderByIdHandler,
  findMatchesHandler,
  createRoomHandler,
} from '../controllers/orderController';
import { authenticate } from '../middleware/auth';
import { orderValidation, validateRequest } from '../middleware/validator';

const router = Router();

router.post('/', authenticate, orderValidation, validateRequest, createOrderHandler);
router.get('/', authenticate, getActiveOrdersHandler);
router.get('/:id', authenticate, getOrderByIdHandler);
router.post('/matches', authenticate, findMatchesHandler);
router.post('/rooms', authenticate, createRoomHandler);

export default router;
