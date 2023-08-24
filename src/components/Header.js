import logo from "../assets/images/Netflix.png";
import Language from "./reusableComponents/Language";
const Header = () => {
  return (
    <div className="header container d-flex justify-content-between align-items-center py-3">
      <div className="logo">
        <img src={logo} alt="netflix" className="n-logo" />
      </div>
      <div className="nav gap-3">
        <Language />
        <button className="btn btn-danger btn-sm">Sign in</button>
      </div>
    </div>
  );
};

export default Header;
