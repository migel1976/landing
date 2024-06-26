import "./App.css";
import NavMenu from "./components/header/NavMenu";
import SearchBar from "./components/header/SearchBar";
import TopHeader from "./components/header/TopHeader";

import Slider from "./components/slider/slider";

function App() {
  return (
    <>
      <TopHeader />
      <SearchBar />
      <NavMenu />

      <Slider />
    </>
  );
}

export default App;
