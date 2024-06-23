import styled from "styled-components";

const elementMenu = {
    fisrtList: [{name:'Кардиология', url:'/1'}, {name:'Терапия', url:'/2'}, {name:'Флебология', url:'/3'}, {name:'Травмы', url:'/4'}],
    second: [{name:'Педиатрия', url:'/1'}, {name:'Инфекции', url:'/2'}, {name:'Неврология', url:'/3'}, {name:'Фтизиатрия', url:'/4'}],
    third: [{name:'Новости здравоохранения', url:'/1'}, {name:'Открытия', url:'/2'}, {name:'Документы', url:'/3'}, {name:'Справочники', url:'/4'}],
}

const List = styled.ul`
margin-top: 28px;
`

export const CopyrightList = styled(List)`
margin-top: 0;
display:flex;
gap:24px;
`

const ListItem = styled.li`
font-size: ${({theme}) => theme.typography.buttonM};
margin-bottom:16px;
&:last-child {
    margin-bottom:0px;
}
`

export const CopyrightListItem = styled(ListItem)`
margin-bottom: 0;
`

export const ItemLink = styled.a`
font:${({theme}) => theme.typography.buttonM};
color:${({theme}) => theme.color.white};
&:hover {
    color: ${({theme}) => theme.color.coolGray20};
}
`


const FooterMenuList = ({list}) => {
    return ( 
        <List>
            {list.map(el => 
            <ListItem key={el.name}><ItemLink href={el.url}>{el.name}</ItemLink></ListItem>
        )}
        </List>
     );
}
 
export default FooterMenuList;