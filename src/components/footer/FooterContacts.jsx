import styled from "styled-components";
import { ListTitle, SocialTitle } from "./FooterMenu";
import appStore from "../../assets/app-store.svg";
import googleStore from "../../assets/google-play.svg";
import youtubeIcon from "../../assets/youtube.svg";
import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";


const ShopWrapper = styled.div`
display:flex;
align-items:center;
column-gap: 8px;
padding: 28px 20px 38px 0;
@media ${({theme}) => theme.media.tablet} {
    padding-right: 0;
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
                <img src={appStore} alt="App Store" />
                </ShopLink>
                <ShopLink>
                    <img src={googleStore} alt="Google Play" />
                </ShopLink>
            </ShopWrapper>
            <SocialTitle>Присоединиться к нам</SocialTitle>
            <SocialWrapper>
                <SocialLink href="#">
                    <img src={youtubeIcon} alt="Youtube" />
                </SocialLink>
                <SocialLink href="#">
                    <img src={facebookIcon} alt="Facebook" />
                </SocialLink>
                <SocialLink href="#">
                    <img src={twitterIcon} alt="Twitter" />
                </SocialLink>
                <SocialLink href="#">
                    <img src={instagramIcon} alt="Instagram" />
                </SocialLink>
                <SocialLink href="#">
                    <img src={linkedinIcon} alt="Linkedin" />
                </SocialLink>            
            </SocialWrapper>
        </BlockContact>
     );
}
 
export default FooterContacts;

