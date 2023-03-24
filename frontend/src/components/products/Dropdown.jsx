import { useEffect } from "react";
import { useCategoryStore } from "../../store/categoryStore";

const Dropdown = () => {
  const categories = useCategoryStore((state) => state.categories);
  const setCategories = useCategoryStore((state) => state.setCategories);
  const category = useCategoryStore((state) => state.category);
  const setCategory = useCategoryStore((state) => state.setCategory);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:4141/products/categories");
      const data = await response.json();
      setCategories(data);
    };

    getCategories();
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <select
      className="select w-full max-w-xs border border-stone-200"
      defaultValue={category}
      onChange={(e) => handleChange(e)}
    >
      <option>Select A Category</option>
      {categories.map((category, i) => (
        <option key={i}>{category[0].toUpperCase() + category.slice(1)}</option>
      ))}
    </select>
  );
};

export default Dropdown;
