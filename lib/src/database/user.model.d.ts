import { Status } from '../models/user';
import { Schema, Document, Model } from './database';
export interface IUser {
    username: String;
    status: Status;
    created_at: Date;
}
export declare const UserSchema: Schema<Document<any>, Model<Document<any>>, undefined>;
export interface IUserDocument extends IUser, Document {
}
export interface IUserModel extends Model<IUserDocument> {
}
export declare const UserModel: Model<IUser & Document<any>>;
