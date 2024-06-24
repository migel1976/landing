import { useState } from "react";
import styled from "styled-components";
import logo from "@/assets/logo.svg";
import menuIcon from "@/assets/menu-icon.svg";
import cartIcon from "@/assets/cart-icon.svg";
import SlidingMenu from "./SlidingMenu";

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.x2};

  border-bottom: 1px solid ${({ theme }) => theme.color.coolGray20};
`;

const HeaderLogo = styled.img`
  @media (max-width: 400px) {
    height: 24px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.x1};
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.x2};

  padding: 16px 8px;

  background-color: ${({ theme }) => theme.color.white};
  border: none;
  outline: none;

  font: ${({ theme }) => theme.typography.buttonM};

  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.color.primary30};
  }
`;

function MobilePageHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <OuterContainer>
      <HeaderLogo src={logo} />
      <RightContainer>
        <MenuButton>
          <img src={cartIcon} />
        </MenuButton>
        <MenuButton onClick={toggleMenu}>
          <img src={menuIcon} />
          <span>Меню</span>
        </MenuButton>
      </RightContainer>
      <SlidingMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </OuterContainer>
  );
}

export default MobilePageHeader;
