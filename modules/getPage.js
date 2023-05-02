const bookList = document.querySelector('.list-section');
const addNewBook = document.querySelector('.main-container');
const contact = document.querySelector('.contact-contain');
const lists = document.querySelector('.list');
const addnew = document.querySelector('.add-new');
const contactus = document.querySelector('.contact');
const getPageContent = (link) => {
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
};

export default getPageContent;