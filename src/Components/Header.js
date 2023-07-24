import { Icon } from "@iconify/react";
import { Images } from "../Images/Images";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <img className="h-10" src={Images.Logo} alt="FTS Logo" />
       
        <p className="flex items-center text-sm font-semibold text-fuchsia-700 text-end">
          <Icon icon="ph:phone-thin" />
          +91 8438385454
        </p>
      </div>
    </>
  );
};
export default Header;
