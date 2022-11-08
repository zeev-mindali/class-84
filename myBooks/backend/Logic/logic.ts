import { BookModel } from "../model/BookModel";
import dal from "../utils/dal_mysql";
import { OkPacket } from "mysql";

//import dal from "../utils/dal_mongoDB";

const getAllGenres = async () => {
    const sql = "SELECT * FROM genre";
    const genres = await dal.execute(sql);
    return genres;
}

const getAllBooks = async (): Promise<BookModel[]> => {
    const sql = `
        SELECT books.* , genre.name as genre
        FROM books JOIN genre
        ON books.genre = genre.id
    `;
    const books = await dal.execute(sql)
    return books;
}

const addBook = async (newBook: BookModel): Promise<BookModel> => {
    const sql = `
        INSERT INTO books
        Values (DEFAULT, '${newBook.name}','${newBook.summary}',${newBook.genre},${newBook.price},${newBook.qty})
    `
    const result: OkPacket = await dal.execute(sql);
    newBook.id = result.insertId; //insertId is the new ID from Auto Increment
    return newBook;
}

const deleteBook = async (id: number) => {
    const sql = `DELETE FROM books WHERE id=${id}`;
    const result: OkPacket = await dal.execute(sql);
}

export default {
    getAllGenres,
    getAllBooks,
    addBook,
    deleteBook
}