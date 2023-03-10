import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  return (
    <div className="Navbar container m-auto pt-4 lg:pt-0">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Navbar;
