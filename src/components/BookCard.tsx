import { useState } from "react";
import { Book } from "./interfaces";

export function BookCard({
  book,
  updateBookRead,
  position,
}: {
  book: Book;
  updateBookRead: (index: number) => void;
  position: number;
}) {
  const [read, setRead] = useState<boolean>(book.read);

  function updateRead(e: React.ChangeEvent<HTMLInputElement>) {
    setRead(e.target.checked);
    updateBookRead(position);
  }

  return (
    <div className="book_Card" id="card_Model">
      <div className="card_Content">
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Total Pages: {book.pages}</p>
      </div>
      <div className="book_Read">
        <label htmlFor="book_Read">Read</label>
        <input
          id="read_Card"
          type="checkbox"
          name="read"
          checked={read}
          onChange={updateRead}
        ></input>
      </div>      
    </div>
  );
}
