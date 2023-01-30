import React, { useContext } from 'react';
import { BasketContext } from './Context';

function Basket() {
    //let price;
    const { basketItems } = useContext(BasketContext);
    let sum = 0;
    const totalSum = (basketItems) => {
        return basketItems
            .map((item) => {
                let remainingSameprice = 0;
                if (item.quantity >= item.discountFor) {
                    const multiBuys = Math.floor(item.quantity / item.discountFor);
                    if (item.quantity % item.discountFor) {
                        remainingSameprice = item.quantity - multiBuys * item.discountFor;
                    }

                    return multiBuys * item.specialPrice + remainingSameprice * item.price;
                } else {
                    return item.price * item.quantity;
                }
            })
            .reduce((prev, current) => {
                return (sum = prev + current);
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
