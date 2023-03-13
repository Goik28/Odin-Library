import { BookCard } from "./BookCard";
import { Library } from "./interfaces";

export function BookContainer({
  library,
  updateBookRead,
  removeBook,
}: {
  library: Library | null;
  updateBookRead: (index: number) => void;
  removeBook: (index: number) => void;
}) {
  function populateLibrary() {
    if (library) {
      return library.books.map((book, index) => {
        function remove() {
          removeBook(index);
        }
        return (
          <li key={index}>
            <BookCard book={book} updateBookRead={updateBookRead} position={index}/>
            <button className="book_Remove" onClick={remove}>
              Remove
            </button>
          </li>
        );
      });
    }
  }

  return <ul className="book_Container">{populateLibrary()}</ul>;
}
