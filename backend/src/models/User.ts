import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  collegeId: string;
  hostelId: string;
  avatar?: string;
  trustScore: number;
  ordersCreated: number;
  ordersJoined: number;
  moneySaved: number;
  password?: string;
  googleId?: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  collegeId: {
    type: Schema.Types.ObjectId,
    ref: 'College',
    required: true
  },
  hostelId: {
    type: Schema.Types.ObjectId,
    ref: 'Hostel',
    required: true
  },
  avatar: {
    type: String,
    default: null
  },
  trustScore: {
    type: Number,
    default: 5.0,
    min: 0,
    max: 5
  },
  ordersCreated: {
    type: Number,
    default: 0
  },
  ordersJoined: {
    type: Number,
    default: 0
  },
  moneySaved: {
    type: Number,
    default: 0
  },
  password: {
    type: String,
    select: false
  },
  googleId: {
    type: String,
    select: false
  }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);
