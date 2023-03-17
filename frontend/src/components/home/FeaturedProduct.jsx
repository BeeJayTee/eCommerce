import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

const FeaturedProduct = () => {
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("http://localhost:4141/products/single");
      const data = await response.json();
      if (response.ok) {
        setProduct(data);
        setRating(data.rating.rate);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="FeaturedProduct py-16">
      <div className="w-16 border-t m-auto"></div>
      <div className="container m-auto">
        <h3 className="text-3xl text-center mb-16 font-thin">
          Featured Product
        </h3>
        <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
          <div className="w-1/2 md:w-1/3 lg:w-1/4">
            <img src={product.image} alt="" className="w-full" />
          </div>
          <div className="px-8 md:px-0 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-slate-500">${product.price}</p>
            <StarRatings
              rating={rating}
              starDimension="15px"
              starSpacing="1px"
              starRatedColor="rgb(0, 62, 41)"
              starEmptyColor="rgb(204, 227, 219)"
            />
            <p className="mt-4">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
