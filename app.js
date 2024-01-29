class Book{
  constructor(id,title,author,read){
    this.id = id;
    this.title = title; 
    this.author = author; 
    this.read = read;
  }
}

class Libray{
  constructor(bookCount,books=[]){
    this.bookCount = bookCount;
    this.books = books;}

 //addBook method info
 addBook(){
  console.log("addBook");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const read = document.getElementById("read");

  const newBook = new Book(this.bookCount,title.value, author.value, read.checked);

  this.books.push(newBook);

  this.bookCount++;
  console.log(this.books,this.bookCount);

  const newTr = document.createElement("tr");
  const newTitle = document.createElement("td");
  const newAuthor = document.createElement("td");
  const newRead = document.createElement("td");

  const tableBody = document.querySelector("tbody")

  newTitle.textContent = title.value;

  newAuthor.textContent = author.value;

  const readCheckbox = document.createElement("input");
  readCheckbox.type = "checkbox";
  readCheckbox.checked = read.checked;
  readCheckbox.disabled = true;
  newRead.appendChild(readCheckbox);

  newTr.appendChild(newTitle);
  newTr.appendChild(newAuthor);
  newTr.appendChild(newRead);
  tableBody.appendChild(newTr);
} 

      //markRead method info
  markRead(checkbox,id){
    this.books.forEach((book)=>{
      if(id === book.id){
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    });
  }

}

const libray= new Libray();

const form= document.getElementById("formGroup");

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  libray.addBook();
});




 















