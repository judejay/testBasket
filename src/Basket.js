import React, { useContext } from 'react';
import { BasketContext } from './Context';
import { items } from './items';

function Basket() {
    //let price;
    const { basketItems } = useContext(BasketContext);
    let sum = 0;
    const totalSum = (basketItems) => {
        return basketItems
            .map((item) => {
                console.log(item);
                //do logic here

                return parseInt(item.price) * parseInt(item.quantity);
            })
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
