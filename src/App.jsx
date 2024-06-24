import "./App.css";
import NavMenu from "./components/header/NavMenu";
import SearchBar from "./components/header/SearchBar";
import TopHeader from "./components/header/TopHeader";
import Form from './components/form/Form'

function App() {
  return (
    <>
      <TopHeader />
      <SearchBar />
      <NavMenu />
      <Form />
    </>
  );
}

export default App;
