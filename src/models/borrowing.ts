import { exception } from "console"
import { IBook } from "./book"

import * as BorrowingRepository from '../repositories/borrowing.repository'

import User, { IUser } from "./user"

export const MAX_BORROWINGS_PER_USER = 3


export interface IBorrowing {
  startDate: Date
  endDate?: Date
  issuer: IUser
  book: IBook
}



export async function createBorrowing(issuer: IUser, book: IBook): Promise<IBorrowing> {

  if (User.isGuest(issuer)) {
    throw exception("A guest should not be able to borrow a book.")
  }

  if ((await User.ongoingBorrowings(issuer)).length >= MAX_BORROWINGS_PER_USER) {
    throw exception("A user that has already borrowed 3 books cannot borrow more.")
  }

  const res : IBorrowing = { startDate: new Date, book: book, issuer: issuer }

  await BorrowingRepository.borrowBook(res)

  return res
}

export async function finish(borrowing: IBorrowing): Promise<void> {
  borrowing.endDate = new Date()
  await BorrowingRepository.endBorrowing(borrowing)
}

export function isFinished(borrowing: IBorrowing): Boolean {
  return borrowing.endDate === undefined
}


export default {
  createBorrowing,
  isFinished,
  finish
}
