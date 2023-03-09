import { User, UserCredential } from "@firebase/auth";
import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Book, Library } from "./components/interfaces";
import { TopContent } from "./components/TopContent";




function App() {
  const [signedUser, setSignedUser] = useState<UserCredential | null>(null);
  const [library, setLibrary] = useState<Library | null>(null);

  function addBook(book: Book|null){
    if (library){
      if (book) {
        library.books.push(book)  
      }      
    }
  }

  return (
    <main>
      <Header setSignedUser={setSignedUser} />
      <TopContent library={library} addBook={addBook} />
      
      <div className="book_Container">
        <div className="book_Card" id="card_Model">
          <div className="card_Content">
            <p>Id:</p>
            <p className="addedBook_info" id="index_Card">
              0
            </p>
          </div>
          <div className="card_Content book_Title">
            <p>Title:</p>
            <p className="addedBook_info" id="title_Card">
              Title
            </p>
          </div>
          <div className="card_Content book_Author">
            <p>Author:</p>
            <p className="addedBook_info" id="author_Card">
              Author
            </p>
          </div>
          <div className="card_Content book_TotalPages">
            <p>Total Pages:</p>
            <p className="addedBook_info" id="total_Pages_Card">
              000
            </p>
          </div>
          <div className="card_Content book_Read">
            <p>Read</p>
            <input
              className="addedBook_info"
              id="read_Card"
              type="checkbox"
              name="read"
            ></input>
          </div>
          <button className="book_Remove addedBook_info">Remove</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
