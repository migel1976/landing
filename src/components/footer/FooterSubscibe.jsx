import styled from "styled-components";
import FooterLogo from "./FooterLogo";

const link1 = "../../assets/linkedin.svg"

const mailIcon = 'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.598 7L11.345 12.12C11.5281 12.2831 11.7648 12.3732 12.01 12.3732C12.2552 12.3732 12.4919 12.2831 12.675 12.12L18.423 7H5.598ZM20 8.273L14.006 13.614C13.4565 14.1037 12.7461 14.3744 12.01 14.3744C11.2739 14.3744 10.5635 14.1037 10.014 13.614L4 8.254V17H20V8.273ZM4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5V5Z" fill="%23697077"/></svg>'


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