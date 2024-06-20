// 1-line
class BookName {
    constructor(title, author, publisher, year, genre) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
    }
// 2-line
    describe() {
        console.log(`Hello, Book title is ${this.title} and This is ${this.author}. The book was released in ${this.year}.`);
    }
// 3-line
    displayGenre() {
        console.log(`Genre: ${this.genre}`);
    }
}
// 4-line
const newclassicBook = new BookName(
    'Happiness Begins at Home',
    'Kaneko Ikeda, Daisaku Ikeda',
    'Eternal Ganges Press Pvt. Ltd.',
    2019,
    'Ikeda'
);

console.log(newclassicBook);
// 5-line
const sciFiBook= new BookName(
    'Dune',
    'Frank Herbert',
    'Chilton Books',
    1965,
    'Science Fiction'
)
console.log(sciFiBook)
// 6-line
newclassicBook.describe();
// 7-line
newclassicBook.displayGenre();
