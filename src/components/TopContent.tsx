import { User } from "@firebase/auth";
import { Book, Library } from "./interfaces";

export function TopContent({
  signedUser,
  library,
  addBook,
}: {
  signedUser: User | null;
  library: Library | null;
  addBook: (book: Book) => void;
}) {
  function newBookHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newBook: Book = {
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      pages: Number.parseInt(formData.get("pages") as string),
      read: formData.get("read") ? true : false,
    };
    addBook(newBook);
    e.currentTarget.reset();
  }

  if (signedUser) {
    return (
      <div className="m-1 flex flex-col items-center">
        <p className="text-lg">
          Total books in your library:&nbsp;
          {library ? library.books.length : "0"}
        </p>
        <form
          className="mt-1 p-2 flex flex-col border-2 border-neutral-100"
          method="post"
          onSubmit={newBookHandler}
        >
          <div className="flex">
            <label htmlFor="book_Title">Title:</label>
            <input
              className="ml-2 pl-1 flex-1 bg-neutral-700"
              id="book_Title"
              name="title"
              type="text"
              placeholder="Ex: Harry Potter"
              required
            ></input>
          </div>
          <div className="flex mt-2">
            <label htmlFor="book_Author">Author:</label>
            <input
              className="ml-2 pl-1 flex-1 bg-neutral-700"
              id="book_Author"
              name="author"
              type="text"
              placeholder="Ex: J. K. Rowling"
              required
            ></input>
          </div>
          <div className="flex mt-2">
            <label htmlFor="book_Pages">Total Pages:</label>
            <input
              className="ml-2 pl-1 flex-1 bg-neutral-700"
              id="book_Pages"
              name="pages"
              type="number"
              placeholder="Ex: 350"
              min="1"
              required
            ></input>
          </div>
          <div className="flex mt-2">
            <label htmlFor="book_Read">Read:</label>
            <input
              className="ml-2 pl-1 flex-1 bg-neutral-700"
              id="book_Read"
              name="read"
              type="checkbox"
            ></input>
          </div>
          <button
            className="mt-2 pl-6 pr-6 w-fit self-center border-neutral-100 border-2 p-1 rounded-full hover:bg-neutral-100 hover:text-neutral-900"
            type="submit"
          >
            Add new book
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="text-3xl text-center m-auto">
        Please, log in to have access to your library.
      </div>
    );
  }
}
