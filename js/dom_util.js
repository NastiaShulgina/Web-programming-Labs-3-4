export const EDIT_BUTTON_PREFIX = 'edit-button-'
export const DELETE_BUTTON_PREFIX = 'delete-button-'

const nameInput = document.getElementById("name");
const heightInput = document.getElementById("height");
const materialInput = document.getElementById("material");
const priceInput = document.getElementById("price");
const itemsContainer = document.getElementById("items_container");


const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, name, height, material, price }) => `
<li id="${getItemId(id)}" class="card">
    <div>
        <br><p><i>Maker's name:</i><br><br>"${name}"</p><br>
        <p><i>Height in CMs:</i><br><br>${height}</p><br>
        <p><i>Material:</i><br><br>${material}</p><br>
        <p><i>Price UAH:</i><br><br>${price}</p>
        <button class="button__edit" id="${EDIT_BUTTON_PREFIX}${id}" type="button" >Edit</button>
        <button class="button__delete" id="${DELETE_BUTTON_PREFIX}${id}" type="button" >Delete</button>
    </div>
</li>`;

export const clearInputs = () => {
    nameInput.value = "";
    heightInput.value = "";
    materialInput.value = "";
    priceInput.value = "";
};

export const addItemToPage = ({ id, name, height, material, price }, onEdit, onRemoveItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, height, material, price })
        );

    const element = document.getElementById(id);
    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", onEdit)

    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);
    deleteButton.addEventListener("click", onRemoveItem)
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        height: heightInput.value,
        material: materialInput.value,
        price: priceInput.value,
    };
};

export const renderItemsList = (trees, onEdit, onRemoveItem) => {
    itemsContainer.innerHTML = "";
    for (const tree of trees) {
        addItemToPage(tree, onEdit, onRemoveItem);
    }
};