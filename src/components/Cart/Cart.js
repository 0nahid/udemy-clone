import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    let price = cart.reduce((total, product) => total + product.price_detail.amount, 0);
    let tax = price / 10;
    const total = price + tax;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <div>
                <h1>Course Order Summary</h1>
                <h4 > Ordered Courses : {cart.length}</h4>
                <h4>Price:${formatNumber(price)}</h4>
                <h4>VAT + tax:${formatNumber(tax)} </h4>
                <h4>Total :${formatNumber(total)}</h4>
            </div>
        </div>
    );
};
export default Cart;
