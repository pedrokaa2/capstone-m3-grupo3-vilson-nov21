import { InputContainer, Inputs, ErrorDiv } from "./style";

function Input({ placeholder, register, error, name, ...rest }) {
  return (
    <InputContainer isWrong={!!error}>
      <Inputs {...rest} {...register(name)} placeholder={placeholder} />
      <ErrorDiv>{!!error && <span>{error}</span>}</ErrorDiv>
    </InputContainer>
  );
}

export default Input;
