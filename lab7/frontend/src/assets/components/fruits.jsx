import React from 'react'
const products = [
    {title: "Apple", price: 100, quantity: 5},
    {title: "Banana", price: 50, quantity: 10},
    {title: "Mango", price: 200, quantity: 3},
    {title: "Orange", price: 80, quantity: 7}
]

const ListItem = products.map((product, index) => {
    return (
        <div key={index}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    )
})

const fruits = () => {
  return (
    <div>
      <h2>Fruits</h2>
      {ListItem}
    </div>
  )
}

export default fruits