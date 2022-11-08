export class BookModel {
    public id: number;
    public name: string;
    public summary: string;
    public genre: number;
    public price: number;
    public qty: number;

    public constructor(book: BookModel) {
        this.id = book.id;
        this.name = book.name;
        this.summary = book.summary;
        this.genre = book.genre;
        this.price = book.price;
        this.qty = book.qty;
    }
}