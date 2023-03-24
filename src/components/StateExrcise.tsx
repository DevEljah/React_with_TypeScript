import { useState } from "react";

const StateExrcise = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Max",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });

  const handleChangeName = () => {
    // game.player.name = "Dev" // vanilla js
    setGame({ ...game, player: { ...game.player, name: "Dev" } });
  };

  const handleAddNewTopping = () => {
    // pizza.topping.push("Cheese") // vanilla js
    setPizza({ ...pizza, topping: [...pizza.topping, " - Cheese"] });
  };
  return (
    <>
      <h2>StateExrcise</h2>
      <div>
        <h4>Player Name: {game.player.name}</h4>
        <button onClick={handleChangeName}>Change Name</button>
      </div>
      <div>
        <h4>Pizza topping: {pizza.topping}</h4>
        <button onClick={handleAddNewTopping}>Add new topping</button>
      </div>
    </>
  );
};

export default StateExrcise;
