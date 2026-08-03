import bcrypt from 'bcryptjs';
import User from '../models/User';
import { generateToken } from '../config/jwt';

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  collegeId: string,
  hostelId: string
) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    collegeId,
    hostelId,
  });

  await user.save();

  const token = generateToken({
    userId: user._id.toString(),
    email: user.email,
  });

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      collegeId: user.collegeId,
      hostelId: user.hostelId,
      avatar: user.avatar,
      trustScore: user.trustScore,
    },
    token,
  };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user || !user.password) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken({
    userId: user._id.toString(),
    email: user.email,
  });

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      collegeId: user.collegeId,
      hostelId: user.hostelId,
      avatar: user.avatar,
      trustScore: user.trustScore,
    },
    token,
  };
};

export const getUserById = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    collegeId: user.collegeId,
    hostelId: user.hostelId,
    avatar: user.avatar,
    trustScore: user.trustScore,
    ordersCreated: user.ordersCreated,
    ordersJoined: user.ordersJoined,
    moneySaved: user.moneySaved,
  };
};
