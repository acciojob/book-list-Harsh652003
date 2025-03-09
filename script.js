//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("book-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();
        const isbn = document.getElementById("isbn").value.trim();
        
        if (title === "" || author === "" || isbn === "") {
            alert("Please fill in all fields!");
            return;
        }

        const bookList = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${title}</td><td>${author}</td><td>${isbn}</td><td><button class='delete'>X</button></td>`;
        bookList.appendChild(row);

        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    });

    document.getElementById("book-list").addEventListener("click", function(event) {
        if (event.target.classList.contains("delete")) {
            event.target.parentElement.parentElement.remove();
        }
    });
});
