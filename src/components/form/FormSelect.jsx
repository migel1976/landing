import styled from "styled-components";
import menuArrow from "../../assets/menu-arrow.svg";

const OuterContainer = styled.div`
  // display: flex;
  // justify-content: space-between;

  // padding-block: ${({ theme }) => theme.spacing.x1};
  // padding-inline: ${({ theme }) => theme.spacing.x10};

  // max-width: 1440px;

  border-bottom: 1px solid #000;
  width: 100%;
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
  justify-content: space-between;
  // gap: 8px;

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

const listGroups = [
  { name: "Все категории", value: "all" },
  { name: "Группа 1", value: "group_1", status: true },
  { name: "Группа 1.1", value: "group_1", status: true },
];

function TopHeader() {
  return (
    <OuterContainer>
      <ItemContainer>
        <span>Профиль</span>
        <img src={menuArrow} className="menu-arrow" />
        <Dropdown>
          <DropdownContent>
            {listGroups.map((item) => (
              <DropdownItem key={item.name}>
                {/* <input type="checkbox" id={item.name} name={item.name} /> */}
                <input type="checkbox" id={item.name} />
                <label htmlFor={item.name}>{item.name}</label>
              </DropdownItem>
            ))}
          </DropdownContent>
        </Dropdown>
      </ItemContainer>
    </OuterContainer>
  );
}

export default TopHeader;
