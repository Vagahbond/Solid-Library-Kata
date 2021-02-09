import { IBorrowing } from "../models/borrowing";
import { IUser } from "../models/user";
import { IBook } from "../models/book";
export declare function borrowBook(borrowing: IBorrowing): Promise<void>;
export declare function booksHeldByUser(user: IUser): Promise<IBook[]>;
export declare function borrowingsForUser(user: IUser): Promise<IBorrowing[]>;
export declare function endBorrowing(borrowing: IBorrowing): Promise<void>;
