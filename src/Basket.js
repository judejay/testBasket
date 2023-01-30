import React, { useContext } from 'react';
import { BasketContext } from './Context';
import { items } from './items';

function Basket() {
    //let price;
    const { basketItems } = useContext(BasketContext);
    let sum = 0;
    let itemA = [];
    const totalSum = (basketItems, sum) => {
        return basketItems
            .map((item) => item.price)
            .reduce((prev, current) => {
                return (sum = parseInt(prev) + parseInt(current));
            }, 0);
    };

    return (
        <>
            <div>
                <h1>Basket</h1>
            </div>
            <div>Total: {totalSum(basketItems, sum)}</div>
        </>
    );
}

export default Basket;
