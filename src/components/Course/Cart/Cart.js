import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    return (
        <div>
            Item ordered :{cart.length}
        </div>
    );
};
export default Cart;
