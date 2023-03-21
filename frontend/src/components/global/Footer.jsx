import { useEffect, useState } from "react";

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:4141/products/categories");
      const json = await response.json();
      if (response.ok) {
        setCategories(json);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="w-full bg-[#003E29] py-4">
      <div className="content container m-auto text-white">
        <div className="flex flex-col items-center sm:flex-row gap-8 justify-center">
          {categories.map((category, i) => (
            <a href={``} key={i}>
              {category[0].toUpperCase() + category.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
