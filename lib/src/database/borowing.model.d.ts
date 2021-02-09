import { Schema, Document, Model } from './database';
export interface IBorrowing {
    issuer: Schema.Types.ObjectId;
    book: Schema.Types.ObjectId;
    startDate: Date;
    endDate?: Date;
    created_at: Date;
}
export declare const BorrowingSchema: Schema<Document<any>, Model<Document<any>>, undefined>;
export interface IBorrowingDocument extends IBorrowing, Document {
}
export interface IBorrowingModel extends Model<IBorrowingDocument> {
}
export declare const BorrowingModel: Model<IBorrowing & Document<any>>;
