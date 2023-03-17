import { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";

const CardSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductImages = async () => {
      const response = await fetch("http://localhost:4141/products");
      const data = await response.json();
      setProducts(data.products);
    };

    getProductImages();
  }, []);

  return (
    <div className="CardSection py-16 px-8 md:px-0">
      <div className="container m-auto">
        <h2 className="text-md font-bold mb-6">Shop Our Top Categories</h2>
        <div className="flex flex-col lg:flex-row gap-16 justify-center">
          {products.map((product, i) => (
            <CategoryCard
              image={product.image}
              category={product.category}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
