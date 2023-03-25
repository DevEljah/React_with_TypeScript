import { useState } from "react";

const StateExrciseN = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 2 },
    ],
  });

  const updateQuantity = () => {
    const newCart = {
      ...cart,
      items: cart.items.map((item) => {
        if (item.title === "Product1") {
          return { ...item, quantity: 2 };
        }
        return item;
      }),
    };
    setCart(newCart);

    ////oder//////
    /*   setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }); */
  };

  return (
    <div>
      <h2>StateExrcise-n</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={updateQuantity}>Update quantity</button>
      </div>
    </div>
  );
};

export default StateExrciseN;
