import { products } from "../utils/data.js";
import { aviation } from "../utils/data.js";
import { containProduct } from "./nodes.js";
import { containProductA } from "./nodes.js";

const templateCard = (product) => {
  console.log(product);
  return `
        <div class="prod1card" id="addCartButton${product.id}">
            <figure>
                <img src="images/${product.imagen}" alt="" srcset="" width="300px">
            </figure>
            <div class="prod1CardTitle">${product.name}</div>
            <div class="prod1CardPrice">
                <div class="prod1CardPrice1">BUY
                  <img src="/images/cart_icon.png" alt="" srcset="" height="20px" >
                </div>
                <div class="prod1CardPrice2">$${product.price}</div>
            </div>
            <div class="prod1CardText">${product.prodDes}</div>
        </div>
    `
}

const view = () => {
  const view = products.map((product) => templateCard(product));
  containProduct.innerHTML = view.join(" ");
}

export { view, }

const templateCard2 = (aviationP) => {
  console.log(aviationP);
  return `
        <div class="prod1card" id="addCartButton${aviationP.id}">
            <figure>
                <img src="images/${aviationP.imagen}" alt="" srcset="" width="300px">
            </figure>
            <div class="prod1CardTitle">${aviationP.name}</div>
            <div class="prod1CardPrice">         
              <div class="prod1CardPrice1" >BUY
                <img src="/images/cart_icon.png" alt="" srcset="" height="20px" >
              </div>
              <div class="prod1CardPrice2">$${aviationP.price}</div>
            </div>
            <div class="prod1CardText">${aviationP.prodDes}</div>
        </div>
    `
}

const viewA = () => {
  const viewA = aviation.map((aviationP) => templateCard2(aviationP));
  containProductA.innerHTML = viewA.join(" ");
}

export { viewA, }

import { modalContainProduct } from "./nodes.js";
// import { modalContainProductA } from "./nodes.js";



const modalTemplateCard = (modalProduct) => {
  console.log(modalProduct);
  return `
    <div class="test">
      <div id="modalM" class="bgModal">
        <div class="modal">
          <figure id="btnClose">
            <img src="images/close.png" class="imgIcon" alt="" srcset="">
          </figure>
          <div id="modalContainProduct">

            <div class="prod1card">
              <figure>
                <img src="images/${modalProduct.imagen}" alt="" srcset="" width="300px">
              </figure>
              <div class="prod1CardTitle">${modalProduct.name}</div>
              <div class="prod1CardPrice">
                <div class="prod1CardPrice1">BUY</div>
                <div class="prod1CardPrice2">$${modalProduct.price}</div>
              </div>
              <div class="prod1CardText">${modalProduct.prodDes}</div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
    `
}


const modalView = () => {
  const modalView = products.map((modalProduct) => modalTemplateCard(modalProduct));
  modalContainProduct.innerHTML = modalView.join(" ");
}

export { modalView }