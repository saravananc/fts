import { Icon } from "@iconify/react";
import { Images } from "../Images/Images";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <img className="h-10" src={Images.Logo} alt="FTS Logo" />
       <div className="flex flex-col md:flex-row">
       <a href="tel:PHONE_NUM" className="flex items-center text-sm font-semibold text-fuchsia-700 text-end mx-3">
          <Icon icon="ph:phone-thin" />
          +91 8438385454
        </a>
        <a href="tel:PHONE_NUM" className="flex items-center text-sm font-semibold text-fuchsia-700 text-end mx-3">
        <Icon icon="emojione-monotone:telephone" />
          +91 4268796280
        </a>
       </div>
      
      </div>
    </>
  );
};
export default Header;
