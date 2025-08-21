import {cart} from '../../data/cart-class.js';
import {products} from '../../data/products.js';
import formatCurrency from '../utils/money.js';
import isSatSun from '../utils/dates.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {deliveryOptions, getDeliveryOptionOb, calculateDeliveryDate} from '../../data/deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';
import {renderCheckoutHeader} from './checkoutHeader.js';
import {removeFromCart, changeDeliveryOption, changeQuantityCart} from '../utils/fetch.js'
isSatSun();
let userCart;
let isLogedIn = false;


export function mainHTML(data = null, loged = false){
    userCart = data;
    isLogedIn = loged;
    displayCartSummary();
    iteringAddEventOnClickDelete();
    iteringAddEventOnClickUpdateQuantity();
    iteringAddEventOnClickSaveQuantity();
    iteringAddEventOnClickDate()
    
};




export function displayCartSummary(){
    
    let cartSummaryHTML='';

    userCart.cartItems.forEach((cartItem)=>{
        products.forEach((productsItem)=>{
            if(cartItem.productId === productsItem.id){
                
    
            
                //delivery calc for header
                const cartDeliveryOptionId = cartItem.deliveryOptionId;
                const matchingDeliveryOption = getDeliveryOptionOb(cartDeliveryOptionId);
                
                

                //format date
                const dayForDeliver = matchingDeliveryOption.deliveryDays
                const today = dayjs();
                const deliveryDate = today.add(dayForDeliver, 'days');
                const dateString = deliveryDate.format('dddd, MMMM, D' );




                cartSummaryHTML+= `
                    <div class="cart-item-container js-cart-item-container js-cart-item-container-${productsItem.id}">
                        <div class="delivery-date">
                            Delivery date: ${dateString}
                        </div>
    
                        <div class="cart-item-details-grid">
                        <img class="product-image" src="${productsItem.image}">
    
                        <div class="cart-item-details">
                            <div class="product-name js-product-name-${cartItem.productId}">
                                ${productsItem.name}
                            </div>
                            <div class="product-price">
                                ${productsItem.getPrice()}
                            </div>
                            <div class="product-quantity js-product-quantity-${cartItem.productId}">
                            <span>
                                Quantity: <span class="quantity-label js-quantity-label" data-product-id-quantity=${cartItem.productId} >${cartItem.quantity}</span>
                            </span>
                            <span class="update-quantity-link link-primary js-update-quantity-link " data-product-id-quantity=${cartItem.productId}>
                                Update
                            </span>
                            <input class='quantity-input js-quantity-input' data-product-id-input=${cartItem.productId}>
                                <span class="save-quantity-link link-primary js-save-quantity-link" data-save-prod-id = ${cartItem.productId}>
                                    save
                                </span>
                            </input>
                            <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${cartItem.productId}" data-delete-id=${cartItem.productId}>
                                Delete
                            </span>
                            </div>
                        </div>

                        <div class="delivery-options">
                            <div class="delivery-options-title">
                                Choose a delivery option:
                            </div>
                        ${deliveryOptionHTML(productsItem,cartItem)}

                        </div>
                    </div>
                </div>
                `   
            };
            
        });
   
    });

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

};

function deliveryOptionHTML(productsItem, userCart){
    let html = ''
    deliveryOptions.forEach((option)=>{
        const dateString = calculateDeliveryDate(option).format('dddd, MMMM, D');


        const price = `$${formatCurrency(option.priceCents)}` || 'FREE';

        const  isChecked = option.id === userCart.deliveryOptionId;
        
        
        

        html += 
        `
                <div class="delivery-option js-delivery-option js-deliver-option-${productsItem.id}-${option.id}"
                    data-product-id="${productsItem.id}"
                    data-delivery-option-id="${option.id}">
                    <input type="radio" ${isChecked ? 'checked': ''} class="delivery-option-input js-deliver-option-input-${productsItem.id}-${option.id}">
                <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                    ${price} - Shipping
                </div>
            </div>
        </div>
        `
    });
    return html;

}


export  function iteringAddEventOnClickDelete(){
    document.querySelector('.js-order-summary').addEventListener('click',async (event)=>{
        if(event.target.classList.contains('js-delete-link')){
            let dataIdElement = event.target.dataset.deleteId;

            // cart.removeFromCart(dataIdElement);
            if(isLogedIn){
                const data = await removeFromCart(dataIdElement);
                userCart = data.userCart;
            }else{
                cart.removeFromCart(dataIdElement);
                userCart = cart;
            }
            
            displayCartSummary();
            renderCheckoutHeader(userCart);
            renderPaymentSummary(userCart);
            reattachEventListeners();

        }
    });
};




function iteringAddEventOnClickUpdateQuantity(){
    const updateElements = document.querySelectorAll('.js-update-quantity-link');

    function update(event){
        let updateItem = event.currentTarget;
        let itemContainer= document.querySelector(`.js-cart-item-container-${updateItem.dataset.productIdQuantity}`);
        itemContainer.classList.add('is-editing-quantity');
        
    }

    updateElements.forEach((updateItem)=>{
        updateItem.addEventListener('click',update);
    });
};



function iteringAddEventOnClickSaveQuantity(){
    const saveLink = document.querySelectorAll('.js-save-quantity-link');
    const quantityInputElements = document.querySelectorAll('.js-quantity-input');


    //on click
    function removeClass(event){
        let saveLinkItem = event.currentTarget;
        let prodId = saveLinkItem.dataset.saveProdId;
        const itemElement = document.querySelector(`.js-cart-item-container-${prodId}`);
        itemElement.classList.remove('is-editing-quantity');
    };


    async function saveQuantity(event){
        let saveLinkItem = event.currentTarget;
        let prodId = saveLinkItem.dataset.saveProdId;
        let inputElement = document.querySelector(`.js-cart-item-container-${prodId}`).querySelector('.js-quantity-input');
        const quantity = Number(inputElement.value);
        if(!(quantity > 0  && quantity < 1000))
            return

        // 
        if(isLogedIn){
            userCart = await changeQuantityCart(prodId, quantity);
        }else{
            cart.overwriteQuantityInCart(prodId, inputElement, quantity);
            userCart = cart
            
        }
        
        displayCartSummary()
        reattachEventListeners();
        renderCheckoutHeader(userCart);
        renderPaymentSummary(userCart);
        
    };









    //on Enter
    function removeClassTwo(event){
        if(event.key === "Enter"){
            let saveLinkItem = event.currentTarget;
            let prodId = saveLinkItem.dataset.productIdInput;
            const itemElement = document.querySelector(`.js-cart-item-container-${prodId}`);
            itemElement.classList.remove('is-editing-quantity');
        };

    };

    async function saveQuantityOnEnter(event){
            if(event.key === "Enter"){
                let saveInputItem = event.currentTarget;
                let prodId = saveInputItem.dataset.productIdInput;
                let containerElement = document.querySelector(`.js-cart-item-container-${prodId}`);
                
                const quantity = Number(saveInputItem.value);

                if(!(quantity > 0  && quantity < 1000))
                    return;

                if(isLogedIn){
                    userCart = await changeQuantityCart(prodId, quantity);
                }else{
                    cart.overwriteQuantityInCart(prodId, containerElement, quantity);
                    userCart = cart
                    
                }
            displayCartSummary()
            reattachEventListeners();
            renderCheckoutHeader(userCart);
            renderPaymentSummary(userCart);
            };
    };



    saveLink.forEach((saveLinkItem)=>{
        saveLinkItem.addEventListener('click',removeClass);
        saveLinkItem.addEventListener('click',saveQuantity);
        
    });

    quantityInputElements.forEach((inputItem)=>{
       inputItem.addEventListener('keydown',saveQuantityOnEnter);
       inputItem.addEventListener('keydown',removeClassTwo);
    });
    
};



function reattachEventListeners() {
    iteringAddEventOnClickDelete();
    iteringAddEventOnClickUpdateQuantity();
    iteringAddEventOnClickSaveQuantity();
    iteringAddEventOnClickDate();
}

    
export  function iteringAddEventOnClickDate (){
    document.querySelectorAll('.js-delivery-option').forEach((element)=>{
        element.addEventListener('click',async()=>{
            const {productId, deliveryOptionId} = element.dataset;
            console.log(isLogedIn);
            if(isLogedIn){
                userCart = await changeDeliveryOption(productId, deliveryOptionId);
            }else{
                cart.updateDeliveryOption(productId, deliveryOptionId);
                userCart = cart;
            }
            

            displayCartSummary();
            reattachEventListeners();
            renderPaymentSummary(userCart);
        });
    });
};




