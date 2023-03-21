import { useState } from "react";

const Drink = () => {
  const [drink, setDrink] = useState({
    title: "Italiano",
    price: 1,
  });

  const handleClick = () => {
    console.log("clicked");
    /*  const newDrink = {
      // title: drink.title, // instead of this
      ...drink, // use the "spresd oprator"
      price: drink.price + 1,
    }; */
    // or in this e.g =>>
    setDrink({ ...drink, price: drink.price + 1 });
  };
  return (
    <div>
      <h4>drink amount {drink.price}</h4>
      <button onClick={handleClick} className="btn btn-primary">
        drink btn
      </button>
    </div>
  );
};

export default Drink;
