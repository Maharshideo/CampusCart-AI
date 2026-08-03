import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  ownerId: string;
  platform: string;
  amount: number;
  hostelId: string;
  note?: string;
  orderWindow: number;
  status: 'open' | 'matching' | 'confirmed' | 'delivered' | 'cancelled';
  participantCount: number;
  totalAmount: number;
  freeDeliveryTarget: number;
  expiresAt: Date;
}

const OrderSchema: Schema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  platform: {
    type: String,
    required: true,
    enum: ['blinkit', 'instamart', 'zepto', 'swiggy', 'zomato']
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  hostelId: {
    type: Schema.Types.ObjectId,
    ref: 'Hostel',
    required: true
  },
  note: {
    type: String,
    trim: true
  },
  orderWindow: {
    type: Number,
    required: true,
    default: 15
  },
  status: {
    type: String,
    required: true,
    enum: ['open', 'matching', 'confirmed', 'delivered', 'cancelled'],
    default: 'open'
  },
  participantCount: {
    type: Number,
    default: 0
  },
  totalAmount: {
    type: Number,
    default: 0
  },
  freeDeliveryTarget: {
    type: Number,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

OrderSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
OrderSchema.index({ platform: 1, hostelId: 1, status: 1 });

export default mongoose.model<IOrder>('Order', OrderSchema);
