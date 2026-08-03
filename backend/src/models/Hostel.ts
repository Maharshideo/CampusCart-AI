import mongoose, { Schema, Document } from 'mongoose';

export interface IHostel extends Document {
  collegeId: string;
  name: string;
}

const HostelSchema: Schema = new Schema({
  collegeId: {
    type: Schema.Types.ObjectId,
    ref: 'College',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model<IHostel>('Hostel', HostelSchema);
