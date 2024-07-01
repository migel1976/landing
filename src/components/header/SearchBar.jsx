import { styled } from "styled-components";
import logo from "../../assets/logo.svg";
import SearchInput from "./SearchInput";

const OuterContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;

  margin: 0 auto;
  padding-block: ${({ theme }) => theme.spacing.x3};
  padding-inline: ${({ theme }) => theme.spacing.x10};

  max-width: 1440px;
`;

const Logo = styled.img`
  display: block;

  @media (max-width: 980px) {
    display: none;
  }
`;

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
      <Logo src={logo} />
      <SearchInput hasCategories />
      <Button>Поиск</Button>
    </OuterContainer>
  );
}

export default SearchBar;
