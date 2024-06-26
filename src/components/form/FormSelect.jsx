import styled from "styled-components";
import menuArrow from "../../assets/menu-arrow.svg";
import { useState } from "react";

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
  // display: none;
  // display: block;
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

  // a {
  //   display: block;
  //   padding: 12px 8px;
  //   width: 100%;
  //   height: 100%;
  //   text-decoration: none;
  //   color: inherit;
  // }
`;

const ItemContainer = styled.div`
  ${Dropdown} {
    display: ${({ click }) => (click ? "none" : "block")};
  }
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

  // &:hover .menu-arrow {
  //   transform: rotate(180deg);
  // }

  // &:hover ${Dropdown} {
  //   display: block;
  // }
`;

const listGroups = [
  // { name: "Все категории", value: "all" },
  // { name: "Группа 1", value: "group_1", status: true },
  // { name: "Группа 1.1", value: "group_1", status: true },
  { name: "Group 1" },
  { name: "Group 1.2" },
  {
    name: "Group 1.3",
    subgroup: [
      { name: "Group 1.3.1" },
      { name: "Group 1.3.2" },
      { name: "Group 1.3.3" },
    ],
  },
];

function TopHeader() {
  const [click, setClick] = useState(true);
  const onClickItem = () => {
    setClick((prev) => !prev);
  };

  // function createTree(obj) {
  //   return (
  //     // {obj.map((item) => (
  //     // for (let item of obj){
  //     <>
  //       {obj.map((item) => (
  //         <DropdownContent key={item.name}>
  //           <DropdownItem key={item.name}>
  //             <input type="checkbox" id={item.name} />
  //             <label htmlFor={item.name}>{item.name}</label>
  //           </DropdownItem>
  //           {createTree(obj)}
  //         </DropdownContent>
  //       ))}
  //     </>
  //   );
  // }

  function createTree(obj) {
    return (
      <DropdownContent>
        {obj.map((item) => (
          <DropdownItem key={item.name}>
            <input type="checkbox" id={item.name} />
            <label htmlFor={item.name}>{item.name}</label>
          </DropdownItem>
        ))}
      </DropdownContent>
    );
  }

  return (
    <OuterContainer>
      <ItemContainer onClick={onClickItem} click={click}>
        <span>Профиль</span>
        <img src={menuArrow} className="menu-arrow" />
        <Dropdown onClick={() => console.log("aloha")}>
          {createTree(listGroups)}
        </Dropdown>
      </ItemContainer>
    </OuterContainer>
  );
}

export default TopHeader;
