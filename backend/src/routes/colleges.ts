import { Router } from 'express';
import {
  createCollegeHandler,
  getAllCollegesHandler,
  getCollegeByIdHandler,
  updateCollegeHandler,
  deleteCollegeHandler,
} from '../controllers/collegeController';

const router = Router();

router.post('/', createCollegeHandler);
router.get('/', getAllCollegesHandler);
router.get('/:id', getCollegeByIdHandler);
router.put('/:id', updateCollegeHandler);
router.delete('/:id', deleteCollegeHandler);

export default router;
