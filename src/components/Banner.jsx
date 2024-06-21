import styled from "styled-components";
import rightBanner from "../assets/right-banner.webp";

const Container = styled.div`
  height: 680px;
  background: #f2f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;

const TextSection = styled.section`
  width: 600px;
`;

const HeadArticle = styled.article`
  padding-bottom: 48px;
  font-size: 54px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  padding-bottom: 64px;
  font-size: 18px;
  font-weight: 400;
`;

const Button = styled.button`
  padding: 16px 18px;
  border: 2px solid #458ff6;
  background: ${({ primary }) => (primary ? "#458ff6" : "transparent")};
  color: ${({ primary }) => (primary ? "#fff" : "#458ff6")};
  margin-right: 16px;

  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const Image = styled.div`
  background-image: url(${rightBanner});
  width: 600px;
  height: 505px;
`;

export default function Banner() {
  return (
    <Container>
      <TextSection>
        <HeadArticle>доказательная медицина для всех</HeadArticle>
        <Paragraph>
          Мы еще очень молоды, но достаточно амбициозны и планируем каждого
          случайного гостя нашего сайта превратить в его постоянного
          пользователя.
        </Paragraph>
        <Button primary={+true} onClick={() => alert("Войти как врач")}>
          Войти как врач
        </Button>
        <Button onClick={() => alert("Подробнее")}>Подробнее</Button>
      </TextSection>
      <Image />
    </Container>
  );
}
