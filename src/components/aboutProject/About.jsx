import styled from "styled-components";
import CardsContent from "./CardsContent";


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
margin-bottom:16px;
`

const TextBody = styled.p`
font: ${({theme}) => theme.typography.bodyL};
@media ${({theme}) => theme.media.tablet} {
    font: ${({theme}) => theme.typography.bodyM};
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

                <CardsContent/>
                </ContentWrapper>
 
            </Container>
        </StyledAbout>
     );
}
 
export default About;