import { useState } from "react";

import StarRatings from "react-star-ratings";

const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="ProductCard">
      <a
        href={`/product/${product.id}`}
        className="flex items-center justify-center"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <img src={product.image} alt="" className="m-auto h-[200px]" />
      </a>
      <div>
        <a
          href={`/product/${product.id}`}
          className={`hover:underline ${hover ? "underline" : ""}`}
        >
          <h3 className="font-bold">{product.title}</h3>
        </a>
        <p>${product.price.toFixed(2)}</p>
        <StarRatings
          rating={product.rating.rate}
          starDimension="15px"
          starSpacing="1px"
          starRatedColor="rgb(0, 62, 41)"
          starEmptyColor="rgb(204, 227, 219)"
        />
      </div>
      <div className="badge badge-outline">
        {product.category[0].toUpperCase() + product.category.slice(1)}
      </div>
    </div>
  );
};

export default ProductCard;
