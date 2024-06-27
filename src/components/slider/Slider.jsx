import styled from "styled-components";
import zoomerIcon from "../../assets/zoomerr.png";
import userThumb from "../../assets/user-thumb.png";
import artVenueIcon from "../../assets/art-venue.png";
import chevronLeft from "../../assets/chevron-left.png";
import chevronRight from "../../assets/chevron-right.png";

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

export default function Slider() {
  return (
    <Container>
      <ContainerBlock>
        <Chevron>
          <img src={chevronLeft} />
        </Chevron>
        <Block>
          <ImgBlock>
            <img src={zoomerIcon} />
            <span>Zommerr</span>
          </ImgBlock>
          <TextBlock>
            <a href="https://medspecial.ru/wiki/Исследование/" target="_blank">
              Исследование
            </a>{" "}
            гласит, что наличие хороших навыков чтения в детском возрасте
            является предиктором высокого уровня интеллекта у молодых взрослых
            людей.
          </TextBlock>
          <PersonBlock>
            <img src={userThumb} />
            <h1>Петров Петр</h1>
            <h4>Невролог</h4>
          </PersonBlock>
        </Block>
        <Block>
          <ImgBlock>
            <img src={artVenueIcon} />
            <span>ArtVenue</span>
          </ImgBlock>
          <TextBlock>
            Астма - это хроническое заболевание легких. Симптомы заболевания
            включают кашель, свистящее дыхание, одышку и чувство стеснения в
            груди.
          </TextBlock>
          <PersonBlock>
            <img src={userThumb} />
            <h1>Кириллов Кирилл</h1>
            <h4>Пульмонолог</h4>
          </PersonBlock>
        </Block>
        <Chevron>
          <img src={chevronRight} />
        </Chevron>
      </ContainerBlock>
    </Container>
  );
}
