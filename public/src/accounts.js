function findAccountById(accounts, id) {
  //to find the accounts with matching ID use the .find() method.
  //if the account id matches with the given id, return the matchingId
  let matchingId = accounts.find((account) => account.id === id);
  return matchingId;
}

function sortAccountsByLastName(accounts) {
  //using the .sort() method
  let sortedAccounts = accounts.sort((accountA, accountB) => 
  // this will sort the last name in alphabetical order.
  (accountA.name.last < accountB.name.last ? -1 : 1));
  return sortedAccounts; 
}

function getTotalNumberOfBorrows(account, books) {
  //create a variable of total borrow books that matches with the account id.
  //when matched it will add to the numberBorrows variable. 
  let totalBorrowBooks = 0;
  for (let i = 0; i < books.length; i++){
    //loop through books array
    for (let j = 0; j < books[i].borrows.length; j++){
      //second loop through the borrows array to get to id.
      //if the account id macthes with the books id then add 1 to totalBorrowBooks
      if (account.id === books[i].borrows[j].id){
        totalBorrowBooks ++;
      }
    }
  }
  return totalBorrowBooks;
}


function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const authorAdded = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.id) {
        authorAdded.push({...book, author});
      }
    });
  });
  authorAdded.filter((acct) => {
    if (acct.borrows[0].id === account.id && !acct.borrows[0].returned) {
      result.push(acct);
    }
  });
  return result;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
