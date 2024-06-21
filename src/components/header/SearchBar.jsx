import { styled } from "styled-components";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import SearchSelect from "./SearchSelect";

const OuterContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;

  padding-block: ${({ theme }) => theme.spacing.x3};
  padding-inline: ${({ theme }) => theme.spacing.x10};

  max-width: 1440px;
`;

const Search = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.x1};

  background-color: ${({ theme }) => theme.color.coolGray10};
  border: 1px solid ${({ theme }) => theme.color.coolGray30};

  font: ${({ theme }) => theme.typography.menu};

  &:has(input:focus) {
    outline: 3px solid ${({ theme }) => theme.color.primary60};
  }
`;

const SearchInputWrap = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.x1};

  padding: 12px 0 12px 16px;
`;

const SearchInput = styled.input`
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

const Button = styled.button`
  padding-block: ${({ theme }) => theme.spacing.x2};
  padding-inline: ${({ theme }) => theme.spacing.x4};

  font: ${({ theme }) => theme.typography.buttonM};

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary60};

  border: 0;

  cursor: pointer;
`;

function SearchBar() {
  return (
    <OuterContainer>
      <img src={logo} />
      <Search>
        <SearchInputWrap>
          <SearchIcon src={searchIcon} />
          <SearchInput
            type="search"
            placeholder="Поиск по ..."
            aria-label="поиск"
          />
        </SearchInputWrap>
        <SearchSelect
          name="search-categories"
          aria-label="категории для поиска"
        ></SearchSelect>
      </Search>
      <Button>Поиск</Button>
    </OuterContainer>
  );
}

export default SearchBar;
