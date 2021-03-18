import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
   for (let i = 0; i < cart.length; i++) {
       const product = cart[i];
       total = total + product.price * product.quantity; 
   }

   let shipping = 0;
   if(total > 35){
       shipping = 0;
   } if(total > 15){
       shipping = 4.99;
   }else if(total > 0){
       shipping = 12.99;
   }

   const tax = total / 20;

   const formatNumber = num => {
       const precision = num.toFixed(2);
       return (precision);
   }

    return (
        <div>
            <h3 className="text-danger">Order summary </h3>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Product Price: ${formatNumber(total)}</p>
            <p>Shipping Cost: ${formatNumber(shipping)}</p>
            <p>Tax + Vat: ${formatNumber(tax)}</p>
            <p>Total Price:${formatNumber(total + shipping + tax)}</p>
            { props.children}
        </div>
    );
};

export default Cart;