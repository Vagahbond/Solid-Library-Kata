
import { model, Schema, Document, Model } from './database'

export interface IBook {
  author: String
  title: String
  created_at: Date
}

export const BookSchema = new Schema({
  author: {
    type: String, 
    required: true, 
    unique: true
  },
  title: {
    type: String, 
    required: true, 
    unique: true
  },
  created_at: { 
    type: Date, 
    default: Date.now },
})

BookSchema.index({
  author: 1,
  title: 1,
}, {
  unique: true
})


export interface IBookDocument extends IBook, Document {}

export interface IBookModel extends Model<IBookDocument> {}

export const BookModel = model<IBook & Document>('book', BookSchema)