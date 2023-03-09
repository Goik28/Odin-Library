import { Book, Library } from "./interfaces";

export function TopContent({
  library,
  addBook,
}: {
  library: Library | null;
  addBook: (book:Book)=>void;
}) {

  return (
    <div>
      <div>
        <p>
          Total books in your library:&nbsp;
          <span className="total_Books">
            {library ? library.books.length : "0"}
          </span>
        </p>
      </div>
      <div className="book_ToAdd">
        <button id="newBook_Show">New book</button>
        <form>
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
              name="total_Pages"
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
    </div>
  );
}
