// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import MyButton from "./utils/MyButton";

function App() {
  /* let items = ["Berlin", "Frankfurt", "Maxico-City", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }; */

  return (
    <>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>
        Hey! <h4>Hi you</h4>
      </Alert>
      <MyButton color="danger">
        <h6>My Button</h6>
      </MyButton>
    </>
  );
}

export default App;
