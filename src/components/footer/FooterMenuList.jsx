import styled from "styled-components";


export const List = styled.ul`
margin-top: 28px;
`

export const CopyrightList = styled(List)`
margin-top: 0;
display:flex;
gap:24px;
`

export const ListItem = styled.li`
color: red;
font ${({theme}) => theme.typography.buttonM};
margin-bottom:16px;
&:last-child {
    margin-bottom:0px;
}
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