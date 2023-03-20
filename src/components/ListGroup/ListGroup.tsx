import { /* MouseEvent,*/ useState } from "react";

interface ListGroupProps {
  items: string[]; // an "array" of strings
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // let items = ["Berlin", "Frankfurt", "Maxico-City", "Paris"];
  // items = [];

  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const [toggle, setToggle] = useState(true);

  // const msg = items.length === 0 ? <h4>No item foung</h4> : null; =>>

  // const getMsg = () => {
  //   return items.length === 0 ? <h4>No item foung</h4> : null;
  // };

  // const eventHandler = (e: MouseEvent) => {
  //   // e: MouseEvent // "type annotation"!
  //   console.log("clicked", e); // console.log(item, "clicked", e);
  // };

  /*   const myStyle = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    fontFamily: "Sans-Serif",
  }; */

  return (
    <>
      <h1> {heading} </h1>
      {/* {items.length === 0 ? <h4>No item foung</h4> : null} */}
      {items.length === 0 && <h4>No item foung</h4>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // className={`${toggle ? "active" : n ull}`}
            className={selectedIndex === index ? "list-group-item active" : ""}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            // style={myStyle}
          >
            <h4>{item}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
