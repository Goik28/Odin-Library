import { User } from "@firebase/auth";
import { useEffect, useState } from "react";
import { retrieveLibrary, saveLibrary } from "./components/actions";
import { BookContainer } from "./components/BookContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Book, Library } from "./components/interfaces";
import { TopContent } from "./components/TopContent";

function App() {
  const [signedUser, setSignedUser] = useState<User | null>(null);
  const [library, setLibrary] = useState<Library | null>(null);

  function addBook(book: Book) {
    if (library) {
      const newLibrary: Library = { books: library.books.concat(book) };
      setLibrary(newLibrary);
    } else {
      const newLibrary: Library = { books: [book] };
      setLibrary(newLibrary);
    }
  }

  function updateBookRead(index: number) {
    if (library) {
      const newLibrary = structuredClone(library);
      newLibrary.books[index].read = !newLibrary.books[index].read;
      setLibrary(newLibrary);
    }
  }

  function removeBook(index: number) {
    if (library) {
      const newLibrary = structuredClone(library);
      newLibrary.books.splice(index, 1);
      setLibrary(newLibrary);
    }
  }

  async function loadLibrary() {
    if (signedUser) {
      const retrievedLibrary = await retrieveLibrary(signedUser);
      if (retrievedLibrary) {
        setLibrary(retrievedLibrary);
      }
    }
    if (!signedUser && library) {
      setLibrary(null);
    }
  }

  async function writeLibrary() {
    if (signedUser && library) {
      const retrievedLibrary = await retrieveLibrary(signedUser);
      if (retrievedLibrary) {
        if (retrievedLibrary != library) {
          saveLibrary(signedUser, library);
        }
      } else {
        saveLibrary(signedUser, library);
      }
    }
  }

  useEffect(() => {
    loadLibrary();
  }, [signedUser]);

  useEffect(() => {
    writeLibrary();
  }, [library]);

  return (
    <main className="flex flex-col w-screen h-screen bg-neutral-800 text-neutral-200">
      <Header setSignedUser={setSignedUser} />
      <TopContent signedUser={signedUser} library={library} addBook={addBook} />
      <BookContainer
        library={library}
        updateBookRead={updateBookRead}
        removeBook={removeBook}
      />
      <Footer />
    </main>
  );
}

export default App;
