import styled from "styled-components";
import cartIcon from "../../assets/cart-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import menuArrow from "../../assets/menu-arrow.svg";
import userProfileIcon from "../../assets/user-profile-icon.svg";

const OuterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-block: ${({ theme }) => theme.spacing.x1};
  padding-inline: ${({ theme }) => theme.spacing.x10};

  max-width: 1440px;

  border-bottom: 1px solid #c1c7cd;
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  width: 100%;
`;
const DropdownContent = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
`;
const DropdownItem = styled.li`
  &:hover {
    background-color: ${({ theme }) => theme.color.coolGray10};
  }

  a {
    display: block;
    padding: 12px 8px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  position: relative;

  padding: 12px 8px;

  font: ${({ theme }) => theme.typography.menu};

  cursor: pointer;

  .menu-arrow {
    transition: transform 300ms ease-out;
  }

  &:hover .menu-arrow {
    transform: rotate(180deg);
  }

  &:hover ${Dropdown} {
    display: block;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

function TopHeader() {
  return (
    <OuterContainer>
      <ItemContainer>
        <img src={locationIcon} />
        <span>Москва</span>
      </ItemContainer>
      <RightContainer>
        <ItemContainer>
          <img src={userProfileIcon} />
          <span>Профиль</span>
          <img src={menuArrow} className="menu-arrow" />
          <Dropdown>
            <DropdownContent>
              <DropdownItem>
                <a href="./login/">Вход</a>
              </DropdownItem>
              <DropdownItem>
                <a href="./signup/">Регистрация</a>
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
        </ItemContainer>
        <ItemContainer>
          <img src={cartIcon} />
          <span>Корзина</span>
          <img src={menuArrow} className="menu-arrow" />
        </ItemContainer>
      </RightContainer>
    </OuterContainer>
  );
}

export default TopHeader;
