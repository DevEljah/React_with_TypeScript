import { useState } from "react";

const StateExrcise = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Prduct1", quantity: 1 },
    { id: 2, title: "Prduct2", quantity: 2 },
  ]);

  const updateQuantity = () => {
    const newCart = cart.map((item) => {
      if (item.title === "Prduct1") {
        return { ...item, quantity: 2 };
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <div>
      <h2>StateExrcise</h2>
      <div>
        <div>
          <h2>Cart Items:</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={updateQuantity}>Update quantity</button>
      </div>
    </div>
  );
};

export default StateExrcise;
