// import Button from '@restart/ui/esm/Button';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // let total = cart.reduce((total, product) => total + product.price, 0);
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center">Order Summary</h1>
                <h4 className="text-xl">Items Order : {cart.length}</h4>
            </div>
        </div>
    );
};
export default Cart;
