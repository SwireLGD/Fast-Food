import React, { useState } from 'react';
import OrderDetails from './Components/Orders/Orders';
import AddItems from './Components/MenuCard/MenuCard';

type MenuItem = {
  name: string;
  price: number;
  image: string;
};

const App: React.FC = () => {
  const [order, setOrder] = useState<{ name: string; quantity: number; price: number }[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleAddItem = (item: MenuItem) => {
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

  return (
    <div>
      <OrderDetails order={order} total={total} />
      <AddItems onAdd={handleAddItem} />
    </div>
  );
};

export default App;