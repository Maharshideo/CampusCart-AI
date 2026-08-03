import mongoose, { Schema, Document } from 'mongoose';

export interface ICollege extends Document {
  name: string;
  city: string;
}

const CollegeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model<ICollege>('College', CollegeSchema);
