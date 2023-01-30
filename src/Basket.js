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
                let remainingSameprice = 0;
                if (parseInt(item.quantity) >= parseInt(item.discountFor)) {
                    const multiBuys = Math.floor(parseInt(item.quantity) / parseInt(item.discountFor));
                    if (parseInt(item.quantity) % parseInt(item.discountFor)) {
                        remainingSameprice = parseInt(item.quantity) - multiBuys * parseInt(item.discountFor);
                    }

                    console.log('multiBuys', multiBuys);
                    return multiBuys * parseInt(item.specialPrice) + remainingSameprice * parseInt(item.price);
                } else {
                    return parseInt(item.price) * parseInt(item.quantity);
                }
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
