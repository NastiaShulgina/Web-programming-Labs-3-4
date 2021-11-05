import { getAllTrees, postTree, editTree, deleteTree } from "./api.js";
import {
    getInputValues,
    clearInputs,
    renderItemsList,
    EDIT_BUTTON_PREFIX,
} from "./dom_util.js";

// const resetButton = document.getElementById("reset-button");
const submitButton = document.getElementById("submit-button");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search");
const cancelSearchButton = document.getElementById("cancel-search-button");
const sortButton = document.getElementById("sort-button");
const cancelSortButton = document.getElementById("cancel-sort-button");
const countButton = document.getElementById("count-button");
const nameInput = document.getElementById("name");
const heightInput = document.getElementById("height");
const materialInput = document.getElementById("material");
const priceInput = document.getElementById("price");

let trees = [];

const onEditItem = (element) => {
    const id = element.target.id.replace(EDIT_BUTTON_PREFIX, "");
    const {name, height, material, price} = getInputValues();

    clearInputs;

    editTree(id, {
        name,
        height,
        material,
        price,
    }).then(refetchAllTrees);
}

const onRemoveItem = (element) => {
    const id = element.target.id.replace("delete-button-", "");
    deleteTree(id).then(refetchAllTrees);
}

const refetchAllTrees = async () => {
    const allTrees = await getAllTrees();

    trees = allTrees;
    renderItemsList(trees, onEditItem, onRemoveItem);
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const invalidSymbols = ["!", ".", "?", ";", "~", "&", "$", "№", "<", ">", "/", "|", "\\", "#", "@", "%", "*", "₴", "`"];

    if (nameInput.value == 0 || heightInput.value == 0 || materialInput.value ==  0 || priceInput.value == 0) {
        alert("All fields must be filled!");
    } 
    else if (invalidSymbols.some(symbol => nameInput.value.includes(symbol))) {
        alert("Please, write the valid name's name. Don't use special symbols.")
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
        const {name, height, material, price} = inputValues;
        clearInputs();
        postTree(inputValues).then(refetchAllTrees);
    }
})

searchButton.addEventListener("click", () => {
    const foundTrees = trees.filter(tree => tree.material.search(searchInput.value) !==-1);
    renderItemsList(foundTrees, onEditItem, onRemoveItem);
})

cancelSearchButton.addEventListener("click", () => {
    renderItemsList(trees, onEditItem, onRemoveItem);
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
    let totalPrice = treesPrices.reduce((sum, elem) => sum + +elem, 0);
    console.log(totalPrice);

    alert("Total price of the artificial trees added is: " + totalPrice + " UAH.\nMerry Christmas!");
})


refetchAllTrees();