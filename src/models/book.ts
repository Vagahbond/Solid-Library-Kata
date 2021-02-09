import * as BookRepository from '../repositories/book.repository'

export interface IBook {
  title: String
  author: String
}

export async function createBook(author: String, title: String): Promise<IBook> {
  const book: IBook = {author, title}
  await BookRepository.insertBook(book)
  return book
}



export default{
  createBook,

}
