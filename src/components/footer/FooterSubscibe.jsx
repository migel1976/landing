import styled from "styled-components";
import FooterLogo from "./FooterLogo";


const Subscribe = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom:48px;
    @media ${({theme}) => theme.media.tablet} {
        flex-direction: column;
        row-gap:48px;
    }
`

const Form = styled.form`
    position:relative;
    display:flex;
    align-items:center;
    column-gap: 16px;
    &:before {
        content:'';
        position:absolute;
        background-image: url("src/assets/mail_icon.svg");
        background-repeat:no-repeat;
        top:13px;
        left:16px;
        width:24px;
        height:24px;
    }
    @media ${({theme}) => theme.media.tablet} {
        column-gap: 8px;
    }
    @media ${({theme}) => theme.media.phone} {
        flex-direction:column;
        row-gap:12px;
    }
        
`

const InputForm = styled.input`
    width:261px;
    height:48px;
    background:${({theme}) => theme.color.coolGray10};
    color:${({theme}) => theme.color.coolGray60};
    padding: 16px 13px 16px 48px;
    border: none;
    &:focus {
        outline: none;
        background:${({theme}) => theme.color.white};
    }
    @media ${({theme}) => theme.media.tablet} {
        width: 193px;
        padding: 16px 46px 16px 48px;
    }
    @media ${({theme}) => theme.media.phone} {
        width:100%;
    }
`

const ButtonForm = styled.button`
    padding: 16px 28px;
    font: ${({theme}) => theme.typography.buttonM}
    letter-spacing:0.5px;
    color:${({theme}) => theme.color.white};
    background:#458FF6;
    cursor:pointer;
    border:none;
    transition:all .1s ease-in;
    &:hover {
        background:${({theme}) => theme.color.primary60};
    }
    &:focus {
        outline: none;
    }
    @media ${({theme}) => theme.media.phone} {
        width:100%;
    }
`

const FooterSubscriber = () => {
    return ( 
        <Subscribe>
            <FooterLogo/>
            <Form>
                <InputForm placeholder="Подписаться на рассылку"/>
                <ButtonForm>Подписаться</ButtonForm>
            </Form>
        </Subscribe>
     );
}
 
export default FooterSubscriber;