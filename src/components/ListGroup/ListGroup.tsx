import { /* MouseEvent,*/ useState } from "react";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  background: #9e7b7b;
  padding: 0px;
`;
const ListItem = styled.li<ListItemProps>`
  padding: 2px;
  background: ${(props) => (props.active ? "#218d88" : "none")};
`;

interface ListGroupProps {
  items: string[]; // an "array" of strings
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // let items = ["Berlin", "Frankfurt", "Maxico-City", "Paris"];
  // items = [];

  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      <List className="list-group">
        {items.map((item, index) => (
          <ListItem
            // className={`${toggle ? "active" : n ull}`}
            /*  className={selectedIndex === index ? "list-group-item active" : ""} */
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            // style={myStyle}
          >
            <h4>{item}</h4>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
