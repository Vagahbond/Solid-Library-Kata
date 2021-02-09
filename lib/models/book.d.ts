export interface IBook {
    title: String;
    author: String;
}
export declare function createBook(author: String, title: String): Promise<IBook>;
declare const _default: {
    createBook: typeof createBook;
};
export default _default;
