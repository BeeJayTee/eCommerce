import Header from "../components/home/header";
import CardSection from "../components/home/CardSection";
import FeaturedProduct from "../components/home/FeaturedProduct";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <CardSection />
      <FeaturedProduct />
    </div>
  );
};

export default Home;
