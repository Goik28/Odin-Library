export type Library= Array<Book>;

export interface Book {
  title: string;
  author: string;
  pages: number;
  read: boolean;
}
