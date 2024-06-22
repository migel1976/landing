import { styled } from "styled-components";

const searchCategories = [
  { name: "Все категории", value: "all" },
  { name: "Танометры", value: "tanometers" },
  { name: "Дерматология", value: "dermatology" },
  { name: "Инфекционные болезни", value: "infectious" },
  { name: "Кардиология", value: "cardiology" },
  { name: "Неврология", value: "neurology" },
  { name: "Общая медицина", value: "general" },
  { name: "Терапия", value: "therapy" },
  { name: "Хирургия", value: "surgery" },
];

const SearchSelectWrap = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.color.coolGray60};

    transition: transform 300ms ease-out;
  }

  &:focus-within svg {
    transform: rotate(180deg) translateY(50%);
  }
`;

const StyledSearchSelect = styled.select`
  position: relative;

  padding: 12px 16px;
  height: 100%;

  border: none;
  border-left: 1px solid ${({ theme }) => theme.color.coolGray30};
  background-color: ${({ theme }) => theme.color.coolGray10};
  appearance: none;

  font: ${({ theme }) => theme.typography.bodyM};
  color: ${({ theme }) => theme.color.coolGray60};

  &:focus {
    outline: 3px solid ${({ theme }) => theme.color.primary60};
  }
`;

const SearchCategory = styled.option`
  font: ${({ theme }) => theme.typography.menu};
  color: ${({ theme }) => theme.color.coolGray90};

  &:hover,
  &:checked {
    background-color: ${({ theme }) => theme.color.primary30};
  }
`;

function ArrowSvg() {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.07066 5.31388L12.0207 0.363882C12.1129 0.268372 12.2232 0.19219 12.3453 0.139781C12.4673 0.0873716 12.5985 0.0597853 12.7313 0.0586315C12.864 0.0574777 12.9957 0.0827794 13.1186 0.13306C13.2415 0.183341 13.3532 0.257594 13.4471 0.351487C13.5409 0.44538 13.6152 0.557032 13.6655 0.679928C13.7158 0.802824 13.7411 0.934504 13.7399 1.06728C13.7388 1.20006 13.7112 1.33128 13.6588 1.45329C13.6063 1.57529 13.5302 1.68564 13.4347 1.77788L7.77766 7.43488C7.59013 7.62235 7.33582 7.72767 7.07066 7.72767C6.80549 7.72767 6.55118 7.62235 6.36366 7.43488L0.706655 1.77788C0.611145 1.68564 0.534963 1.57529 0.482554 1.45329C0.430145 1.33128 0.402559 1.20006 0.401405 1.06728C0.400251 0.934504 0.425553 0.802824 0.475834 0.679928C0.526115 0.557032 0.600368 0.44538 0.69426 0.351487C0.788153 0.257594 0.899805 0.183341 1.0227 0.13306C1.1456 0.0827794 1.27728 0.0574777 1.41006 0.0586315C1.54284 0.0597853 1.67406 0.0873716 1.79606 0.139781C1.91806 0.19219 2.02841 0.268372 2.12066 0.363882L7.07066 5.31388Z" />
    </svg>
  );
}

function SearchSelect() {
  return (
    <SearchSelectWrap>
      <StyledSearchSelect>
        {searchCategories.map((category) => (
          <SearchCategory value={category.value} key={category.value}>
            {category.name}
          </SearchCategory>
        ))}
      </StyledSearchSelect>
      <ArrowSvg />
    </SearchSelectWrap>
  );
}

export default SearchSelect;
