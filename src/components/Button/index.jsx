import { Container } from "./style";

const Button = ({ children, width, height, ...rest }) => {
  return (
  <Container {...rest} width={width} height={height}>{children}</Container>
  );
};

export default Button;
