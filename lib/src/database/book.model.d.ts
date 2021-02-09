import { Schema, Document, Model } from './database';
export interface IBook {
    author: String;
    title: String;
    created_at: Date;
}
export declare const BookSchema: Schema<Document<any>, Model<Document<any>>, undefined>;
export interface IBookDocument extends IBook, Document {
}
export interface IBookModel extends Model<IBookDocument> {
}
export declare const BookModel: Model<IBook & Document<any>>;
