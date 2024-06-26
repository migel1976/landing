import "./App.css";
import NavMenu from "./components/header/NavMenu";
import SearchBar from "./components/header/SearchBar";
import TopHeader from "./components/header/TopHeader";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
        <TopHeader />
        <SearchBar />
        <NavMenu />
        <Main/>
        <Footer/>
    </>
  );
}

export default App;
