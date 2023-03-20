// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./utils/MyButton";
import styles from "./components/ListGroup/ListGroup.module.css";

function App() {
  /* let items = ["Berlin", "Frankfurt", "Maxico-City", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }; */

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
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
    </>
  );
}

export default App;
