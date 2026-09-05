import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2bb0",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 4,
    name: "Money Plant",
    price: 18,
    image: "https://images.unsplash.com/photo-1614594575832-b1f5b7a7e7f7",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <h2>Our Plants</h2>

      <div>
        {plants.map((plant) => (
          <div key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              width="200"
            />

            <h3>{plant.name}</h3>

            <p>Price: ${plant.price}</p>

            <button onClick={() => handleAddToCart(plant)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
