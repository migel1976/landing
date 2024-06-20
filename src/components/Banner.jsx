import styled from "styled-components";
import rightBanner from "../assets/right-banner.webp";

const Container = styled.div`
  height: 680px;
  background: #f2f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 80px;
`;

const LeftBlock = styled.div`
  padding-top: 80px;
  height: 520px;
  width: 600px;
`;

const RightBlock = styled.div`
  height: 505px;
  width: 600px;
`;

const HeadText = styled.div`
  padding-bottom: 48px;
  font-size: 54px;
  font-weight: 700;
`;
const SubText = styled.div`
  padding-bottom: 64px;
  font-size: 18px;
  font-weight: 200;
`;

const Button = styled.button`
  padding: 16px 18px;
  border: 2px solid #458ff6;
  background: ${({ primary }) => (primary ? "#458ff6" : "")};
  color: ${({ primary }) => (primary ? "#fff" : "#458ff6")};
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
    <Container>
      <LeftBlock>
        <HeadText>ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</HeadText>
        <SubText>
          Мы еще очень молоды, но достаточно амбициозны и планируем каждого
          случайного гостя нашего сайта превратить в его постоянного
          пользователя.
        </SubText>
        <Button primary={+true} onClick={() => alert("Войти как врач")}>
          Войти как врач
        </Button>
        <Button onClick={() => alert("Подробнее")}>Подробнее </Button>
      </LeftBlock>
      <RightBlock>
        <Image />
      </RightBlock>
    </Container>
  );
}
