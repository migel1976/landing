import { styled } from "styled-components";
import searchIcon from "@/assets/search-icon.svg";
import SearchSelect from "./SearchSelect";

const Search = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.x1};

  background-color: ${({ theme }) => theme.color.coolGray10};
  border-bottom: 1px solid ${({ theme }) => theme.color.coolGray30};

  font: ${({ theme }) => theme.typography.menu};

  &:has(input:focus) {
    outline: 3px solid ${({ theme }) => theme.color.primary60};
  }

  @media (min-width: 768px) {
    flex-grow: 1;

    border: 1px solid ${({ theme }) => theme.color.coolGray30};
  }
`;

const SearchInputWrap = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.x1};

  padding: 12px 0 12px 16px;
`;

const SearchInputField = styled.input`
  flex-grow: 1;

  padding-top: 4px;
  padding-inline: ${({ theme }) => theme.spacing.x1};

  line-height: 0.5;

  background-color: transparent;
  border: 0;
  outline: none;

  appearance: none;

  &::placeholder {
    font: ${({ theme }) => theme.typography.bodyM};
  }
`;

const SearchIcon = styled.img``;

function SearchInput({ hasCategories }) {
  return (
    <Search>
      <SearchInputWrap>
        <SearchIcon src={searchIcon} />
        <SearchInputField
          type="search"
          placeholder="Поиск по ..."
          aria-label="поиск"
        />
      </SearchInputWrap>
      {hasCategories && (
        <SearchSelect
          name="search-categories"
          aria-label="категории для поиска"
        ></SearchSelect>
      )}
    </Search>
  );
}

export default SearchInput;
