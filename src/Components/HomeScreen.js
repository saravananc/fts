import { Images } from "../Images/Images";

const HomeScreen =()=>
{
    return(
    <>
       <div className="mt-10 md:grid md:grid-cols-2">
                    <div className="md:mt-12 flex flex-col justify-evenly">
                        <p className="text-xl text-gray-400 font-semibold md:text-2xl lg:text-4xl">
                            Does Coding Fascinate You?
                        </p>
                        <p className="text-2xl text-black font-normal ">
                            <span className="block md:text-2xl lg:text-3xl xl:text-5xl md:leading-[25px] lg:leading-[50px] xl:leading-[85px] ">
                              Want to become a
                            </span>
                            <span className="block md:text-2xl lg:text-3xl xl:text-5xl md:leading-[30px] lg:leading-[50px] xl:leading-[50px] ">
                              SOFTWARE DEVELOPER?
                            </span>
                          </p>

                          
                        <p className="text-lg text-gray-400 font-normal md:text-xl lg:text-3xl">
                            FTS is the Right Choice
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Images.Banner} alt="FTS banner" />
                    </div>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-2">
                        <div className="border rounded-lg mx-0 md:mr-5 my-2 md:my-0 p-2 lg:p-6 flex justify-between">
                            <div>
                                <p className="text-black text-start text-xl my-2 ms-2">Courses</p>
                                <p className="text-black text-start text-sm my-2 ms-2">20+</p>
                            </div>
                            <div className="mt-5 me-3 text-purple-700 align-middle justify-center justify-items-center">
                                <img className="h-8 w-8" src={Images.Courses} alt="FTS courses" />
                            </div>
                        </div>
                        <div className="border rounded-lg mx-0 md:mr-5 my-2 md:my-0 p-2 lg:p-6   flex justify-between">
                            <div>
                                <p className="text-black text-start text-xl my-2 ms-2">
                                    Students
                                </p>
                                <p className="text-black text-start text-sm my-2 ms-2">12,000</p>
                            </div>
                            <div className="mt-5 me-3 text-purple-700 align-middle justify-center justify-items-center">
                                <img className="h-8 w-8" src={Images.Students} alt="FTS Students" />
                            </div>
                        </div>
                        <div className="border rounded-lg mx-0 md:mr-5 my-2 md:my-0 p-2 lg:p-6    flex justify-between">
                            <div>
                                <p className="text-black text-start text-xl my-2 ms-2">
                                    Placements
                                </p>
                                <p className="text-black text-start text-sm my-2 ms-2">100%</p>
                            </div>
                            <div className="mt-5 me-3 text-purple-700 align-middle justify-center justify-items-center">
                                <img className="h-8 w-8" src={Images.Placements} alt="FTS Placements" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-right  pb-2 md:pb-12 md:py-20">
                        <button
                            className="rounded-lg border-solid border-2 text-sm text-white bg-rose-600 hover:bg-rose-500 hover:shadow-md pl-8 pr-8 py-3">
                            Register Now
                        </button>
                    </div>
                </div>
    
    </>
    );
};

export default HomeScreen;