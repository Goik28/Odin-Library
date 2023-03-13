export type Library = { books: Book[] };

export interface Book {
  title: string;
  author: string;
  pages: number;
  read: boolean;
}
