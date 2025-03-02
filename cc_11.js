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

