// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./utils/MyButton";
import styles from "./components/ListGroup/ListGroup.module.css";
import ListGroup from "./components/ListGroup/ListGroup";
import ReactIcon from "./components/ReactIcon";
import Drink from "./components/Drink";
import Customer from "./components/Customer";
import UpdatingArrays from "./components/UpdatingArrays";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  let items = ["Berlin", "Frankfurt", "Maxico-City", "Paris"];

  // const [firstName, setFirstName] = useState(" ");
  // const [lastName, setLastName] = useState(" ");
  const [personName, setPersonName] = useState({
    firstName: " ",
    lastName: " ",
  });

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => {
          setCartItems([]);
        }}
      />
      <ReactIcon />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {toggle && (
        <Alert onClose={() => setToggle(false)}>
          Hey!
          <h4
            /* className={styles["list-group"]} */ className={[
              styles.listGroup,
              styles.container,
            ].join(" ")} // joining the "styles" use (" ") space
          >
            Alert
          </h4>
        </Alert>
      )}

      <MyButton color="danger" onClick={() => setToggle(true)}>
        <h6>My Button</h6>
      </MyButton>
      <Drink />
      <Customer />
      <UpdatingArrays />
    </>
  );
}

export default App;
