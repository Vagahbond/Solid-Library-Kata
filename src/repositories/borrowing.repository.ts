import { IBorrowing } from "../models/borrowing"
import { IUser } from "../models/user"
import { IBook } from "../models/book"
import * as UserRepository from '../repositories/user.repository'

import { BorrowingModel, BorrowingSchema, IBorrowingDocument } from "../database/borowing.model"
import { UserModel, UserSchema, IUserDocument } from "../database/user.model"
import { BookModel, BookSchema, IBookDocument } from "../database/book.model"

import { notEmpty } from '../utils/utils'
import { title } from "process"
import { exception } from "console"




export async function borrowBook(borrowing: IBorrowing): Promise<void> {
  await BorrowingModel.create(borrowing)
}

export async function booksHeldByUser(user: IUser): Promise<IBook[]> {
  const fetchedUser: IUserDocument | null = await UserModel.findOne({ username: user.username })

  if (!fetchedUser) {
    return []
  }

  const borrowings: IBorrowingDocument[] = await BorrowingModel.find({ issuer: fetchedUser.id })

  const bookDocuments: IBook[] = []

  borrowings.forEach(async borrowing => {
    const document: IBookDocument | null = await BookModel.findById(borrowing.book)
    if (document) {
      bookDocuments.push({title: document.title, author: document.author})
    }
    
  })

  return bookDocuments

}

export async function borrowingsForUser(user: IUser): Promise<IBorrowing[]> {
  const userDocument: IUserDocument | null = await UserModel.findOne({username: user.username})

  if (!userDocument) {
    return []
  }

  const borrowingDocuments: IBorrowingDocument[] = await BorrowingModel.find({issuer: userDocument.id})

  const borrowings: IBorrowing[] = []

  await borrowingDocuments.forEach(async borrowing => {
    const issuer: IUserDocument | null = await UserModel.findById(borrowing.issuer)
    const book: IBookDocument | null = await BookModel.findById(borrowing.book)

    if (issuer && book) {
      borrowings.push({
        book,
        issuer,
        startDate: borrowing.startDate,
        endDate: borrowing.endDate
      })
    }

  })

  return borrowings
}

export async function endBorrowing(borrowing: IBorrowing): Promise<void> {
  const userDocument: IUserDocument | null = await UserModel.findOne({username: borrowing.issuer.username})
  const bookDocument: IBookDocument | null = await BookModel.findOne({author: borrowing.book.author, title: borrowing.book.title})

  if (!userDocument || !bookDocument) {
    throw exception("trying to update a borrowing that does not exist")
  }

  BorrowingModel.findOneAndUpdate({ book: bookDocument.id, issuer: userDocument.id}, { endDate: borrowing.endDate })

}


