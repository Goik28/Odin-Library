const newBook_Show = document.getElementById("newBook_Show");
let newBook_Toggle = false;

const newBook_Add = document.getElementById("newBook_Add");

const totalBooks = document.getElementsByClassName("total_Books")[0];

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
        document.getElementById("book_Read").checked
    );
    return aBook;
}

function cleanBookContainer() {
    let container = document.getElementsByClassName("book_Container")[0];
    const model = document.getElementById("card_Model").cloneNode(true);
    container.innerHTML = "";
    container.appendChild(model);
}

function createBookCards() {
    library.forEach((element, index) => {
        document.getElementById("index_Card").textContent = "" + (index + 1);
        document.getElementById("title_Card").textContent = element.title;
        document.getElementById("author_Card").textContent = element.author;
        document.getElementById("total_Pages_Card").textContent = element.book_Pages;
        document.getElementById("read_Card").checked = element.read;
        let the_Book = document.getElementsByClassName("book_Card")[0].cloneNode(true);
        the_Book.id = "card_"+index;
        the_Book.lastChild.addEventListener("click", findBookToBeRemoved);
        document.getElementsByClassName("book_Container")[0].appendChild(the_Book);
    });
}

function updateTotalBooks() {
    totalBooks.textContent = " " + library.length;
}

function addBookToLibrary() {
    let aBook = createBook();
    library.push(aBook);
    cleanBookContainer();
    createBookCards();
    updateTotalBooks();
}

newBook_Add.addEventListener("click", addBookToLibrary);

const removeButton = document.getElementById("book_Remove");

function findBookToBeRemoved (event){
    const bookToBeRemoved = event.target.parentNode.id;
    removeBookFromLibrary(bookToBeRemoved.substr(5));
}

function removeBookFromLibrary (index){
    library.splice(index,1);
    cleanBookContainer();
    createBookCards();
    updateTotalBooks();
}