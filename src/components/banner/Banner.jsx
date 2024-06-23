import styled from "styled-components";
import rightBanner from "../../assets/right-banner.webp";
import { useState } from "react";


const Container = styled.div`
  background-color: ${({ theme }) => theme.color.coolGray10};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.x10};
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
  font: ${({ theme }) => theme.typography.buttonL};
`;



const Button = styled.button`
  padding: 16px 18px;
  border: 2px solid #458ff6;
  margin-right: 16px;
  font: ${({ theme }) => theme.typography.buttonL};
  cursor: pointer;
  background: ${({ variant }) => variant==='active' && "#458ff6"};
  color: ${({ variant, theme }) => variant === 'active' ? theme.color.white : "#458ff6"};

  &:hover {
    background-color: #458ff6;
    color: ${({ theme }) => theme.color.white};
  }
`;

const ImageSection = styled.section`
  padding-block: ${({ theme }) => theme.spacing.x10};
`;

const Image = styled.div`
  background-image: url(${rightBanner});
  width: 600px;
  height: 505px;
`;

export default function Banner() {
const [val, setVal]=useState('active')

const resetActive=()=>{
  setVal(null)
}

  return (
    <Container>
      <TextSection>
        <HeadArticle>доказательная медицина для всех</HeadArticle>
        <Paragraph>
          Мы еще очень молоды, но достаточно амбициозны и планируем каждого
          случайного гостя нашего сайта превратить в его постоянного
          пользователя.
        </Paragraph>
        <Button 
        variant={val}
        onMouseEnter={resetActive}
        >Войти как врач</Button>
        <Button 
        onMouseEnter={resetActive}
        >Войти как врач</Button>
      </TextSection>
      <ImageSection>
        <Image />
      </ImageSection>
    </Container>
  );
}
