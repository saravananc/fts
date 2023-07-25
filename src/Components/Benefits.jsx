import { Images } from "../Images/Images";

const Benefits = () => {
    const gridItemsData = [
        {
          image: Images.BIndustry,
          title: "Trained by industry experts",
        },
        {
            image: Images.BPlacements,
            title: "100% Placement",
          },
          {
            image: Images.BIndividual,
            title: "Individual attention",
          },
          {
            image: Images.BCertificate,
            title: "Certificate of completion",
          },
          {
            image: Images.BVarioustech,
            title: "Training in Various technologies",
          },
          {
            image: Images.BLivetech,
            title: "Live Projects",
          },
      ];
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
      <div className="grid grid-cols-2 md:grid-cols-3 my-5 md:my-16">
      {gridItemsData.map((item, index) => (
        <div
          key={index}
          className="block py-3 md:py-8 bg-white rounded-lg"
        >
          <img className="mx-auto w-32 md:w-40" src={item.image} alt={item.title} />
          <h5 className="mb-2 text-sm mt-2 font-normal tracking-tight text-gray-900 dark:text-white text-center">
            {item.title}
          </h5>
        </div>
      ))}
    </div>
    </>
  );
};

export default Benefits;
