
class Order {
    orderKey;
    ordersItems;

    constructor(Key){
        this.orderKey = Key;
        this.ordersItems = this.loadFromStorage(Key);
    }
    

    addOrder(order){
        this.ordersItems.unshift(order);
        this.saveToStorage();
    }

    loadFromStorage(){
        return JSON.parse(localStorage.getItem(this.orderKey)) || [];
    }
    saveToStorage(){
        localStorage.setItem(this.orderKey, JSON.stringify(this.ordersItems));
    }
    


    loopOrders(id){
        const founded = this.ordersItems.find(order => order._id === id);
        console.log(founded)
        return founded || 'none'
    }
    getArrayProductsOrders(orderId,productId){
        const arrayProducts = this.loopOrders(orderId).products;
        
        const a = arrayProducts.find(p => p.productId === productId)

        return a || 'none'
    }


}

export let order = new Order('orders');


export async function sendOrderLogedIn(userCart,formTarget){
    try{
          const form = new FormData(formTarget);
          const firstName = form.get('firstName');
          const lastName = form.get('lastName');
          const phoneNumber = form.get('phoneNumber');
          const email = form.get('email');
          const adress = form.get('adress');
          const postalCode = form.get('postalCode');
          const city = form.get('city');
          const country = form.get('country');
          const note = form.get('note');

          const response = await fetch('http://localhost:3000/portfolio/amazon/send-order',{
            method: 'POST',
            headers:{
              'Content-Type':'application/json',
              'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
              userCart,
               userData:{
                firstName,
                lastName,
                phoneNumber,
                email,
                adress,
                postalCode,
                city,
                country,
                note,
              }
            })
          });
          
          const order = await response.json();
          window.location.href = 'orders.html';
          return order;
        }catch(error){
          console.log('didn\'t send the order try again later',error);
        }
}

export async function sendOrderNotLogedIn(userCart,formTarget){
        try{
          const form = new FormData(formTarget);
          const firstName = form.get('firstName');
          const lastName = form.get('lastName');
          const phoneNumber = form.get('phoneNumber');
          const email = form.get('email');
          const adress = form.get('adress');
          const postalCode = form.get('postalCode');
          const city = form.get('city');
          const country = form.get('country');
          const note = form.get('note');
          const response = await fetch('http://localhost:3000/portfolio/amazon/sendOrderAnonymous',{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              userCart,
              userData:{
                firstName,
                lastName,
                phoneNumber,
                email,
                adress,
                postalCode ,
                city,
                country,
                note,
              }
            })
          });
          const norder = await response.json();
          order.addOrder(norder);
          window.location.href = 'orders.html';
        }catch(error){
          console.log('error: ',error);
        }
}

export async function getUserOrders(){
  try{
    const response = await fetch('http://localhost:3000/portfolio/amazon/takeUserOrders',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.getItem('jwt')}`
      }
    });
    const data = await response.json()
    if(response.ok){
      return data.userOrders;
    }else{
      return 'getuUserOrders function error'
    }
  }catch(e){
    console.error('didnt find userOrders');
  }
}