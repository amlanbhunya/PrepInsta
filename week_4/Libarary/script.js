// Array to hold the book list
const library = [];

// Function to add a book to the library
function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Check if all fields are filled
    if (!title || !author || !pages || !genre) {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    // Create a new book object
    const newBook = {
        title,
        author,
        pages: parseInt(pages),
        genre
    };

    // Add the book to the library array
    library.push(newBook);

    // Clear the input fields
    document.getElementById("book-form").reset();
    errorMessage.textContent = "";

    // Update the displayed book list
    displayBooks(library);
}

// Function to display books in the library
function displayBooks(books) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Clear the current list

    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>Title:</strong> ${book.title}, <strong>Author:</strong> ${book.author}, 
                        <strong>Pages:</strong> ${book.pages}, <strong>Genre:</strong> ${book.genre}`;
        bookList.appendChild(li);
    });
}

// Function to search for books by title
function searchBooks() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const noResultsMessage = document.getElementById("no-results-message");

    // Filter books based on the search input
    const filteredBooks = library.filter(book => book.title.toLowerCase().includes(searchInput));

    if (filteredBooks.length > 0) {
        noResultsMessage.textContent = "";
        displayBooks(filteredBooks);
    } else {
        noResultsMessage.textContent = "No books found with that title.";
        document.getElementById("book-list").innerHTML = "";
    }
}
