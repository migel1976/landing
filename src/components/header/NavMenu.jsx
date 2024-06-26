import styled from "styled-components";
import menuIcon from "../../assets/menu-icon.svg";

const menuItems = [
  { name: "Главная", href: "#main" },
  { name: "О проекте", href: "#about" },
  { name: "Статьи", href: "#articles" },
  { name: "Отзывы", href: "#testemonies" },
  { name: "Знания", href: "#knowledge-base" },
  { name: "Вопросы", href: "#faq" },
  { name: "Цены", href: "#prises" },
  { name: "Оставить заявку", href: "#contact-form" },
  { name: "Спонсоры", href: "#sponsors" },
];

const OuterContainer = styled.div`
  font: ${({ theme }) => theme.typography.menu};
  color: ${({ theme }) => theme.color.coolGray90};

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.coolGray10};
  }
`;

const NavMenuWrap = styled.div`
  @media (min-width: 769px) {
    padding: 8px 80px;

    width: 100%;
    max-width: 1440px;
  }
`;

const StyledNavMenu = styled.nav``;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    gap: ${({ theme }) => theme.spacing.x1};
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  padding: 12px 8px;
  width: 100%;

  color: inherit;

  transition: background-color 300ms ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary30};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary60};
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.color.white};
    outline: 2px solid ${({ theme }) => theme.color.primary60};
  }

  @media (min-width: 769px) {
    padding: 8px 16px;
  }
`;

const NavMenuButton = styled.button`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 8px 16px;

    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.coolGray30};

    cursor: pointer;

    transition: background-color 300ms ease-out;

    &:hover {
      background-color: ${({ theme }) => theme.color.primary30};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.primary60};
    }
  }
`;

function NavMenu() {
  return (
    <OuterContainer>
      <NavMenuWrap>
        <StyledNavMenu>
          <NavList>
            <NavMenuButton tabIndex="1">
              <img src={menuIcon} />
              <span>Меню</span>
            </NavMenuButton>
            {menuItems.map((item) => {
              return (
                <NavListItem key={item.href}>
                  <NavLink href={item.href} tabIndex="1">
                    {item.name}
                  </NavLink>
                </NavListItem>
              );
            })}
          </NavList>
        </StyledNavMenu>
      </NavMenuWrap>
    </OuterContainer>
  );
}

export default NavMenu;
