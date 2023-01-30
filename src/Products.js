import React, { useContext } from 'react';

import './Products.css';
import { BasketContext } from './Context';

function Products({ item }) {
    const { addToBasket } = useContext(BasketContext);
    return (
        <div className="item">
            <div>Item: {item.item} </div>
            <div>Price: {item.price}</div>
            {item.discountFor && <div>Discount for: {item.discountFor} </div>}
            {item.specialPrice && <div>SpecialPrice: {item.specialPrice}</div>}
            <button onClick={() => addToBasket(item)}>Add to basket</button>
        </div>
    );
}

export default Products;
