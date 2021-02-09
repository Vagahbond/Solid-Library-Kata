import * as BookRepository from '../repositories/book.repository'

export interface IBook {
  title: String
  author: String
}

export async function createBook(author: String, title: String): Promise<void> {
  await BookRepository.insertBook({author, title})
}



export default{
  createBook,

}
