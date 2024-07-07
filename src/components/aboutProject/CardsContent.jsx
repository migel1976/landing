import styled from "styled-components";
import right from "../../assets/right-arrow.svg";

import iconCard1 from "../../assets/about-card1.svg";
import iconCard2 from "../../assets/about-card2.svg";
import iconCard3 from "../../assets/about-card3.svg";

const cardElements = [
    {img: iconCard1, header:'Консультация', desc:'На нашем форуме', desc1:'вы найдете ответы на вопросы', link:'#', textLink:'Узнать больше', arrow:right},
    {img: iconCard2, header:'Тесты', desc:'Вы можете пройти тесты на нашем сайте', link:'#', textLink:'Узнать больше', arrow:right},
    {img: iconCard3, header:'Поиск клиники', desc:'Мы поможем найти Вам ближайшую поликлинику', link:'#', textLink:'Узнать больше', arrow:right}
]

const StyledCardsContent = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr);
@media ${({theme}) => theme.media.wide} {
    max-width:816px;
}
@media ${({theme}) => theme.media.tablet} {
    grid-template-columns: 1fr;
    row-gap:32px;
}
`

const Card = styled.div`
display:flex;
flex-direction:column;
align-items:start;
padding:0 16px;
`

const CardTitle = styled.h5`
font: ${({theme}) => theme.typography.caption};
margin:24px 0 16px;
`

const CardDesc = styled.p`
font: ${({theme}) => theme.typography.bodyM};
`


const CardLink = styled.a`
display:flex;
column-gap:13px;
color: #458FF6;
margin:32px 0 16px;
padding-right: 22px;
font:${({theme}) => theme.typography.buttonM};
&:hover {
    color: ${({theme}) => theme.color.primary60};
}
`

const CardsContent = () => {
    return ( 
        <StyledCardsContent>
            {cardElements.map(card => 
            <Card>
                <img src={card.img} alt={card.header} />
                <CardTitle>{card.header}</CardTitle>
                {card.desc1 ? <CardDesc>{card.desc}<br/>{card.desc1}</CardDesc> : <CardDesc>{card.desc}</CardDesc>}
                <CardLink href={card.link}>
                    {card.textLink}
                    <img src={card.arrow} alt="Arrow Right" />
                </CardLink>
            </Card>)}
        </StyledCardsContent>
     );
}
 
export default CardsContent;