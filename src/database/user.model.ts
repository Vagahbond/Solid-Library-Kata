import { Status } from '../models/user'
import { model, Schema, Document, Model } from './database'

export interface IUser {
  username: String
  status: Status
  created_at: Date
}

export const UserSchema = new Schema({
  username: {
    type: String, 
    required: true, 
    unique: true
  },
  status: Status,
  created_at: { type: Date, default: Date.now },
})

// UserSchema.statics.findOne = findOne;


export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument> {}

export const UserModel = model<IUser & Document>('user', UserSchema)
