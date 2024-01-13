import React from "react";
import foodImage from '../../assets/food.png';
import beverageImage from '../../assets/beverage.png';

type MenuCardProp = {
    image: string;
    name: string;
    price: number;   
};

type AddOrderProp = {
    onAdd: (item: MenuCardProp) => void;
};
   
const CardBtn: React.FC<AddOrderProp> = ({ onAdd }) => {
    const menu: MenuCardProp[] = [
        {name: 'Hot Dog', price: 50, image: foodImage},
        {name: 'Taco', price: 70, image: foodImage},
        {name: 'Sandwich', price: 50, image: foodImage},
        {name: 'Cola', price: 40, image: beverageImage},
        {name: 'Latte', price: 60, image: beverageImage},
        {name: 'Green Tea', price: 30, image: beverageImage},
    ];

    return (
        <div>
            <h2>Add Items</h2>
            {menu.map((item, index) => (
                <button key={index} onClick={() => onAdd(item)}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name} - {item.price} KGS</p>
              </button>
            ))}
        </div>
    );
};

export default CardBtn;