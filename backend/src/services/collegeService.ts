import College from '../models/College';

export const createCollege = async (name: string, city: string) => {
  const college = new College({ name, city });
  await college.save();
  return college;
};

export const getAllColleges = async () => {
  return College.find().sort({ name: 1 });
};

export const getCollegeById = async (collegeId: string) => {
  const college = await College.findById(collegeId);
  if (!college) {
    throw new Error('College not found');
  }
  return college;
};

export const updateCollege = async (collegeId: string, name: string, city: string) => {
  const college = await College.findByIdAndUpdate(
    collegeId,
    { name, city },
    { new: true, runValidators: true }
  );
  if (!college) {
    throw new Error('College not found');
  }
  return college;
};

export const deleteCollege = async (collegeId: string) => {
  const college = await College.findByIdAndDelete(collegeId);
  if (!college) {
    throw new Error('College not found');
  }
  return college;
};
