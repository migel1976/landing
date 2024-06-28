import styled from "styled-components";

import zoomerIcon from "@/assets/zoomerr-icon.svg";
import userThumb from "@/assets/user-thumb.svg";
import artVenueIcon from "@/assets/art-venue.svg";
import chevronLeft from "@/assets/chevron-left.svg";
import chevronRight from "@/assets/chevron-right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { useRef } from "react";

const data = [
  {
    id: 1,
    title: "Zoomerr",
    img: zoomerIcon,
    text: " гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.",
    href: "https://medspecial.ru/wiki/Исследование/",
    hrefText: "Иследование",
    name: "Петров Петр",
    occupation: "Невролог",
    thumb: userThumb,
  },
  {
    id: 2,
    title: "ArtVenue",
    img: artVenueIcon,
    text: " Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание, одышку и чувство стеснения в груди.",
    href: "",
    hrefText: "",
    name: "Кириллов Кирилл",
    occupation: "Пульмонолог",
    thumb: userThumb,
  },
  {
    id: 3,
    title: "Probe",
    img: zoomerIcon,
    text: " гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.",
    href: "https://medspecial.ru/wiki/Исследование/",
    hrefText: "Иследование",
    name: "Петров Петр",
    occupation: "Невролог",
    thumb: userThumb,
  },
  {
    id: 4,
    title: "Test",
    img: zoomerIcon,
    text: " гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.",
    href: "https://medspecial.ru/wiki/Исследование/",
    hrefText: "Иследование",
    name: "Петров Петр",
    occupation: "Невролог",
    thumb: userThumb,
  },
];

const Container = styled.div`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  width: 1440px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px;
  }
`;

const ContainerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  gap: 10px;
`;

const Block = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  gap: 20px;
  width: 608px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
`;

const ImgBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  height: 24px;
  span {
    font-size: 24px;
    font-weight: 700;
    color: #697077;
  }
`;
const TextBlock = styled.div`
  text-align: center;
  font: ${({ theme }) => theme.typography.bodyL};
  color: ${({ theme }) => theme.color.coolGray90};
  a {
    text-decoration: underline;
  }
`;

const PersonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    padding-bottom: 10px;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
  }
  h4 {
    font-size: 18px;
    font-weight: 400;
  }
`;

const SlideButton = styled.button`
  background: transparent;
  border: 0;
`;

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <ContainerBlock>
        <SlideButton ref={prevRef}>
          <img src={chevronLeft} />
        </SlideButton>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Block>
                <ImgBlock>
                  <img src={item.img} />
                  <span>{item.title}</span>
                </ImgBlock>
                <TextBlock>
                  <a href={item.href} target="_blank">
                    {item.hrefText}
                  </a>
                  {item.text}
                </TextBlock>
                <PersonBlock>
                  <img src={userThumb} />
                  <h1>{item.name}</h1>
                  <h4>{item.occupation}</h4>
                </PersonBlock>
              </Block>
            </SwiperSlide>
          ))}
        </Swiper>
        <SlideButton ref={nextRef}>
          <img src={chevronRight} />
        </SlideButton>
      </ContainerBlock>
    </Container>
  );
};

export default Slider;
