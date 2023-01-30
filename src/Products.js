import React from 'react'
import { items } from './items';

function Products({item}) {
  return (
    <>
    <div>Item: {item.item} </div>
    <div>Price: {item.price}</div>
    <div>Discount for: {item.discountFor} </div>
    <div>SpecialPrice: {item.specialPrice}</div>
    <button>Add to basket</button>
</>
  )
}

export default Products
