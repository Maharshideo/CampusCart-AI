import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import {
  createPayment,
  getPaymentsByRoom,
  getPaymentsByUser,
  verifyPayment,
} from '../services/paymentService';

export const createPaymentHandler = async (
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

    const { roomId, amount } = req.body;
    const payment = await createPayment(roomId, req.user.userId, amount);

    res.status(201).json({
      success: true,
      data: payment,
      message: 'Payment created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create payment',
    });
  }
};

export const getPaymentsByRoomHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { roomId } = req.params;
    const payments = await getPaymentsByRoom(roomId);

    res.status(200).json({
      success: true,
      data: payments,
      message: 'Payments fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch payments',
    });
  }
};

export const getPaymentsByUserHandler = async (
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

    const payments = await getPaymentsByUser(req.user.userId);

    res.status(200).json({
      success: true,
      data: payments,
      message: 'User payments fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch payments',
    });
  }
};

export const verifyPaymentHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { participantId } = req.params;
    const payment = await verifyPayment(participantId);

    res.status(200).json({
      success: true,
      data: payment,
      message: 'Payment verified successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to verify payment',
    });
  }
};
