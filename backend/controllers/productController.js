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

const getRandomProduct = async (req, res) => {
  console.log("getting random product");
};

module.exports = { getCategoryImages, getRandomProduct };
