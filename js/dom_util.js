const makerInput = document.getElementById("maker");
const heightInput = document.getElementById("height");
const materialInput = document.getElementById("material");
const priceInput = document.getElementById("price");
const itemsContainer = document.getElementById("items_container");


const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, maker, height, material, price }) => `
<li id="${getItemId(id)}" class="card">
    <div>
        <br><p><i>Maker's name:</i><br><br>"${maker}"</p><br>
        <p><i>Height in CMs:</i><br><br>${height}</p><br>
        <p><i>Material:</i><br><br>${material}</p><br>
        <p><i>Price UAH:</i><br><br>${price}</p>
        <button class="button__edit">Edit</button>
    </div>
</li>`;

export const clearInputs = () => {
    makerInput.value = "";
    heightInput.value = "";
    materialInput.value = "";
    priceInput.value = "";
};

export const addItemToPage = ({ id, maker, height, material, price }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, maker, height, material, price })
        );
};

export const getInputValues = () => {
    return {
        maker: makerInput.value,
        height: heightInput.value,
        material: materialInput.value,
        price: priceInput.value,
    };
};

export const renderItemsList = (trees) => {
    itemsContainer.innerHTML = "";
    for (const tree of trees) {
        addItemToPage(tree);
    }
};