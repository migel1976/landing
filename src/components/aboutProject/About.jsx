import styled from "styled-components";
import right from "../../assets/right-arrow.svg";
import iconCard1 from "../../assets/about-card1.svg";
import iconCard2 from "../../assets/about-card2.svg";
import iconCard3 from "../../assets/about-card3.svg";


const StyledAbout = styled.div`
padding: 80px 0;
color: ${({theme}) => theme.typography.coolGray90};;
@media ${({theme}) => theme.media.tablet} {
    padding: 48px 0 92px;
}
`

const Container = styled.div`
max-width:1440px;
margin: 0 auto;
padding: 0 80px;
@media ${({theme}) => theme.media.desktop} {
        padding: 0 16px;
}
`

const ContentWrapper = styled.div`
display:flex;
align-items:start;
column-gap:80px;
@media ${({theme}) => theme.media.wide} {
    flex-direction:column;
    row-gap:50px;
}
@media ${({theme}) => theme.media.tablet} {
    row-gap:32px;
}
`

const TextContent = styled.div`
display:flex;
flex-direction:column;
justify-content: start;
max-width:384px;
@media ${({theme}) => theme.media.wide} {
    max-width:816px;
}
`

const TextHeader = styled.h2`
font: ${({theme}) => theme.typography.heading2};
margin-bottom:16px;
`

const TextBody = styled.p`
font: ${({theme}) => theme.typography.bodyL};
@media ${({theme}) => theme.media.tablet} {
    font: ${({theme}) => theme.typography.bodyM};
}
`

const CardsContent = styled.div`
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
padding:0 16px 0 16px;
`

const CardTitle = styled.h5`
font: ${({theme}) => theme.typography.caption};
margin:24px 0 16px;
`

const CardDesc = styled(TextBody)`
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


const About = () => {
    return ( 
        <StyledAbout>
            <Container>
                <ContentWrapper>
                <TextContent>
                    <TextHeader>О проекте</TextHeader>
                    <TextBody>Наш проект создан группой врачей для популяризации современных медицинских знаний их&nbsp;доступности для всех, кто в&nbsp;этом заинтересован.</TextBody>
                </TextContent>

                <CardsContent>
                    <Card>
                        <img src={iconCard1} alt="Card1" />
                        <CardTitle>Консультация</CardTitle>
                        <CardDesc>На&nbsp;нашем форуме вы<br/>найдете ответы на&nbsp;вопросы</CardDesc>
                        <CardLink href="/">
                            Узнать больше
                            <img src={right} alt="Arrow-right" />
                        </CardLink>
                    </Card>

                    <Card>
                        <img src={iconCard2} alt="Card1" />
                        <CardTitle>Тесты</CardTitle>
                        <CardDesc>Вы&nbsp;можете пройти тесты на нашем сайте</CardDesc>
                        <CardLink href="/">
                            Узнать больше
                            <img src={right} alt="Arrow-right" />
                        </CardLink>
                    </Card>

                    <Card>
                        <img src={iconCard3} alt="Card1" />
                        <CardTitle>Поиск клиники</CardTitle>
                        <CardDesc>Мы&nbsp;поможем найти Вам ближайшую поликлинику</CardDesc>
                        <CardLink href="/">
                            Узнать больше
                            <img src={right} alt="Arrow-right" />
                        </CardLink>
                    </Card>
                </CardsContent>
                </ContentWrapper>
 
            </Container>
        </StyledAbout>
     );
}
 
export default About;