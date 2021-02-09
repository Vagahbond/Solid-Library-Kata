import { IUser } from "../models/user"

import { IUserDocument, IUserModel, UserModel  } from "../database/user.model"


export async function findUser(user: IUser): Promise<IUser | null> {
  const res: IUserDocument | null = await UserModel.findOne({username: user.username})

  if (!res) {
    return null
  }

  return { username: res.username, status: res.status }
}

export async function insertUser(user: IUser): Promise<void> {
  await UserModel.create(user)
}


