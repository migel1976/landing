import SearchInput from "./SearchInput";
import styled from "styled-components";
import logo from "@/assets/logo.svg";
import NavMenu from "./NavMenu";

const StyledSlidingMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.x2};

  padding: 24px 16px;

  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;
  transform: translateX(${(p) => (p.$isOpen ? "0vw" : "-100vw")});

  transition: transform 300ms ease-out;

  background-color: ${({ theme }) => theme.color.white};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  padding: 16px 12px;

  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary60};
  border: 2px solid ${({ theme }) => theme.color.primary60};

  font: ${({ theme }) => theme.typography.buttonM};
`;

function SlidingMenu({ isOpen, toggleMenu }) {
  return (
    <StyledSlidingMenu $isOpen={isOpen}>
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
      <SearchInput />
      <NavMenu />
      <CloseButton onClick={toggleMenu}>Закрыть меню</CloseButton>
    </StyledSlidingMenu>
  );
}

export default SlidingMenu;
