import styled from "styled-components";
import zoomerIcon from "../../assets/zoomerr.png";

const Container = styled.div`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  width: 1440px;
`;

const ContainerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padiing-line: 80px;
  padding-block: 80px;
`;

const Block = styled.div`
  width: 592px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid #000;
  border-radius: 10px;
`;
const ImgBlock = styled.div``;

export default function Slider() {
  return (
    <Container>
      <ContainerBlock>
        <Block>
          <ImgBlock>
            <img src={zoomerIcon} />
            <span>Zommerr</span>
          </ImgBlock>
          Левый блок
        </Block>
        <Block>Right блок</Block>
      </ContainerBlock>
    </Container>
  );
}
