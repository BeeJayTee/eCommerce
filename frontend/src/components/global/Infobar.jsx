const Inforbar = () => {
  return (
    <div className="InfoBar py-4 bg-[#003E29] text-white text-xs">
      <div className="flex justify-center md:justify-between container m-auto">
        <div className="hidden md:block">
          <span>☎ (123) 456-7890</span>
        </div>
        <div className="flex gap-6">
          <span>Get 50% off selected items</span>
          <span>|</span>
          <span>
            <a href="#" className="underline">
              Shop Now
            </a>
          </span>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="hover:cursor-pointer px-1">
            <a>Eng⌵</a>
          </div>
          <div className="hover:cursor-pointer px-1">
            <a>Location⌵</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inforbar;
