import { Response, NextFunction } from 'express';
import {
  createCollege,
  getAllColleges,
  getCollegeById,
  updateCollege,
  deleteCollege,
} from '../services/collegeService';

export const createCollegeHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, city } = req.body;
    const college = await createCollege(name, city);

    res.status(201).json({
      success: true,
      data: college,
      message: 'College created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create college',
    });
  }
};

export const getAllCollegesHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const colleges = await getAllColleges();

    res.status(200).json({
      success: true,
      data: colleges,
      message: 'Colleges fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch colleges',
    });
  }
};

export const getCollegeByIdHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const college = await getCollegeById(id);

    res.status(200).json({
      success: true,
      data: college,
      message: 'College fetched successfully',
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error instanceof Error ? error.message : 'College not found',
    });
  }
};

export const updateCollegeHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, city } = req.body;
    const college = await updateCollege(id, name, city);

    res.status(200).json({
      success: true,
      data: college,
      message: 'College updated successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update college',
    });
  }
};

export const deleteCollegeHandler = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const college = await deleteCollege(id);

    res.status(200).json({
      success: true,
      data: college,
      message: 'College deleted successfully',
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error instanceof Error ? error.message : 'College not found',
    });
  }
};
