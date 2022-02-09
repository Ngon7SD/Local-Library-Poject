function findAuthorById(authors, id) {
  //use the .find() method to loop through "authors" array and find the matching ID
  const matchingAuthors = authors.find((author) => author.id === id);
  //return matchingAuthors when authors IDs matches.
  return matchingAuthors;
}
//=================================================================
function findBookById(books, id) {
  //use the .find() method to loop through and find the matching books IDs.
  const matchingBooks = books.find((book) => book.id === id);
  //return the books with matching IDs.
  return matchingBooks;
}
//=================================================================
function partitionBooksByBorrowedStatus(books) {
  //first use the .filter() method to loop through all the books.
  const booksBorrowed = books.filter((book) =>
    //then use the .some() method to loop through all the "borrows" array within "books"
    //if the borrowed book is not returned then it will add to the new array as True;
    //booksBorrowed will now have its own array of books that is not returned.
    book.borrows.some((borrow) => borrow.returned === false)
  );

  //filter through the books array.
  //using the .every() method here will see if every books is returned.
  //if all books is not returned then it will add to the new array as False
  const returnedBooks = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );

  //the final "booksArray" will use the spread operator to join two arrays
  const newBooksArray = [[...booksBorrowed], [...returnedBooks]];
  return newBooksArray;
}
//=================================================================
function getBorrowersForBook(book, accounts) {
  //return the book object and loop through the borrows array
  // the map method will loop through the borrows array of book object.
  return (
    book.borrows.map((borrow) => {
        //find method within the map method will loop through the accounts array.
        //find if there's any account.id === borrow.id
        let account = accounts.find((account) => account.id === borrow.id);
        //return "borrow" and "account" into a single array using spread operator.
        return { ...borrow, ...account };
      })
      //slice method return only up to index of 10 in the new array.
      .slice(0, 10)
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
