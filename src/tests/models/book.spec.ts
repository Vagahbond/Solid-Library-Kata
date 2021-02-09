import { describe } from 'mocha'
import Book, { IBook } from "../../models/book";
import * as BookRepository from "../../repositories/book.repository"

var assert = require('assert');
describe('book', function() {

  describe('createBook', function() {
    function assertNotNull<T>(v: T | null): T {
      if (!v) throw new Error();
  
      return v;
    }

    it('Should create a book with given parameters', async function() {

      const book: IBook = await Book.createBook('author', "title")

      assert.equal(book.author, "author");
      assert.equal(book.title, "title");
    });

    it('Should save the book in database', async function() {

      const localBook : IBook = await Book.createBook('author', "title")

      const book: IBook | null = await BookRepository.findBook(localBook)

      assertNotNull(book)

      assert.equal(book?.author, "author");
    });

  });




});

