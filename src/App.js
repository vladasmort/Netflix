import "./App.css";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Sections from "./components/Sections";

function App() {
  return (
    <div className="app">
      <Section1 />
      <Sections />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
