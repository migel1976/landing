import "./App.css";
import NavMenu from "./components/header/NavMenu";
import SearchBar from "./components/header/SearchBar";
import TopHeader from "./components/header/TopHeader";
import About from "./components/aboutProject/About";

function App() {
  return (
    <>
        <TopHeader />
        <SearchBar />
        <NavMenu />
        <About/>
    </>
  );
}

export default App;
