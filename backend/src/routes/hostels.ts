import { Router } from 'express';
import {
  createHostelHandler,
  getAllHostelsHandler,
  getHostelByIdHandler,
  updateHostelHandler,
  deleteHostelHandler,
} from '../controllers/hostelController';

const router = Router();

router.post('/', createHostelHandler);
router.get('/', getAllHostelsHandler);
router.get('/:id', getHostelByIdHandler);
router.put('/:id', updateHostelHandler);
router.delete('/:id', deleteHostelHandler);

export default router;
