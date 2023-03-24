import { useState } from "react";

const StateExrcise = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Max",
    },
  });

  const handleChangeName = () => {
    setGame({ ...game, player: { name: "Dev" } });
  };
  return (
    <>
      <h2>StateExrcise</h2>
      <div>
        <h4>Player Name: {game.player.name}</h4>
        <button onClick={handleChangeName}>Change Name</button>
      </div>
    </>
  );
};

export default StateExrcise;
