import { useEffect, useState } from "react";
import { useCategoryStore } from "../store/categoryStore";
import { useProductStore } from "../store/productStore";

import Dropdown from "../components/products/Dropdown";
import ProductDisplay from "../components/products/ProductDisplay";

const Products = () => {
  const category = useCategoryStore((state) => state.category);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      console.log("grabbing products");
      const response = await fetch("http://localhost:4141/products/all");
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="Products">
      <div className="container m-auto">
        <div className="flex justify-center">
          <Dropdown />
        </div>
        {!isLoading && <ProductDisplay products={products} />}
        {isLoading && <div>products loading</div>}
      </div>
    </div>
  );
};

export default Products;
