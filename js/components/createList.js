import { books } from "../array.js";
const listItem = [books];

export default function createList(listItems){
    const listContainer = document.querySelector("ul");

    listContainer.innerHTML = "";

    listItems.forEach(function(listItem){
        listContainer.innerHTML += `
        <li>
           <span>${listItem}</span>
           <i class="fa fa-trash" data-item"${listItem}"
        </li>
        `;
    });
    
    console.log("hello",listItem);
    const textboxes = document.querySelectorAll("li input[type=text]");

    textboxes.forEach(function (textbox) {
        textbox.addEventListener("keyup", updateValue);
    });

    function updateValue(event) {
        const id = event.target.books.isbn;
        const value = event.target.value.trim();

        const updatedList = updateValueInList(listItems, id, value);
        saveToStorage(listKey, updatedList);
    }
}

function updateValueInList(listItems, id, value){
    const itemIndex = listItem.findIndex((item) => item.id === parseInt(id));

    listItem[itemIndex].item = value;

    return listItem;
}