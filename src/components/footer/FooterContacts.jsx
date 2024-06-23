import styled from "styled-components";
import { ListTitle, SocialTitle } from "./FooterMenu";


const ShopWrapper = styled.div`
display:flex;
align-items:center;
column-gap: 8px;
padding: 28px 20px 38px 0;
@media ${({theme}) => theme.media.tablet} {
    padding: 28px 0 38px;
}
`

const ShopLink = styled.a`
&:hover {
    cursor:pointer;
    transition:all .1s ease-in-out;
    transform: scale(1.015)
}
`

const SocialLink = styled(ShopLink)`
&:hover {
    transform: scale(1.15)
}
`

const SocialWrapper = styled.div`
display:flex;
align-items:center;
column-gap:16px;
`

const BlockContact = styled.div`
display:flex;
flex-direction:column;
width: 284px;
@media ${({theme}) => theme.media.desktop} {
    margin-top:48px;
}
@media ${({theme}) => theme.media.tablet} {
    align-items:center;
    margin-top:0px;
}
`


const FooterContacts = () => {
    return ( 
        <BlockContact>
            <ListTitle>Контакты</ListTitle>
            <ShopWrapper>
                <ShopLink>
                <img src="src\assets\app-store.svg" alt="App Store" />
                </ShopLink>
                <ShopLink>
                    <img src="src\assets\google-play.svg" alt="Google Play" />
                </ShopLink>
            </ShopWrapper>
            <SocialTitle>Присоединиться к нам</SocialTitle>
            <SocialWrapper>
                <SocialLink href="/">
                    <img src="src\assets\youtube.svg" alt="" />
                </SocialLink>
                <SocialLink href="/">
                    <img src="src\assets\facebook.svg" alt="" />
                </SocialLink>
                <SocialLink href="/">
                    <img src="src\assets\twitter.svg" alt="" />
                </SocialLink>
                <SocialLink href="/">
                    <img src="src\assets\instagram.svg" alt="" />
                </SocialLink>
                <SocialLink href="/">
                    <img src="src\assets\linkedin.svg" alt="" />
                </SocialLink>            
            </SocialWrapper>
        </BlockContact>
     );
}
 
export default FooterContacts;

