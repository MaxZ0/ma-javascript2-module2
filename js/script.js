
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

let listItems = [books];

const button = document.querySelector("button"); // right?

//button.addEventListener("click", addToList);


const container = document.querySelector("#show");
function render(){

        console.log(books)
        

        container.innerHTML = "";
        books.forEach((product) => {
            container.innerHTML += `<div class="demo">
            <div class="card">
                <div class="details">
                    <h2 class="name">${product.title}</h2>
                    <button class="btn" data-name="button">Trash</button>
                </div>
            </div>
        </div>`;
        });

        const items = document.querySelectorAll("button");

        items.forEach(function (item){
        item.addEventListener("click", handleClick);
        });

        const trashCans = document.querySelectorAll("button"); //right?
        trashCans.forEach(can => {
            can.addEventListener("click", removeFromList);
        })

};

render();












//listItems is your array


function removeFromList(idToRemove){
    
    console.log(listItems);


    const filteredArray = listItems.filter(item => {
        console.log(item !== idToRemove);
        if (item.isbn !== idToRemove){
            return true;
        }
    })

    listItems = filteredArray;
} removeFromList ();

function handleClick(event){
    event.target.classList.toggle("complete");
};


