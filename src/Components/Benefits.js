import { Images } from "../Images/Images";

const Benefits = () => {
  return (
    <>
      <article className="mt-10">
        <p className="text-black text-2xl md:text-4xl ">Our Benefits</p>
        <p className="line-clamp-3 mt-3 text-sm md:text-lg">
          Our courses at FTS Academy are taught by industry experts, ensuring
          that you receive valuable insights <br />
          and guidance from professionals who have hands-on experience in the
          field.
        </p>
      </article>
      <div className="grid grid-cols-2 md:grid-cols-3  my-5 md:my-16 ">
                    <div
                        className="block  py-3 md:py-8  bg-white rounded-lg ">
                        <img className="mx-auto w-32 md:w-40" src={Images.BIndustry} alt="trained"/>
                        <h5
                            className="mb-2 text-sm mt-2 font-normal tracking-tight text-gray-900 dark:text-white text-center">
                            Trained by industry experts</h5>
                    </div>
                    <div
                        className="block  py-3 md:py-8  bg-white  rounded-lg ">
                        <img className="mx-auto w-32 md:w-40" src={Images.BPlacements} alt="100 percent placement"/>
                        <h5
                            className="mb-2 text-sm mt-2 font-normal tracking-tight text-gray-900 dark:text-white text-center">
                            100% Placement</h5>
                    </div>
                    <div
                        className="block  py-3 md:py-8  bg-white  rounded-lg">
                        <img className="mx-auto w-32 md:w-40" src={Images.BIndividual} alt="individual"/>
                        <h5
                            className="mb-2 text-sm mt-2 font-normal tracking-tight text-gray-900 dark:text-white text-center">
                            Individual attention</h5>
                    </div>
                    <div
                        className="block  py-3 md:py-8  bg-white  rounded-lg ">
                        <img className="mx-auto w-32 md:w-40" src={Images.BCertificate} alt="certificate"/>
                        <h5
                            className="mb-2 text-sm mt-2 font-normal tracking-tight text-gray-900 dark:text-white text-center">
                            Certificate of completion</h5>
                    </div>
                    <div
                        className="block  py-3 md:py-8  bg-white rounded-lg">
                        <img className="mx-auto w-32 md:w-40" src={Images.BVarioustech} alt="training"/>
                        <h5
                            className="mb-2 text-sm mt-2 font-normal tracking-tight text-gray-900 dark:text-white text-center">
                            Training in Various technologies </h5>
                    </div>
                    <div
                        className="block  py-3 md:py-8  bg-white rounded-lg">
                        <img className="mx-auto w-32 md:w-40" src={Images.BLivetech} alt="live projects"/>
                        <h5
                            className="mb-2 text-sm mt-2 font-normal tracking-tight text-gray-900 dark:text-white text-center">
                            Live Projects</h5>
                    </div>
                </div>

    </>
  );
};

export default Benefits;
