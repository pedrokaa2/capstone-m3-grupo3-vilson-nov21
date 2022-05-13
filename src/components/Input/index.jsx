import { InputContainer, Inputs } from "./style";

function Input({ placeholder, register, ...rest }) {
  return (
    <InputContainer>
      <Inputs {...rest} {...register} placeholder={placeholder} />
    </InputContainer>
  );
}

export default Input;
