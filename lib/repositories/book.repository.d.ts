import { IBook } from "../models/book";
export declare function findBook(book: IBook): Promise<IBook | null>;
export declare function findBooksOfAutor(author: String): Promise<IBook[]>;
export declare function insertBook(book: IBook): Promise<void>;
