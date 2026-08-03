import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import {
  createOrder,
  getActiveOrders,
  getOrderById,
  findMatches,
  createRoom,
} from '../services/orderService';

export const createOrderHandler = async (
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

    const { platform, amount, hostelId, note, orderWindow } = req.body;

    const order = await createOrder(
      req.user.userId,
      platform,
      amount,
      hostelId,
      note,
      orderWindow
    );

    res.status(201).json({
      success: true,
      data: order,
      message: 'Order created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create order',
    });
  }
};

export const getActiveOrdersHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { hostelId } = req.query;

    const orders = await getActiveOrders(hostelId as string);

    res.status(200).json({
      success: true,
      data: orders,
      message: 'Active orders fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch orders',
    });
  }
};

export const getOrderByIdHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const order = await getOrderById(id as string);

    res.status(200).json({
      success: true,
      data: order,
      message: 'Order fetched successfully',
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error instanceof Error ? error.message : 'Order not found',
    });
  }
};

export const findMatchesHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { platform, hostelId, amount, timeWindow } = req.body;

    const matches = await findMatches(
      platform,
      hostelId,
      amount,
      timeWindow
    );

    res.status(200).json({
      success: true,
      data: { matches },
      message: 'Matches found successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to find matches',
    });
  }
};

export const createRoomHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { hostelId, platform, orderIds } = req.body;

    const room = await createRoom(hostelId, platform, orderIds);

    res.status(201).json({
      success: true,
      data: room,
      message: 'Room created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create room',
    });
  }
};
