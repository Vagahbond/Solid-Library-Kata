import { IUser } from "../models/user";
export declare function findUser(user: IUser): Promise<IUser | null>;
export declare function insertUser(user: IUser): Promise<void>;
