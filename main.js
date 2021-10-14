import {
    getInputValues,
    addItemToPage,
    clearInputs,
    renderItemsList,
} from "./dom_util.js";

// const resetButton = document.getElementById("reset-button");
const submitButton = document.getElementById("submit-button");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search");
const cancelSearchButton = document.getElementById("cancel-search-button");
const sortButton = document.getElementById("sort-button");
const cancelSortButton = document.getElementById("cancel-sort-button");
const countButton = document.getElementById("count-button");
const makerInput = document.getElementById("maker");
const heightInput = document.getElementById("height");
const materialInput = document.getElementById("material");
const priceInput = document.getElementById("price");

let trees = [];

const addItem = ({maker, height, material, price}) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        maker: maker,
        height: height,
        material: material,
        price: price,
    }

    trees.push(newItem);
    addItemToPage(newItem);
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const invalidSymbols = ["!", ".", "?", ";", "~", "&", "$", "№", "<", ">", "/", "|", "\\", "#", "@", "%", "*", "₴", "`"];

    if (makerInput.value == 0 || heightInput.value == 0 || materialInput.value ==  0 || priceInput.value == 0) {
        alert("All fields must be filled!");
    } 
    else if (invalidSymbols.some(symbol => makerInput.value.includes(symbol))) {
        alert("Please, write the valid maker's name. Don't use special symbols.")
    } 
    else if(invalidSymbols.some(symbol => materialInput.value.includes(symbol)))  {
        alert("Please, write the valid material. Don't use special symbols.")
    } 
    else if(priceInput.value <= 0) {
        alert("Would you like to earn a negative amount of money? :)\nPlease, write numbers higher than 0 next to \"Price UAH:\"")
    } 
    else if(heightInput.value <= 0 || heightInput.value > 300) {
        alert("Is your tree a magic one? or a giant? :)\nPlease, write numbers higher than 0 and less than (or equal) 300 next to \"Height in CMs:\"")
    } 
    else {
        const inputValues = getInputValues();
        const {maker, height, material, price} = inputValues;
        clearInputs();
        addItem({maker, height, material, price});
    }
})

searchButton.addEventListener("click", () => {
    const foundTrees = trees.filter(tree => tree.material.search(searchInput.value) !==-1);
    renderItemsList(foundTrees);
})

cancelSearchButton.addEventListener("click", () => {
    renderItemsList(trees);
    searchInput.value = "";
})

sortButton.addEventListener("click", () => {
    const sortedTrees = trees.concat().sort((a, b) =>  b.price - a.price);
    renderItemsList(sortedTrees);
})

cancelSortButton.addEventListener("click", () => {
    renderItemsList(trees);
})

countButton.addEventListener("click", () => {
    let treesPrices = trees.map((tree) => {
        return tree.price;
    });
    let totalPrice = treesPrices.reduce((s, v) => s + +v, 0);
    console.log(totalPrice);

    alert("Total price of the artificial trees added is: " + totalPrice + " UAH.\nMerry Christmas!");
})

renderItemsList(trees);