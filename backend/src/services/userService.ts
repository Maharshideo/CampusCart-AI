import User from '../models/User';

export const updateUserProfile = async (
  userId: string,
  name?: string,
  avatar?: string
) => {
  const updateData: any = {};
  if (name) updateData.name = name;
  if (avatar) updateData.avatar = avatar;

  const user = await User.findByIdAndUpdate(
    userId,
    updateData,
    { new: true, runValidators: true }
  );
  
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

export const getAllUsers = async (collegeId?: string, hostelId?: string) => {
  const query: any = {};
  if (collegeId) query.collegeId = collegeId;
  if (hostelId) query.hostelId = hostelId;

  const users = await User.find(query)
    .select('-password -googleId')
    .populate('collegeId', 'name city')
    .populate('hostelId', 'name')
    .sort({ name: 1 });

  return users;
};

export const getUserStats = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  return {
    ordersCreated: user.ordersCreated,
    ordersJoined: user.ordersJoined,
    moneySaved: user.moneySaved,
    trustScore: user.trustScore,
  };
};

export const updateTrustScore = async (userId: string, score: number) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { trustScore: score },
    { new: true, runValidators: true }
  );
  
  if (!user) {
    throw new Error('User not found');
  }

  return user.trustScore;
};
