document.getElementById("bookForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let id = document.getElementById("bookId").value;
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    let table = document.getElementById("bookList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = author;

    alert("Book Added Successfully!");

    document.getElementById("bookForm").reset();

});