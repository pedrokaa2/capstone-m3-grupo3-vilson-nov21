import { Header, Logo, SpanNovoEvento, Cover } from "./style";
import LogoImg from "../../assets/boralalogo.png";

const NewEvent = () => {
  return (
    <>
      <Header>
        <Logo src={LogoImg} alt="logo borala" />
        <SpanNovoEvento>NOVO EVENTO</SpanNovoEvento>
      </Header>
      <Cover></Cover>
    </>
  );
};

export default NewEvent;
