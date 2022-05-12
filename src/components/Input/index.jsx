import { InputContainer, Inputs } from "./style";

function Input({ placeholder, ...rest }) {
  return (
    <InputContainer {...rest} >
      <Inputs  placeholder={placeholder} />
    </InputContainer>
  );
}

export default Input;
