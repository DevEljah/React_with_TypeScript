interface cartProps {
  cartItems: string[];
  onClear: () => void;
}
const Cart = ({ cartItems, onClear }: cartProps) => {
  return (
    <>
      <h4>Cart</h4>
      <ul>
        {cartItems.map((cartItem, index) => (
          <li key={index}> {cartItem} </li>
        ))}
      </ul>
      <button onClick={onClear} className="btn btn-primary">
        clear
      </button>
    </>
  );
};

export default Cart;
