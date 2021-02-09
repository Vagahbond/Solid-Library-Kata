import * as UserRepository from '../repositories/user.repository'
import * as BookRepository from '../repositories/book.repository'
import * as BorrowingRepository from '../repositories/borrowing.repository'

import { MAX_BORROWINGS_PER_USER } from './borrowing'
import { IBorrowing } from './borrowing'


export enum Status {
  User = "USER",
  Admin = "ADMIN",
  Guest = "GUEST",
}

export interface IUser {
  username: String
  status: Status
}


function createUser(username: String, status: Status) {
  const user: IUser = { username, status }

  UserRepository.insertUser(user)

  return user
}

async function ongoingBorrowings(user: IUser): Promise<IBorrowing[]> {
  const borrowings: IBorrowing[] = (await BorrowingRepository.borrowingsForUser(user)).filter(borrow => !borrow.endDate)

  return borrowings
}

async function canBorrow(user: IUser): Promise<Boolean> {
  return user.status != Status.Guest && (await ongoingBorrowings(user)).length < MAX_BORROWINGS_PER_USER
}

function isGuest(user: IUser) {
  return user.status === Status.Guest
}


export default {
  createUser,
  ongoingBorrowings,
  isGuest,
}



