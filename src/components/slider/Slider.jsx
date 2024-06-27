import styled from "styled-components";
import zoomerIcon from "../../assets/zoomerr.png";
import userThumb from "../../assets/user-thumb.png";
import artVenueIcon from "../../assets/art-venue.png";
import chevronLeft from "../../assets/chevron-left.png";
import chevronRight from "../../assets/chevron-right.png";
import { useRef } from "react";
import { useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Container = styled.div`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  width: 1440px;
`;

const ContainerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 80px;
  padding-block: 120px;
  gap: 10px;
`;

const Block = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 40px;
  padding-block: 20px;

  gap: 20px;
  width: 608px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
`;

const ImgBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const Chevron = styled.div`
  width: 24px;
  height: 24px;
`;

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
];

const SwiperNavigations = () => {
  const swiper = useSwiper();

  return (
    <div className="navigation-btns">
      <button onClick={() => swiper.slidePrev()}>PREV</button>
      <button onClick={() => swiper.slideNext()}>NEXT</button>
    </div>
  );
};

const Slider = () => {
  const swiper = useSwiper();

  return (
    <Container>
      <ContainerBlock>
        <Swiper spaceBetween={20} slidesPerView={2}>
          <Chevron className="navigation-btns">
            {/* почему то не срабатывает swiper :( */}
            <img src={chevronLeft} onClick={() => swiper.slidePrev()} />
          </Chevron>
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

          {/* <Chevron> */}
          <Chevron className="navigation-btns">
            {/* почему то не срабатывает swiper :( */}
            <img src={chevronRight} onClick={() => swiper.slideNext()} />
          </Chevron>

          {/* если подключить отдельно этот компонент то срабатывает swiper */}
          {/* <SwiperNavigations /> */}
        </Swiper>
      </ContainerBlock>
    </Container>
  );
};

export default Slider;
