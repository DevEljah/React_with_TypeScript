import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching product in", category);
    setProducts(["Food", "Clothing"]);
  }, [category]);
  return (
    <div>
      <h2>ProductList</h2>
    </div>
  );
};

export default ProductList;
