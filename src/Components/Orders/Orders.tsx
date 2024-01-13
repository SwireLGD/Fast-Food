import React from "react";

type OrderProp = {
    order: {
        name: string;
        quantity: number;
        price: number;
    }[];
    total: number;
};

const OrderInfo: React.FC<OrderProp> = ({ order, total }) => {
    return (
        <>
            <h2 className="Title">Order Details</h2>
            {order.length === 0 ? (
                <p>Order is empty</p>
            ) : (
                <div>
                    <ul>
                        {order.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.quantity} x {item.price} KGS
                        </li>
                        ))}
                    </ul>
                    <p>Total price: {total} KGS</p>
                </div>
            )}
        </>
    );
};

export default OrderInfo;