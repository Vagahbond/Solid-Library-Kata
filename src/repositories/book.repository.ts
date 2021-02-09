import {IBook} from "../models/book";

import { BookModel } from '../database/book.model';


export async function findBook(book: IBook): Promise<IBook | null> {
  return await BookModel.findOne({ title: book.title, author: book.author })
}

export async function findBooksOfAutor(author: String): Promise<IBook[]> {
  return await BookModel.find({ author })
}

export async function insertBook(book: IBook): Promise<void> {
  await BookModel.create(book)
}


