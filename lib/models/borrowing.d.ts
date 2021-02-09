import { IBook } from "./book";
import { IUser } from "./user";
export declare const MAX_BORROWINGS_PER_USER = 3;
export interface IBorrowing {
    startDate: Date;
    endDate?: Date;
    issuer: IUser;
    book: IBook;
}
export declare function createBorrowing(issuer: IUser, book: IBook): Promise<IBorrowing>;
export declare function finish(borrowing: IBorrowing): Promise<void>;
export declare function isFinished(borrowing: IBorrowing): Boolean;
declare const _default: {
    createBorrowing: typeof createBorrowing;
    isFinished: typeof isFinished;
    finish: typeof finish;
};
export default _default;
