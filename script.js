/* eslint max-classes-per-file: ["error", 2] */
const container = document.querySelector('.contain');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Store {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    localStorage.setItem('books', JSON.stringify(this.books));
    container.innerHTML = '';
  }

  display() {
    const div = document.createElement('div');
    div.classList.add('book-list');
    div.innerHTML = '';
    container.innerHTML = this.books.reduce((output, book, i) => (
      `${output
      }
            <div class="book-list book-${i % 2 === 0 ? 'odd' : ''}">
            <div>
            <span>"${book.title}"</span>
            <span>by</span>
            <span>${book.author}</span>
            </div>
            <button class="button">remove</button>
            </div>             
          `
    ), '');

    const button = document.querySelectorAll('.button');
    button.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.removeBook(this.books[index]);
        this.display();
      });
    });
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    document.querySelector('.msg').classList.remove('message');
    setTimeout(() => {
      document.querySelector('.msg').classList.add('message');
    }, 1500);
    this.display();
  }
}

const bookName = document.querySelector('.book');
const authorName = document.querySelector('.author');
const add = document.querySelector('.add');
const store = new Store();

add.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(bookName.value, authorName.value);
  store.addBook(newBook);
  bookName.value = '';
  authorName.value = '';
});

window.onload = () => {
  store.display();
  const date = new Date();
  document.querySelector('.date').innerHTML = date;
};

const bookList = document.querySelector('.list-section');
const addNewBook = document.querySelector('.main-container');
const contact = document.querySelector('.contact-contain');
const lists = document.querySelector('.list');
const addnew = document.querySelector('.add-new');
const contactus = document.querySelector('.contact');

function getPageContent(link) {
  switch (link) {
    case '.list':

      if (bookList.matches('.hidden') && !addNewBook.matches('.hidden') && contact.matches('.hidden')) {
        bookList.classList.remove('hidden');
        addNewBook.classList.add('hidden');
      } else if (bookList.matches('.hidden') && addNewBook.matches('.hidden') && !contact.matches('.hidden')) {
        contact.classList.add('hidden');
        bookList.classList.remove('hidden');
      }

      lists.classList.add('active');
      addnew.classList.remove('active');
      contactus.classList.remove('active');
      break;
    case '.add-new':
      if (!bookList.matches('.hidden') && addNewBook.matches('.hidden') && contact.matches('.hidden')) {
        bookList.classList.add('hidden');
        addNewBook.classList.remove('hidden');
      } else if (bookList.matches('.hidden') && addNewBook.matches('.hidden') && !contact.matches('.hidden')) {
        contact.classList.add('hidden');
        addNewBook.classList.remove('hidden');
      }
      lists.classList.remove('active');
      addnew.classList.add('active');
      contactus.classList.remove('active');
      break;
    case '.contact':

      if (!bookList.matches('.hidden') && addNewBook.matches('.hidden') && contact.matches('.hidden')) {
        contact.classList.remove('hidden');
        bookList.classList.add('hidden');
      } else if (bookList.matches('.hidden') && !addNewBook.matches('.hidden') && contact.matches('.hidden')) {
        contact.classList.remove('hidden');
        addNewBook.classList.add('hidden');
      }

      lists.classList.remove('active');
      addnew.classList.remove('active');
      contactus.classList.add('active');
      break;
    default:
  }
}
getPageContent();
