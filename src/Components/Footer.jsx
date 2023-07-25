import { Icon } from "@iconify/react";
import { Images } from "../Images/Images";

const Footer =()=>
{
    return(
        <>

         {/* <div className="lg:hidden w-full ">
                    <div className="pb-20 flex flex-col px-3">
                        <div className="flex justify-between py-2">
                            <div className="flex items-center space-x-1">
                                <Icon icon="fluent:location-16-regular" />
                                <p className="text-black text-sm">P.Velur</p>
                            </div>

                            <div className="flex space-x-2">
                            <a href="google.com"><img className="h-8 w-8" src={Images.Google} alt="FTS google" /></a>
                            <a href="fb.com"><img className="h-8 w-8" src={Images.FB} alt="FTS facebook" /></a>
                            <a href="twitter.com"><img className="h-8 w-8" src={Images.Twitter} alt="FTS twitter" /></a>
                            </div>
                        </div>
                        <div className="text-gray-400 text-xs text-center mt-2 md:mt-0">
                            <p>Copyrights &copy; ftsacademy.com 2023</p>
                        </div>
                    </div>
                </div> */}
        <div className="hidden lg:block fixed bottom-0 w-10/12">
                    <div
                        className="py-1 md:py-5 mb-16 md:mb-0 flex justify-between pr-10 flex-col items-center md:flex-row md:items-center md:space-x-2 bg-gray-100">
                        <div className="flex items-center space-x-1 pl-14">
                            <Icon icon="fluent:location-16-regular" />
                            <p className="text-black text-sm">P.Velur</p>
                        </div>
                        <div className=" text-xs text-gray-400 text-center mt-2 md:mt-0 md:text-left">
                            <p>Copyrights &copy; ftsacademy.com 2023</p>
                        </div>
                        <div className="flex space-x-2 mt-2 md:mt-0">
                            <a href="google.com"><img className="h-8 w-8" src={Images.Google} alt="FTS google" /></a>
                            <a href="fb.com"><img className="h-8 w-8" src={Images.FB} alt="FTS facebook" /></a>
                            <a href="twitter.com"><img className="h-8 w-8" src={Images.Twitter} alt="FTS twitter" /></a>
                        </div>
                    </div>
                </div>
        </>
    );

};

export default Footer;