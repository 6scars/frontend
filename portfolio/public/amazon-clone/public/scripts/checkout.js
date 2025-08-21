import {loadProductsFetch} from '../data/products.js'
import {cart, loadCartFetch} from '../data/cart-class.js';
import {mainHTML} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';

import {takeUserCart} from './utils/fetch.js';

let userCart;
let isLogedIn = false;
 async function loadPage(){

    try{
        const [_ , __ , data] = await Promise.all([
            loadProductsFetch(),
            loadCartFetch(),
            takeUserCart()
        ]);
        if(!data){ 
            userCart = cart;
        }else{
            isLogedIn = true;
            userCart = data;
        }
        console.log(userCart)
    }catch(error){
        console.log('error loadPage');
    }

    mainHTML(userCart, isLogedIn);
    renderPaymentSummary(userCart, isLogedIn);
    renderCheckoutHeader(userCart, isLogedIn);

}
loadPage();

