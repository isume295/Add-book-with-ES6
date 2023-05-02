/* eslint max-classes-per-file: ["error", 2] */
import Book from './modules/book.js';
import Store from './modules/bookstore.js';

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

lists.addEventListener('click', () => {
  getPageContent('.list');
});

addnew.addEventListener('click', () => {
  getPageContent('.add-new');
});

contactus.addEventListener('click', () => {
  getPageContent('.contact');
});
