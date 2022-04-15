const newBook_Show = document.getElementById("newBook_Show");
let newBook_Toggle = false;

const newBook_Add = document.getElementById("newBook_Add");

function book (title, author, book_Pages, read) {
    this.title = title;
    this.author = author;
    this.book_Pages = book_Pages;
    this.read = read;
}

let library = [];

newBook_Show.addEventListener("click", () => {
    if (!newBook_Toggle) {
        document.getElementsByTagName("form")[0].style.display = "flex";
        newBook_Show.innerHTML = "Nah, hide it"
        newBook_Toggle = true;
    } else {
        document.getElementsByTagName("form")[0].style.display = "none";
        newBook_Show.innerHTML = "New book"
        newBook_Toggle = false;
    }
});

function addBookToLibrary() {
    let aBook = new book(document.getElementById("book_Title").value,
        document.getElementById("book_Author").value,
        document.getElementById("book_Pages").value,
        document.getElementById("book_Read").value
    );
    library.push(aBook);
}

newBook_Add.addEventListener("click", addBookToLibrary);

function createBookCard(){
   let bookCard = document.createElement("div");
   bookCard.style = "book_Card";
   
}