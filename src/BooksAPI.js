
const api = 'https://reactnd-books-api.udacity.com';


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  localStorage.token = Math.random().toString(36).substr(-8);
  token = localStorage.token;
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

const SHELFS = [
  {
    id: 'currentlyReading',
    name: 'Currently Reading',
  },
  {
    id: 'wantToRead',
    name: 'Want To Read',
  },
  {
    id: 'read',
    name: 'Read',
  },
];

export const getShelfs = () =>
  Promise.resolve(SHELFS);

export const get = bookId =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shelf }),
  }).then(res => res.json());

export const search = query =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }).then(res => res.json())
    .then(data => data.books);
