import { Status } from '../models/user';
import { model, Schema, Document, Model } from './database'

export interface IBorrowing {
  issuer: Schema.Types.ObjectId
  book: Schema.Types.ObjectId
  startDate: Date
  endDate?: Date
  created_at: Date
}

export const BorrowingSchema = new Schema({
  issuer: { type: Schema.Types.ObjectId, ref: 'user' },
  book: { type: Schema.Types.ObjectId, ref: 'book' },
  startDate: Date,
  endDate: {
    type: Date,
    required: false
  },
  created_at: { 
    type: Date, 
    default: Date.now },
})

BorrowingSchema.index({
  autor: 1,
  title: 1,
}, {
  unique: true
})

export interface IBorrowingDocument extends IBorrowing, Document {}

export interface IBorrowingModel extends Model<IBorrowingDocument> {}

export const BorrowingModel = model<IBorrowing & Document>('borrowing', BorrowingSchema)
