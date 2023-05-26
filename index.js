const shoppingList = document.querySelector(".shopping-list");
const addItem = document.querySelector("#add");

const inputElement = document.querySelector("#textid");
const removeEl = document.getElementById("remove");
const newList = document.createElement("ul");

shoppingList.appendChild(newList);

addItem.addEventListener("click", () => {
      
    
    
    const newItem = inputElement.value;
    const newLine = document.createElement("li");

    newLine.textContent = newItem;
    newList.appendChild(newLine);
    inputElement.value = "";
})


/
removeEl.addEventListener("click", () => {
    const selectedItems = document.querySelectorAll(".shopping-list li")
    selectedItems[0].remove();
})