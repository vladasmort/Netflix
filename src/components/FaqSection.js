import Accordionelo from "./Accordionelo";
import InputBlock from "./reusableComponents/inputBlock/InputBlock";

const FaqSection = () => {
  const faqTitle = "Frequently Asked Questions";

  return (
    <div className="section text-center pt-5 pb-2" style={{ height: 1000 }}>
      <div className="container pt-5">
        <h1>{faqTitle}</h1>
        <Accordionelo />
        <InputBlock />
      </div>
      <hr />
    </div>
  );
};

export default FaqSection;
