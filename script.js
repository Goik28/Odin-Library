const newBook_Show = document.getElementById("newBook_Show");
let newBook_Toggle = false;

const newBook_Add = document.getElementById("newBook_Add");

function book(title, author, book_Pages, read) {
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

function createBook() {
    let aBook = new book(document.getElementById("book_Title").value,
        document.getElementById("book_Author").value,
        document.getElementById("book_Pages").value,
        document.getElementById("book_Read").value
    );
    return aBook;
}

function addBookToLibrary() {
    let aBook = createBook();
    library.push(aBook);
    createBookCard();
}



newBook_Add.addEventListener("click", addBookToLibrary);

function cleanBookContainer(){
    let container = document.getElementsByClassName("book_Container")[0];
    container.innerHTML = document.getElementsByClassName("book_Card")[0];
}

function createBookCard() {
    library.forEach( (element, index) => {
        document.getElementById("index_Card").textContent = ""+index;
        document.getElementById("title_Card").textContent = element.title;
        document.getElementById("author_Card").textContent = element.author;
        document.getElementById("total_Pages_Card").textContent = element.book_Pages;
        document.getElementById("read_Card").textContent = element.read;
        let the_Book = document.getElementsByClassName("book_Card")[0].cloneNode(true);
        document.getElementsByClassName("book_Container")[0].appendChild(the_Book);
    });
}