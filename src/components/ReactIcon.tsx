import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ReactIcon = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
    console.log("clicked");
  };

  return (
    <div>
      <BsFillCalendarFill
        color="blue"
        size="60"
        margin-left="10px" //but this doesn't worked!
        style={{ paddingLeft: "10" }}
      />
      <div>
        {toggle ? (
          <AiFillHeart
            onClick={toggleHandler}
            color="red"
            size="60"
            type="button"
          />
        ) : (
          <AiOutlineHeart onClick={toggleHandler} size="60" type="button" />
        )}
      </div>
    </div>
  );
};

export default ReactIcon;
