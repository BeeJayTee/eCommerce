import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import QuantitySelector from "../components/product/QuantitySelector";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        "http://localhost:4141/products/single/" + id
      );
      const json = await response.json();
      setProduct(json);
      setRating(json.rating.rate);
    };
    getProduct();
  }, []);

  return (
    <div className="Product border-t py-8">
      <div className="container flex flex-col lg:flex-row gap-x-32 justify-center m-auto">
        <div className="m-auto lg:m-0 w-1/2 lg:w-1/4 rounded-md">
          <img src={product.image} alt="" />
        </div>
        <div className="flex flex-col gap-y-4 m-auto mt-8 lg:mt-0 px-8 md:px-0 lg:m-0 md:w-3/4 lg:w-1/3">
          <h1 className="text-4xl">{product.title}</h1>
          <p>{product.description}</p>
          <StarRatings
            rating={rating}
            starDimension="15px"
            starSpacing="1px"
            starRatedColor="rgb(0, 62, 41)"
            starEmptyColor="rgb(204, 227, 219)"
          />
          <div className="border-t-4 my-4"></div>
          <div className="price">
            <p>
              <span className="text-3xl text-[#003E29] font-bold">
                ${product.price}
              </span>{" "}
              <span className="text-sm">
                or ${Math.round((product.price / 6) * 100) / 100} for 6 months
              </span>
            </p>
            <p className="text-xs text-stone-400">
              with{" "}
              <a href="#" className="font-bold text-stone-500 hover:underline">
                non-predatory
              </a>{" "}
              financing
            </p>
          </div>
          <div className="border-t-4 my-4"></div>
          <QuantitySelector />
        </div>
      </div>
    </div>
  );
};

export default Product;
