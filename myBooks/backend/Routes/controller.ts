import express, { NextFunction, Request, Response } from "express";
import logic from "../Logic/logic";
import { BookModel } from "../model/BookModel";

const router = express.Router();

router.get("/api/genres", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const genres = await logic.getAllGenres();
        response.status(200).json(genres);
    } catch (err) {
        next(err);
    }
})

router.get("/api/books", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const books = await logic.getAllBooks();
        response.status(200).json(books);
    } catch (err) {
        next(err);
    }
});

router.post("/api/books", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const book = new BookModel(request.body);
        const addedBook = await logic.addBook(book);
        response.status(201).json(addedBook);
    } catch (err) {
        next(err);
    }
});

router.delete("/api/books/:bookid", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.bookid;
        await logic.deleteBook(id);
        response.sendStatus(204);
    } catch (err) {
        next(err);
    }
});
export default router;
