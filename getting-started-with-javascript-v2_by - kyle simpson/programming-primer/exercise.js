// TODO: define addFavoriteBook(..) function
var favoriteBooks = []

function addFavoriteBook(bookName) {
  if(!bookName.includes('Great')) {
    favoriteBooks.push(bookName)
  }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

console.log(favoriteBooks)

// TODO: define printFavoriteBooks() function

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  
  for (let book of favoriteBooks) {
    console.log(book);
  }
}

// TODO: print out favorite books

console.log(printFavoriteBooks())
