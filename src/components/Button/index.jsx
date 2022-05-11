import { Container } from "./style";

const Button = ({ children, width, height, ...rest }) => {
  return (
  <Container width={width} height={height}>{children}</Container>
  );
};

export default Button;
