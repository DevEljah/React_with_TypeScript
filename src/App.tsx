// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

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
    </>
  );
}

export default App;
