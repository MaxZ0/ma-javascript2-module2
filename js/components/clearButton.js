import createList from "./createList.js";

export default function clearButton(){
    const clearBtn = document.querySelector("#clear");

    clearBtn.addEventListener("click", clearList);

    function clearList(){
        if(confirm("Are you sure? my dude")){
            console.log("clearing..");
            localStorage.removeItem("list");
            createList([]);
        }
    }
}