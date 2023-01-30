import React from 'react'
import { items } from './items';
import './Products.css'

function Products({item}) {
  return (
    <div className='item'>
    <div>Item: {item.item} </div>
    <div>Price: {item.price}</div>
    <div>Discount for: {item.discountFor} </div>
    <div>SpecialPrice: {item.specialPrice}</div>
    <button>Add to basket</button>
</div>
  )
}

export default Products
