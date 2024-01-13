import React, { useState, useEffect } from 'react'
import OrderDetails from './Components/Orders/Orders'
import AddItems from './Components/MenuCard/MenuCard'
import './App.css'

type MenuItem = {
  name: string
  price: number
  image: string
}

const App: React.FC = () => {
  const [order, setOrder] = useState<
    { name: string; quantity: number; price: number }[]
  >([])
  const [total, setTotal] = useState<number>(0)

  const handleAddOrder = (item: MenuItem) => {
    const existingItemIndex = order.findIndex(
      (orderItem) => orderItem.name === item.name,
    )

    if (existingItemIndex !== -1) {
      const updatedOrder = [...order]
      updatedOrder[existingItemIndex].quantity += 1
      setOrder(updatedOrder)
    } else {
      const newItem = { name: item.name, quantity: 1, price: item.price }
      setOrder([...order, newItem])
    }
  }

  const handleDeleteOrder = (index: number) => {
    const updatedOrder = [...order]
    updatedOrder.splice(index, 1)
    setOrder(updatedOrder)
  }

  useEffect(() => {
    const newTotal = order.reduce(
      (sum, orderItem) => sum + orderItem.quantity * orderItem.price,
      0,
    )
    setTotal(newTotal)
  }, [order])

  return (
    <div className="FastFoodBox">
      <OrderDetails
        order={order}
        total={total}
        onDelete={handleDeleteOrder}
        image={''}
      />
      <AddItems onAdd={handleAddOrder} />
    </div>
  )
}

export default App
