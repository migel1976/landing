import "./App.css";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import About from "./components/aboutProject/About";
import PageHeader from "./components/header/PageHeader";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <PageHeader />
      <Slider />
      <About />
      <Footer />
    </>
  );
}

export default App;
