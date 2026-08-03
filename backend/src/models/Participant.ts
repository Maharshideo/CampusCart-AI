import mongoose, { Schema, Document } from 'mongoose';

export interface IParticipant extends Document {
  roomId: string;
  userId: string;
  amount: number;
  paymentStatus: 'pending' | 'paid' | 'failed';
  isPaid: boolean;
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ParticipantSchema: Schema = new Schema({
  roomId: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  paymentStatus: {
    type: String,
    required: true,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paidAt: {
    type: Date
  }
}, {
  timestamps: true
});

ParticipantSchema.index({ roomId: 1, userId: 1 }, { unique: true });

export default mongoose.model<IParticipant>('Participant', ParticipantSchema);
