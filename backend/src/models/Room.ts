import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
  hostelId: string;
  platform: string;
  orderIds: string[];
  expiresAt: Date;
  status: 'active' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const RoomSchema: Schema = new Schema({
  hostelId: {
    type: Schema.Types.ObjectId,
    ref: 'Hostel',
    required: true
  },
  platform: {
    type: String,
    required: true,
    enum: ['blinkit', 'instamart', 'zepto', 'swiggy', 'zomato']
  },
  orderIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }],
  expiresAt: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'closed'],
    default: 'active'
  }
}, {
  timestamps: true
});

RoomSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model<IRoom>('Room', RoomSchema);
