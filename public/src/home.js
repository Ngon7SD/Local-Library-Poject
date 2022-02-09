function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrow = 0;
  for (let i = 0; i < books.length; i++){
    const booksArray = books[i];
    for (let j = 0; j < booksArray.borrows.length; j++){
      if (booksArray.borrows[j].returned === false){
        booksBorrow ++;
      }
    }
  }
  return booksBorrow;
}

function _reducedByProp(arr, key){
  let newArr = arr.reduce((acc, prop) => {
    let keyExists = acc.find((item) => item.name === prop[key]);
    if (keyExists) {
      keyExists.count += 1;
    } else {
      let obj = {name: prop[key], count: 1};
      acc.push(obj);
    }
    return acc;
  }, []);
  return newArr;
}

function getMostCommonGenres(books) {
  let countArr = _reducedByProp(books, "genre");
  return countArr.sort((keyA, keyB) => keyB.count - keyA.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
      .sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
      .slice(0, 5)
      .map((book) => ({name: book.title, count: book.borrows.length}))
}

function getMostPopularAuthors(books, authors) {
  let mostPopularAuthors = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      if(book.authorId === author.id){
        mostPopularAuthors.push({
          'name': `${author.name.first} ${author.name.last}`,
          'count': book.borrows.length,
        });
      }
    });
  });
  return mostPopularAuthors.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
