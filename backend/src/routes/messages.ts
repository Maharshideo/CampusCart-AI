import { Router } from 'express';
import {
  createMessageHandler,
  getMessagesHandler,
  deleteMessageHandler,
} from '../controllers/messageController';

const router = Router();

router.post('/', createMessageHandler);
router.get('/:roomId', getMessagesHandler);
router.delete('/:messageId', deleteMessageHandler);

export default router;
