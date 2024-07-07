import "./App.css";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer"
import About from "./components/aboutProject/About";
import PageHeader from "./components/header/PageHeader";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      <PageHeader />
        <About/>
        <Banner />
       <Footer/>
    </>
  );
}

export default App;
