import { InputContainer, Inputs } from "./style";

function Input({ placeholder, register, value, ...rest }) {
  return (
    <InputContainer>
      <Inputs {...rest} {...register(value)} placeholder={placeholder} />
    </InputContainer>
  );
}

export default Input;
