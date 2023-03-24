import ProductCard from "./ProductCard";

const ProductDisplay = ({ products }) => {
  console.log(products);
  return (
    <div className="ProductDisplay grid grid-cols-4 auto-rows-fr gap-x-32 gap-y-16">
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductDisplay;
