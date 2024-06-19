import styled from "styled-components";
import rightBanner from "../assets/right-banner.png";

const divStyleUpper = {
  marginRight: "100px",
  maxWidth: "600px",
};

const divStyleBottom = {
  paddingBottom: "80px",
};

const Main = styled.div`
  background: #f2f4f8;
`;

const Container = styled.div`
  background: #f2f4f8;
  maxheight: 208px;

  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const HeadText = styled.div`
  font-size: 54px;
  font-weight: 700;
`;
const SubText = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  font-size: 18px;
  font-weight: 200;
`;

const Button = styled.button`
  padding: 16px 18px;
  border: 2px solid #458ff6;
  background: ${(props) => (props.primary ? "#458ff6" : "")};
  color: ${(props) => (props.primary ? "White" : "#458ff6")};
  margin-right: 16px;

  font-size: 20px;
  font-weight: 500;
  cursor: grab;
`;

const Image = styled.div`
  background-image: url(${rightBanner});
  width: 600px;
  height: 505px;
`;

export default function Banner() {
  return (
    <Main>
      <Container>
        <div style={divStyleUpper}>
          <HeadText>ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</HeadText>
          <SubText>
            Мы еще очень молоды, но достаточно амбициозны и планируем каждого
            случайного гостя нашего сайта превратить в его постоянного
            пользователя.
          </SubText>
          <Button primary="true" onClick={() => alert("Войти как врач")}>
            Войти как врач
          </Button>
          <Button onClick={() => alert("Подробнее")}>Подробнее </Button>
        </div>
        <div style={divStyleBottom}>
          <Image></Image>
        </div>
      </Container>
    </Main>
  );
}
