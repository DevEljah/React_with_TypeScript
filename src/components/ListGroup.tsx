function ListGroup() {
  let items = ["Berlin", "Frankfurt", "Maxico-City", "Paris"];
  items = [];

  // const msg = items.length === 0 ? <h4>No item foung</h4> : null; =>>

  // const getMsg = () => {
  //   return items.length === 0 ? <h4>No item foung</h4> : null;
  // };

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <h4>No item foung</h4> : null} */}
      {items.length === 0 && <h4>No item foung</h4>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            <h4>{item}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
