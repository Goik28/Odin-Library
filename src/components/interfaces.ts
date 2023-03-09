export interface Library {
  owner: string;
  books: Array<Book>;
}

export interface Book {
  title: string;
  book_author: string;
  book_pages: number;
  book_read: boolean;
}
