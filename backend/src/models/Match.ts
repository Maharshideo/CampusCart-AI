import mongoose, { Schema, Document } from 'mongoose';

export interface IMatch extends Document {
  orderId: string;
  userId: string;
  score: number;
  reasons: string[];
}

const MatchSchema: Schema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  reasons: [{
    type: String
  }]
}, {
  timestamps: true
});

MatchSchema.index({ orderId: 1, userId: 1 }, { unique: true });

export default mongoose.model<IMatch>('Match', MatchSchema);
