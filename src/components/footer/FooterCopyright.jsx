import styled from "styled-components";
import {List, ListItem, ItemLink } from "./FooterMenuList";

const listItems = [{name:'Медицина', link:'/'}, {name:'Наука', link:'/'}, {name:'Инновации', link:'/'}]

const Copyright = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin:48px 0 40px;
@media ${({theme}) => theme.media.tablet} {
    flex-direction:column;
    row-gap:36px;
    margin-bottom:0;
}
`

const CopyrightList = styled(List)`
margin-top: 0;
display:flex;
gap:24px;
`

const CopyrightListItem = styled(ListItem)`
margin-bottom: 0;
`

const CopyrightText = styled.p`
font: ${({theme}) => theme.typography.bodyS};
text-align:start;
@media ${({theme}) => theme.media.tablet} {
    font: ${({theme}) => theme.typography.bodyXs};
    text-align:center;
}
`



const FooterCopyright = () => {
    return ( 
        <Copyright>
            <CopyrightText>Тестовая компания @ 2023. Все&nbsp;права&nbsp;защищены</CopyrightText>
            <CopyrightList>
                {listItems.map(el =><CopyrightListItem key={el.name}><ItemLink href={el.link}>{el.name}</ItemLink></CopyrightListItem> )}
            </CopyrightList>
        </Copyright>
     );
}
 
export default FooterCopyright;