import { useEffect } from "react";

useEffect;
const CategoryCard = ({ image, category }) => {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <a
      href={`/${category}`}
      className={`CategoryCard h-48 lg:w-1/4 rounded text-center pt-6 border border-[#003E29] bg-white hover:scale-[1.02]`}
      style={style}
    >
      <h3 className="text-xl capitalize font-bold bg-white/[.6]">{category}</h3>
    </a>
  );
};

export default CategoryCard;
