// Task 1 Creating a Book Class

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // Book Title
        this.author = author; // Book Author
        this.isbn = isbn; // Book Isbn
        this.copies = copies; // how many copies a book has
    }
    getDetails() {
       return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}` 
    }; // Return Formatted Book Details

    updateCopies(quantity){
        this.copies += quantity
    }; // Update quantity of Book when it is borrowed or retruned
}; // Created Book Class

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // Added a new Book

console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1); // Reduce book copies by 1

console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2 Creating a Borrower Class

class Borrower {
    constructor(name, borrowerId) {
        this.name = name; // Borrower Name
        this.borrowerId = borrowerId; // Borrower ID
        this.borrowedBooks = []; // Array of Borrowed Books
    }

    borrowBook(book) {
        this.borrowedBooks.push(book); // Adding Books to the borrowed Books array
    }

    returnBook(book) {
     this.borrowedBooks = this.borrowedBooks.filter(b => b !== book); // Removing Book from borrowed Books array
    }
}; // Created Borrower Class

const borrower1 = new Borrower("Alice Johnson", 201); // Added a new Borrower
borrower1.borrowBook("The Great Gatsby"); // Borrower 1 borrowing Great Gatsby

console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby"); // Borrower 1 returning the Great Gatsby
console.log(borrower1.borrowedBooks.map(book => book.title)); // Expected Output []

// Task 3 Creating a Library Class

class Library {
    constructor() {
        this.books = []; // Array of Books
        this.borrowers = []; // Array of Borrowers
    }
    addBook(book) {
        this.books.push(book); // Adds books to the array of books
    }
    listBooks(){
        this.books.map(book => console.log(book.getDetails())); // Lists Book Details
    }
    // Task 4 Modifications

    addBorrower(borrower) {
        this.borrowers.push(borrower); // Adds a borrower to borrower array
    }

    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn); // Finds a book bases on its Isbn
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); // Finds Borrower bases on their Id
        if (book && borrower) {
        if (book.copies > 0) {
            book.updateCopies(-1); // Updated Book Copies Available
            borrower.borrowBook(book.title); // Borrows the book that is selected
        }
        else {
            console.log("No Copies of this book are available")
        }
    } else {
        console.log("Book Not Found")
        
    }
        }

        // Task 5 Modifications
        
        returnBook(borrowerId, isbn) {
            const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); // Finds a borrower based on their Id
            const book = this.books.find(book => book.isbn === isbn); // Finds a book based on its Isbn
            if (book) {
                book.updateCopies(1); // Updated Copies Availble for a book
                if (borrower){
                    borrower.returnBook(book.title); // Returns a book
                }
            }
        }
    

}; // Created Library Class

const library = new Library(); // Created a new Library Instance
library.addBook(book1); // Added book one to the library

library.listBooks(); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 4 Implementing Book Borrowing

library.addBorrower(borrower1)

library.lendBook(201, 123456); // Lends the specified book based on Isbn to borrower based on their Id

console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"

console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

// Task 5 Implementing Book Returns

library.returnBook(201, 123456); // Returns a book based on borrower Id and book Isbn

console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

console.log(borrower1.borrowedBooks); // Expected output: []

