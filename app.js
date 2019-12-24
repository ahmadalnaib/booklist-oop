
// BOOS CLASS
function Book(title, author,isbn){
  this.title=title;
  this.author=author;
  this.isbn=isbn;

}

//UI CLASS
function UI() {}


// add book to listeners
UI.prototype.addBookToList=function(book){
  const list = document.querySelector("#book-list");

  const row=document.createElement("tr");
  row.innerHTML=`
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a herf="# class="delete">X</a></td>
  `;

  list.appendChild(row);
}

UI.prototype.clearFields=function(){
  document.querySelector("#title").value='';
  document.querySelector("#author").value='';
  document.querySelector("#isbn").value='';
}


// EVENT LISTENERS

document.querySelector("#book-form").addEventListener("submit",function(e){
 const title=document.querySelector("#title").value;
 const author=document.querySelector("#author").value;
 const isbn=document.querySelector("#isbn").value;

//  instantiate Book
 const book= new Book(title, author,isbn);

//  instantiate UI
const ui= new UI();

// add book to ui
ui.addBookToList(book);

ui.clearFields();


  e.preventDefault();
});