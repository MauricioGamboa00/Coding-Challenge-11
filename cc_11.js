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

console.log(borrower1.borrowedBooks); // Expected output: []
