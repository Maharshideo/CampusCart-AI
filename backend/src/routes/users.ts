import { Router } from 'express';
import {
  updateProfileHandler,
  getAllUsersHandler,
  getUserStatsHandler,
  updateTrustScoreHandler,
} from '../controllers/userController';

const router = Router();

router.put('/profile', updateProfileHandler);
router.get('/', getAllUsersHandler);
router.get('/stats', getUserStatsHandler);
router.put('/:userId/trust-score', updateTrustScoreHandler);

export default router;
