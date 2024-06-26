import styled from "styled-components";
import FooterSubscriber from "./FooterSubscibe";
import FooterMenu from "./FooterMenu";
import FooterCopyright from "./FooterCopyright";


const StyledFooter = styled.footer`
    color:${({theme}) => theme.color.white};
    width:100%;
    background:linear-gradient(180deg, #67C3F3 0%, #5A98F2 100%);
    padding:48px 0;
    @media ${({theme}) => theme.media.phone} {
        padding:68px 0;
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

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterSubscriber/>
                <FooterMenu/>
                <FooterCopyright/>
            </Container>
        </StyledFooter>

     );
}
 
export default Footer;


