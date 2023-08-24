import Header from "./Header";
import Headings from "./reusableComponents/Headings";
import InputBlock from "./reusableComponents/inputBlock/InputBlock";
import "./reusableComponents/inputBlock/InputBlock.css";

const Section1 = () => {
  return (
    <>
      <div className="section1">
        <Header />
        <Headings />
        <InputBlock />
      </div>
      <hr className="bg-dark" />
    </>
  );
};

export default Section1;
