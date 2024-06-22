import "./App.css";
import NavMenu from "./components/header/NavMenu";
import SearchBar from "./components/header/SearchBar";
import TopHeader from "./components/header/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <SearchBar />
      <NavMenu />
    </>
  );
}

export default App;
