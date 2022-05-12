import { Header, Logo, SpanNovoEvento, Cover, Form, DivForm } from "./style";
import LogoImg from "../../assets/boralalogo.png";
import Input from "../../components/Input";

const NewEvent = () => {
  return (
    <>
      <Header>
        <Logo src={LogoImg} alt="logo borala" />
        <SpanNovoEvento>NOVO EVENTO</SpanNovoEvento>
      </Header>
      <Cover></Cover>
      <Form>
        <DivForm>
          <Input placeholder={"NOME"} />
          <Input placeholder={"DATA"} type="data" />
          <Input placeholder={"CIDADE"} />
        </DivForm>
        <DivForm>
          <Input placeholder={"URL DA IMAGEM"} />
          <Input placeholder={"SITE DO EVENTO"} type="data" />
        </DivForm>
      </Form>
    </>
  );
};

export default NewEvent;
