import styled from "styled-components";
import rightBanner from "../../assets/right-banner.webp";
import { useState } from "react";

const OuterContainer = styled.div`
  background-color: ${({ theme }) => theme.color.coolGray10};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.x10};

  @media ${({ theme }) => theme.media.phone} {
    flex-direction: column;
    padding-top: 48px;
    padding-inline: 16px;
    row-gap: ${({ theme }) => theme.spacing.x4};
  }
`;

const TextSection = styled.section`
  max-width: 600px;
  @media ${({ theme }) => theme.media.phone} {
    max-width: 361px;
  }
`;

const HeadArticle = styled.h1`
  padding-bottom: 48px;
  text-transform: uppercase;
  @media ${({ theme }) => theme.media.phone} {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Paragraph = styled.p`
  padding-bottom: 64px;
  font: ${({ theme }) => theme.typography.buttonL};
  @media ${({ theme }) => theme.media.phone} {
    font: ${({ theme }) => theme.typography.buttonM};
  }
`;

const Button = styled.button`
  padding: 16px 18px;
  border: 2px solid #458ff6;
  margin-right: 16px;
  font: ${({ theme }) => theme.typography.buttonL};
  @media ${({ theme }) => theme.media.phone} {
    font: ${({ theme }) => theme.typography.buttonS};
  }
  cursor: pointer;
  background: ${({ variant }) => variant === "primary" && "#458ff6"};
  color: ${({ variant, theme }) =>
  variant === "primary" ? theme.color.white : "#458ff6"};
  ${({variant})=>variant==="primary"? 
`
  &:hover {
    background-color: #fff;
    color:#458ff6;
  }
`:
`
  &:hover {
    background-color: #458ff6;
    color: #fff;
  }
`}
`

const ImageSection = styled.section`
  padding-block: ${({ theme }) => theme.spacing.x10};
  @media ${({ theme }) => theme.media.phone} {
    padding-block: 16px;
  }
`;

const Image = styled.div`
  background-image: url(${rightBanner});
  width: 600px;
  height: 505px;
  @media ${({ theme }) => theme.media.phone} {
    background-size: 100% 100%;
    background-image: url(${rightBanner});
    width: 360px;
    height: 310px;
  }
`;

export default function Banner() {

  return (
    <OuterContainer>
      <Container>
        <TextSection>
          <HeadArticle>доказательная медицина для всех</HeadArticle>
          <Paragraph>
            Мы еще очень молоды, но достаточно амбициозны и планируем каждого
            случайного гостя нашего сайта превратить в его постоянного
            пользователя.
          </Paragraph>
          <Button variant='primary' >
            Войти как врач
          </Button>
          <Button variant='secondary'>Подробнее</Button>
        </TextSection>
        <ImageSection>
          <Image />
        </ImageSection>
      </Container>
    </OuterContainer>
  );
}
