import { useState } from "react";
import produce from "immer";

const UpdatingArrays = () => {
  const [tags, setTags] = useState(["happy -", "joy"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // add
    setTags([...tags, " - exciting"]);
    // update
    setTags(tags.filter((tag) => tag !== "happy -"));
    // remove
    setTags(tags.map((tag) => (tag === "happy -" ? "happiness -" : tag)));

    console.log(tags);
  };
  const handleBugs = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      <h4> {tags} </h4>
      <button onClick={handleClick} className="btn btn-primary">
        tags btn
      </button>
      <div>
        <h4>Bugs zone </h4>
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "Fixed" : "New"}
          </p>
        ))}
        <button onClick={handleBugs} className="btn btn-primary">
          bugs btn
        </button>
      </div>
    </div>
  );
};

export default UpdatingArrays;
