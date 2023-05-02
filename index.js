import Book from './modules/book.js';
import Store from './modules/bookstore.js';
import getPageContent from './modules/getPage.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

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
  const date = DateTime.local().setZone('Europe/Paris');
  document.querySelector('.date').innerHTML = date;
};

const lists = document.querySelector('.list');
const addnew = document.querySelector('.add-new');
const contactus = document.querySelector('.contact');

lists.addEventListener('click', () => {
  getPageContent('.list');
});

addnew.addEventListener('click', () => {
  getPageContent('.add-new');
});

contactus.addEventListener('click', () => {
  getPageContent('.contact');
});
