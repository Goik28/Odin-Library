import { UserCredential } from "@firebase/auth";
import { Book, Library } from "./interfaces";

export function TopContent({
  signedUser,
  library,
  addBook,
}: {
  signedUser: UserCredential | null;
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
  }

  function showPanel() {
    if (signedUser) {
      return (
        <div>
          <div>
            <p>
              Total books in your library:&nbsp;
              <span className="total_Books">
                {library ? library.length : "0"}
              </span>
            </p>
          </div>
          <form method="post" onSubmit={newBookHandler}>
            <div className="form_Item book_Title">
              <label htmlFor="book_Title">Title</label>
              <input
                id="book_Title"
                name="title"
                type="text"
                placeholder="Ex: Harry Potter"
                required
              ></input>
            </div>
            <div className="form_Item book_Author">
              <label htmlFor="book_Author">Author</label>
              <input
                id="book_Author"
                name="author"
                type="text"
                placeholder="Ex: J. K. Rowling"
                required
              ></input>
            </div>
            <div className="form_Item book_TotalPages">
              <label htmlFor="book_Pages">Total Pages</label>
              <input
                id="book_Pages"
                name="pages"
                type="number"
                placeholder="Ex: 350"
                min="1"
                required
              ></input>
            </div>
            <div className="form_Item book_Read">
              <label htmlFor="book_Read">Read</label>
              <input id="book_Read" name="read" type="checkbox"></input>
            </div>
            <button id="newBook_Add" type="submit">
              Add
            </button>
          </form>
        </div>
      );
    } else {
      return <div>Please, log in to have access to your library.</div>;
    }
  }

  return showPanel();
}
