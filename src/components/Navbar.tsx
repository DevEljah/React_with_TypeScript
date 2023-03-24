interface navProps {
  // cartItems: string [] //passing all itmes as an array
  cartItemsCount: number; // passing just there counts
}

const Navbar = ({ cartItemsCount }: navProps) => {
  return <div>Navbar: {cartItemsCount} </div>;
};

export default Navbar;
