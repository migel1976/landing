import "./App.css";
import styled from "styled-components";
import Banner from "./components/Banner";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

function App() {
  return (
    <>
      <Title>Тестовый проект</Title>
      <Banner />
    </>
  );
}

export default App;
