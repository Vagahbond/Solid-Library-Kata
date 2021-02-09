import {IBook} from "../models/book";

import { BookModel } from '../database/book.model';


export async function findBook(author: string, title: String): Promise<IBook | null> {
  return await BookModel.findOne({ title, author })
}

export async function findBooksOfAutor(author: String): Promise<IBook[]> {
  return await BookModel.find({ author })
}

export async function insertBook(book: IBook): Promise<void> {
  await BookModel.create(book)
}


