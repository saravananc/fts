import { Icon } from "@iconify/react";
import { Images } from "../Images/Images";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <img className="h-10" src={Images.Logo} alt="FTS Logo" />
        <p className="flex items-center text-sm font-semibold text-purple-600 text-end">
          <Icon icon="ph:phone-thin" />
          +91 9566149996
        </p>
      </div>
    </>
  );
};
export default Header;
