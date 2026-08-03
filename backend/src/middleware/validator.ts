import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      error: errors.array()[0].msg
    });
    return;
  }
  
  next();
};

export const registerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('collegeId').notEmpty().withMessage('College ID is required'),
  body('hostelId').notEmpty().withMessage('Hostel ID is required'),
];

export const loginValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];

export const orderValidation = [
  body('platform').isIn(['blinkit', 'instamart', 'zepto', 'swiggy', 'zomato']).withMessage('Invalid platform'),
  body('amount').isNumeric().withMessage('Amount must be a number'),
  body('hostelId').notEmpty().withMessage('Hostel ID is required'),
  body('orderWindow').optional().isNumeric().withMessage('Order window must be a number'),
];
