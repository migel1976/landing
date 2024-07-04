import styled from "styled-components";
import FooterMenuList from "./FooterMenuList";
import FooterContacts from "./FooterContacts";

const elementMenu = {
    fisrtList: [{name:'Кардиология', url:'/1'}, {name:'Терапия', url:'/2'}, {name:'Флебология', url:'/3'}, {name:'Травмы', url:'/4'}],
    second: [{name:'Педиатрия', url:'/1'}, {name:'Инфекции', url:'/2'}, {name:'Неврология', url:'/3'}, {name:'Фтизиатрия', url:'/4'}],
    third: [{name:'Новости здравоохранения', url:'/1'}, {name:'Открытия', url:'/2'}, {name:'Документы', url:'/3'}, {name:'Справочники', url:'/4'}],
}

const MenuWrapper = styled.div`
display:flex;
column-gap:48px;
padding: 60px 0 48px;
border-top: 1px solid ${({theme}) => theme.color.coolGray30};
border-bottom: 1px solid ${({theme}) => theme.color.coolGray30};
justify-content: space-between;

@media ${({theme}) => theme.media.desktop} {
    flex-direction:column;
}
@media ${({theme}) => theme.media.tablet} {
    align-items:center;
    padding: 44px 0;
}
`

const MenuListWrapper = styled.div`
display: flex;
width:948px;
align-items: start;
justify-content: space-between;
@media ${({theme}) => theme.media.desktop} {
width:100%;
}
@media ${({theme}) => theme.media.tablet} {
    align-items:center;
    flex-direction:column;
}
`

export const BlockWrapper = styled.div`
width:25%;
@media ${({theme}) => theme.media.desktop} {
width:calc(100% / 3);
}
@media ${({theme}) => theme.media.tablet} {
   text-align:center;
   margin-bottom:60px;
   width:100%;
}
`

export const ListTitle = styled.h6`
font-size: 18px;
font-weight:700;
line-height: 1.1;
`

export const SocialTitle = styled(ListTitle)`
margin-bottom:20px;
`



const FooterMenu = () => {
    return ( 
        <MenuWrapper direction="row">
            <MenuListWrapper>
                <BlockWrapper>
                    <ListTitle>Для взрослых</ListTitle>
                    <FooterMenuList list={elementMenu.fisrtList}/>
                </BlockWrapper>
                <BlockWrapper>
                    <ListTitle>Для детей</ListTitle>
                    <FooterMenuList list={elementMenu.second}/>
                </BlockWrapper>
                <BlockWrapper>
                    <ListTitle>Новости</ListTitle>
                    <FooterMenuList list={elementMenu.third}/>
                </BlockWrapper>
            </MenuListWrapper>
                <FooterContacts/>
        </MenuWrapper>
     );
}
 
export default FooterMenu;