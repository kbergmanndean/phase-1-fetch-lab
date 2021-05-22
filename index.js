function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response =>
    response.json()
  )
    .then(data => {
      console.log(data)
      renderBooks(data);
    })
}
//When I open index.html in the browser, the list of books is displayed but it still doesn't pass the second test. It says "cannot read property 'then' of undefined." If response.json() is undefined, why is it showing up in the browser just fine?

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
