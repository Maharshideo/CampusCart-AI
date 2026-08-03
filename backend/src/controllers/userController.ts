import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import {
  updateUserProfile,
  getAllUsers,
  getUserStats,
  updateTrustScore,
} from '../services/userService';

export const updateProfileHandler = async (
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

    const { name, avatar } = req.body;
    const user = await updateUserProfile(req.user.userId, name, avatar);

    res.status(200).json({
      success: true,
      data: user,
      message: 'Profile updated successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update profile',
    });
  }
};

export const getAllUsersHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { collegeId, hostelId } = req.query;
    const users = await getAllUsers(
      collegeId as string,
      hostelId as string
    );

    res.status(200).json({
      success: true,
      data: users,
      message: 'Users fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch users',
    });
  }
};

export const getUserStatsHandler = async (
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

    const stats = await getUserStats(req.user.userId);

    res.status(200).json({
      success: true,
      data: stats,
      message: 'User stats fetched successfully',
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error instanceof Error ? error.message : 'User not found',
    });
  }
};

export const updateTrustScoreHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = req.params;
    const { score } = req.body;

    const trustScore = await updateTrustScore(userId, score);

    res.status(200).json({
      success: true,
      data: { trustScore },
      message: 'Trust score updated successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update trust score',
    });
  }
};
