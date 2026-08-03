import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import { registerUser, loginUser, getUserById } from '../services/authService';

export const register = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password, collegeId, hostelId } = req.body;

    const result = await registerUser(name, email, password, collegeId, hostelId);

    res.status(201).json({
      success: true,
      data: result,
      message: 'User registered successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Registration failed',
    });
  }
};

export const login = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);

    res.status(200).json({
      success: true,
      data: result,
      message: 'Login successful',
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error instanceof Error ? error.message : 'Login failed',
    });
  }
};

export const getMe = async (
  req: AuthRequest,
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

    const user = await getUserById(req.user.userId);

    res.status(200).json({
      success: true,
      data: user,
      message: 'User fetched successfully',
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error instanceof Error ? error.message : 'User not found',
    });
  }
};
