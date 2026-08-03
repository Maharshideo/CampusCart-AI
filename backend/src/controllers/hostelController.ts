import { Response, NextFunction } from 'express';
import {
  createHostel,
  getAllHostels,
  getHostelById,
  updateHostel,
  deleteHostel,
} from '../services/hostelService';

export const createHostelHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { collegeId, name } = req.body;
    const hostel = await createHostel(collegeId, name);

    res.status(201).json({
      success: true,
      data: hostel,
      message: 'Hostel created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create hostel',
    });
  }
};

export const getAllHostelsHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { collegeId } = req.query;
    const hostels = await getAllHostels(collegeId as string);

    res.status(200).json({
      success: true,
      data: hostels,
      message: 'Hostels fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch hostels',
    });
  }
};

export const getHostelByIdHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const hostel = await getHostelById(id);

    res.status(200).json({
      success: true,
      data: hostel,
      message: 'Hostel fetched successfully',
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error instanceof Error ? error.message : 'Hostel not found',
    });
  }
};

export const updateHostelHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { collegeId, name } = req.body;
    const hostel = await updateHostel(id, collegeId, name);

    res.status(200).json({
      success: true,
      data: hostel,
      message: 'Hostel updated successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update hostel',
    });
  }
};

export const deleteHostelHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const hostel = await deleteHostel(id);

    res.status(200).json({
      success: true,
      data: hostel,
      message: 'Hostel deleted successfully',
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error instanceof Error ? error.message : 'Hostel not found',
    });
  }
};
