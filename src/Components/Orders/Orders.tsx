import React from "react";
import deleteImage from '../../assets/deleteBtn.png';
import './Orders.css';

type OrderProp = {
    order: {
        name: string;
        quantity: number;
        price: number;
    }[];
    total: number;
    onDelete: (index: number) => void;
    image: string;
};

const OrderInfo: React.FC<OrderProp> = ({ order, total, onDelete }) => {
    if (order.length === 0) {
      return (
        <div className="Orders">
            <h2 className="Title">Order Details</h2>
            <p className="EmptyOrder">Order is empty</p>
        </div>
      );
    } else {
      return (
        <div className="Orders">
          <h2 className="Title">Order Details</h2>
          <ul>
            {order.map((item, index) => (
              <li key={index} className="ListItem">
                {item.name} - {item.quantity} x {item.price} KGS
                <button onClick={() => onDelete(index)} className="RemoveBtn">
                  <img src={deleteImage} alt="remove" />
                </button>
              </li>
            ))}
          </ul>
          <p>Total price: {total} KGS</p>
        </div>
      );
    }
  };
  

export default OrderInfo;