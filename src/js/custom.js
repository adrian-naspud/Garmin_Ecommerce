import { view, } from "./printView.js";
import { viewA, } from "./printView.js";
import { modalView, } from "./printView.js";

const button = document.querySelector('#btnModal');
const modal = document.querySelector('#modal');
const btnClose = document.querySelector('#btnClose');
// const divButton = document.querySelector('.modal0Id');
// const modalM = document.querySelector('#modalM');


button.addEventListener('click', () => {
  modal.style.clipPath = "polygon(50% 0%, 100% 0, 100% 60%, 100% 100%, 0 100%, 0% 60%, 0 0)";
});

btnClose.addEventListener('click', () => {
  modal.style.clipPath = "polygon(50% 0%, 50% 47%, 100% 60%, 50% 47%, 50% 47%, 0% 60%, 50% 47%)";
});

// divButton.addEventListener('click', () => {
//   modalM.style.clipPath = "polygon(50% 0%, 100% 0, 100% 60%, 100% 100%, 0 100%, 0% 60%, 0 0)";
// });







// 
window.addEventListener('load', view);
window.addEventListener('load', viewA);
window.addEventListener('load', modalView);
// window.addEventListener('load', viewA);

let addCartButton = document.querySelector(`addCartButton${product.id}`);
addCartButton.addEventListener("click", () => {
  addCart(product.id);
})

const addCart = (productId) => {
  const product = listProducts[productId];
  let productsInCart = document.getElementById("container");
  const HTMLproduct = `<div class="listItem" id="productCart${product.id}">
    <figure>
      <img src=${product.imagen} alt="jacket" class="imgProduct">
    </figure>
    <div class="textDescription">
      <h3 class="titleItem">${product.name}</h3>
      <p class="parrafoItem">${product.description}</p>
    </div>
    <div class="trash">
      <img src="./image/Icon/trash.png" alt="trash" class="imgtrash" id='deleteProductButton${productId}'>
    </div>
  </div>`;

  let varTester = stringToHTML(HTMLproduct);
  let deleteProductButton = varTester.querySelector(
    `#deleteProductButton${productId}`
  );
  deleteProductButton.addEventListener("click", () => {
    deleteProduct(product.id);
  });
  productsInCart.appendChild(varTester);

  saveOneData(product);
};