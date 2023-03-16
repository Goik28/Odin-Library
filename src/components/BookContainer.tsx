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
          <li
            className="mt-2 pt-2 flex justify-between first:mt-1 border-t-2 border-neutral-700 md:first:mt-2 md:pl-2 md:pr-2 md:border-2"
            key={index}
          >
            <BookCard
              book={book}
              updateBookRead={updateBookRead}
              position={index}
            />
            <button
              className="p-4 ml-2 w-fit self-center border-neutral-100 border-2 hover:bg-neutral-100 hover:text-neutral-900"
              onClick={remove}
            >
              Remove
            </button>
          </li>
        );
      });
    }
  }

  if (library) {
    return (
      <ul className="ml-2 mr-2 flex-1 flex flex-col items-stretch overflow-auto md:min-w-fit md:max-w-4/6 md:grid md:justify-center md:content-start md:self-center md:gap-2 md:grid-cols-3 ">
        {populateLibrary()}
      </ul>
    );
  }else{
    return null
  }
}
