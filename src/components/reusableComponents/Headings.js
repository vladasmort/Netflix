import TitlesBlock from "./Titles-block";

const Headings = () => {
  const title1 = "Unlimited movies, TV shows, and more";
  const title2 = "Watch anywhere. Cancel anytime.";

  return (
    <div className="headings container d-flex  w-100">
      <div className="align-self-center mx-auto text-center">
        <TitlesBlock title1={title1} title2={title2} />
      </div>
    </div>
  );
};

export default Headings;
