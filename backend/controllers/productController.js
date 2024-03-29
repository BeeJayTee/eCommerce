// get category iamges -- first image for each product in the category
const getCategoryImages = async (req, res) => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const getFirstCategoryImage = async (category) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].category === category) {
        return { image: data[i].image, category: data[i].category };
      }
    }
  };
  const electronicsImage = await getFirstCategoryImage("electronics");
  const mensClothingImage = await getFirstCategoryImage("men's clothing");
  const jeweleryImage = await getFirstCategoryImage("jewelery");
  const womensClothingImage = await getFirstCategoryImage("women's clothing");
  res.status(200).json({
    products: [
      electronicsImage,
      mensClothingImage,
      jeweleryImage,
      womensClothingImage,
    ],
  });
};

const getAllProducts = async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const getRandomProduct = async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const num = Math.floor(Math.random() * 20);
    res.status(200).json(data[num]);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const getProductCategories = async (req, res) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const json = await response.json();
    res.status(200).json(json);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = {
  getCategoryImages,
  getAllProducts,
  getRandomProduct,
  getProductCategories,
  getSingleProduct,
};
