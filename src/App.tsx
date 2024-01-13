import React, { useState } from 'react';
import OrderDetails from './Components/Orders/Orders';
import AddItems from './Components/MenuCard/MenuCard';
import './App.css';

type MenuItem = {
  name: string;
  price: number;
  image: string;
};

const App: React.FC = () => {
  const [order, setOrder] = useState<{ name: string; quantity: number; price: number }[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleAddOrder = (item: MenuItem) => {
    const existingItem = order.findIndex((orderItem) => orderItem.name === item.name);

    if (existingItem !== -1) {
      const updatedOrder = [...order];
      updatedOrder[existingItem].quantity += 1;
      setOrder(updatedOrder);
    } else {
      const newItem = { name: item.name, quantity: 1, price: item.price };
      setOrder([...order, newItem]);
    }

    const newTotal = order.reduce((sum, orderItem) => sum + orderItem.quantity * orderItem.price, 0);
    setTotal(newTotal);
  };

  const handleDeleteOrder = (index: number) => {
    const updatedOrder = [...order];
    updatedOrder.splice(index, 1);
    setOrder(updatedOrder);

    const newTotal = updatedOrder.reduce((sum, orderItem) => sum + orderItem.quantity * orderItem.price, 0);
    setTotal(newTotal);
  };

  return (
    <div className='FastFoodBox'>
      <OrderDetails order={order} total={total} onDelete={handleDeleteOrder} image={''} />
      <AddItems onAdd={handleAddOrder} />
    </div>
  );
};

export default App;