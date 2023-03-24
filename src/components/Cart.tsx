interface cartProps {
  cartItems: string[];
}
const Cart = ({ cartItems }: cartProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((cartItem, index) => (
          <li key={index}> {cartItem} </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
