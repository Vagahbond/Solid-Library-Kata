import { IBorrowing } from './borrowing';
export declare enum Status {
    User = "USER",
    Admin = "ADMIN",
    Guest = "GUEST"
}
export interface IUser {
    username: String;
    status: Status;
}
declare function createUser(username: String, status: Status): IUser;
declare function ongoingBorrowings(user: IUser): Promise<IBorrowing[]>;
declare function isGuest(user: IUser): boolean;
declare const _default: {
    createUser: typeof createUser;
    ongoingBorrowings: typeof ongoingBorrowings;
    isGuest: typeof isGuest;
};
export default _default;
