import styled from "styled-components";
import FormSelect from "./FormSelect";

const Container = styled.div`
  // display:flex;
  // display-direction: column;

  box-sizing: border-box;
  margin: 0 auto;
  width: 712px;
  border: 1px solid #dde1e6;
  border-radius: 8px;

  padding-inline: 48px;
  // padding-block:48px;
  padding-bottom: 48px;
`;

const Label = styled.p`
  font: ${({ theme }) => theme.typography.bodyS};
`;
const BlockInput = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 300px;
  }
`;

const SingleInput = styled.div`
  padding-block: 14px;
  input {
    width: 100%;
  }
`;

const Input = styled.input`
  padding-block: 14px;
  //   border:none;
  //   border-bottom: 1px solid #000;
  //   background:${({ theme }) => theme.color.coolGray10};

  //   &::placeholder {
  //   padding-left:10px;
  //   font: ${({ theme }) => theme.typography.bodyM};
  //   }
`;

const Header = styled.div`
  padding-block: 48px;
  h1 {
    // font: ${({ theme }) => theme.typography.caption};
    color: red;
    font-weight: 700;
  }
`;

const FormEl = styled.form`
  input,
  textarea,
  SearchSelect,
  SelectOption {
    background: ${({ theme }) => theme.color.coolGray10};
    border: none;
    border-bottom: 1px solid #000;
  }
  input,
  textarea::placeholder {
    padding-left: 10px;
    font: ${({ theme }) => theme.typography.bodyM};
  }

  textarea::placeholder {
    padding-top: 10px;
  }

  textarea:focus {
    outline: 3px solid ${({ theme }) => theme.color.primary60};
  }

  input:focus {
    outline: 3px solid ${({ theme }) => theme.color.primary60};
  }
`;
const QuestionBlock = styled.div``;
const TextArea = styled.textarea`
  width: 100%;
`;

const SelectOption = styled.div`
  padding-top: 10px;
`;

export default function Form() {
  return (
    <Container>
      <Header>
        <h1>Начать использование</h1>
        <p>Хотите начать сотрудничать? Напишите нам</p>
      </Header>
      <FormEl>
        <BlockInput>
          <div>
            <Label>Имя</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Имя"
            />
          </div>
          <div>
            <Label>Фамилия</Label>
            <Input
              type="text"
              name="surName"
              id="surName"
              placeholder="Фамилия"
            />
          </div>
        </BlockInput>
        <SingleInput>
          <Label>Тема</Label>
          <Input
            type="text"
            name="topic"
            id="topic"
            placeholder="Сотрудничество"
          />
        </SingleInput>
        <QuestionBlock>
          <Label>Вопрос</Label>
          <TextArea rows="10" cols="45" placeholder="Ваш вопрос ..."></TextArea>
        </QuestionBlock>

        <SelectOption>
          <Label>Группы</Label>
          <FormSelect
            name="search-categories"
            aria-label="категории для поиска"
          ></FormSelect>
        </SelectOption>
      </FormEl>
      {/* <Form>
                <input></input>

            </Form> */}
    </Container>
  );
}
