import Hostel from '../models/Hostel';
import College from '../models/College';

export const createHostel = async (collegeId: string, name: string) => {
  const college = await College.findById(collegeId);
  if (!college) {
    throw new Error('College not found');
  }

  const hostel = new Hostel({ collegeId, name });
  await hostel.save();
  return hostel;
};

export const getAllHostels = async (collegeId?: string) => {
  const query: any = {};
  if (collegeId) {
    query.collegeId = collegeId;
  }
  return Hostel.find(query).populate('collegeId', 'name city').sort({ name: 1 });
};

export const getHostelById = async (hostelId: string) => {
  const hostel = await Hostel.findById(hostelId).populate('collegeId', 'name city');
  if (!hostel) {
    throw new Error('Hostel not found');
  }
  return hostel;
};

export const updateHostel = async (hostelId: string, collegeId: string, name: string) => {
  if (collegeId) {
    const college = await College.findById(collegeId);
    if (!college) {
      throw new Error('College not found');
    }
  }

  const hostel = await Hostel.findByIdAndUpdate(
    hostelId,
    collegeId ? { collegeId, name } : { name },
    { new: true, runValidators: true }
  );
  if (!hostel) {
    throw new Error('Hostel not found');
  }
  return hostel;
};

export const deleteHostel = async (hostelId: string) => {
  const hostel = await Hostel.findByIdAndDelete(hostelId);
  if (!hostel) {
    throw new Error('Hostel not found');
  }
  return hostel;
};
