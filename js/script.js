
const books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];

console.log(books);



function loadBooks(books) {
    const library = books;

    const container = document.querySelector("#show");
    let newHTML = "";

    for (let i = 0; i < library.length; i++) {
        console.log(library[i].title);
        const bookTitle = library[i].title;

        const details = `<div class="">                
                            <div class="card">
                                <div class="details">
                                    <h4 class="name">${bookTitle}</h4>
                                    <a class="btn details" href="details.html?id=${library[i].isbn}">Details</a>
                                </div>
                            </div>
                        </div>`;

        newHTML += details;
    }

    container.innerHTML = newHTML;
}





