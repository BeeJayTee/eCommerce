import { useCategoryStore } from "../../store/categoryStore";

import ProductCard from "./ProductCard";

const ProductDisplay = ({ products }) => {
  const category = useCategoryStore((state) => state.category);
  return (
    <div className="ProductDisplay grid grid-cols-4 auto-rows-fr gap-x-32 gap-y-16">
      {category === "" &&
        products.map((product, i) => <ProductCard product={product} key={i} />)}
      {category !== "" &&
        products.map((item, i) => <ProductCard product={item} key={i} />)}
    </div>
  );
};

export default ProductDisplay;
