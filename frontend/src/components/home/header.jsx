import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="text-content md:absolute md:top-32 md:left-32 md:w-[500px] py-16 px-8 md:px-0 md:py-0">
        <h1 className="text-[#003E29] text-5xl lg:text-6xl font-bold mb-4">
          Shopping and Department Store
        </h1>
        <p className="text-xl lg:text-lg font-medium">
          We provide with an optimal shopping experience. Buying is easy, you
          give us money, we give you the thing you gave us money for.
        </p>
      </div>
    </div>
  );
};

export default Header;
