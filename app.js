
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

UI.prototype.showAlert=function(msg,className){
  const div=document.createElement("div");
  div.className=`alert ${className}`;
  div.appendChild(document.createTextNode(msg));
  
  const container=document.querySelector(".container");
  const form=document.querySelector("#book-form ");
  container.insertBefore(div,form);
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


// validate
if(title==="" || author==="" || isbn===""){

  ui.showAlert('pleass fill all fields',"error");

}else{

// add book to ui
ui.addBookToList(book);

ui.clearFields();
}


  e.preventDefault();
});