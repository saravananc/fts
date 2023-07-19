import { Images } from "../Images/Images";

const About = () =>
{
    return(
        <>
        <article class="mt-10">
                    <p class="text-black text-2xl md:text-4xl ">Why does you choose Us?</p>
                    <p class="line-clamp-3 mt-3 text-sm md:text-xl">
                        Our courses at FTS Academy are taught by industry experts,
                        ensuring that you receive valuable insights <br />and guidance from professionals who have
                        hands-on experience in the field.
                    </p>
                </article>
                <div className="grid gap-4 md:grid-cols-4 my-16  ">
                    
                    <div className="flex flex-col justify-between items-center space-y-10 md:m-0  lg:m-5 border lg:border-0 rounded-xl w-full aspect-video">
                        <img className="h-14" src={Images.ALearners} alt="FTS learners"/>

                        <div className="flex justify-center items-center  ">
                            <div className="flex flex-col items-center">
                                <p>200+</p>
                                <p>Learners</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center space-y-10 md:m-0  lg:m-5 border lg:border-0 rounded-xl lg:w-full lg:aspect-square ">
                        <img className="h-14 mt-0 lg:mt-28" src={Images.ACourses} alt="FTS courses"/>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center">
                                <p>20+</p>
                                <p>Courses</p>
                            </div>
                        </div>
                    </div>
               
                    <div className="flex flex-col justify-between items-center space-y-10 md:m-0  lg:m-5 border lg:border-0 rounded-xl w-full aspect-video">
                        <img className="h-14" src={Images.AAwards} alt="FTS awards"/>
                        <div className="flex justify-center items-center ">
                            <div className="flex flex-col items-center">
                                <p>300+</p>
                                <p>Certified Students</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center space-y-10 md:m-0  lg:m-5 border lg:border-0 rounded-xl lg:w-full lg:aspect-square">
                        <img className="h-14 mt-0 lg:mt-28" src={Images.AEnroll} alt="FTS enroll"/>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center">
                                <p>100+</p>
                                <p>Register Enroll</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default About;