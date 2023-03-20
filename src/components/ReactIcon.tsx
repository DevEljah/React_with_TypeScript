import { BsFillCalendarFill } from "react-icons/bs";
const ReactIcon = () => {
  return (
    <>
      <BsFillCalendarFill
        color="blue"
        size="60"
        margin-left="10px" //but this doesn't worked!
        style={{ paddingLeft: "10" }}
      />
    </>
  );
};

export default ReactIcon;
