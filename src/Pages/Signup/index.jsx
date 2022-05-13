import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AnimationContainer, Background, Container, Content } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {
  const signupSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    cnpj: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(/[a-z]/, "Deve conter uma letra minúscula")
      .matches(/[A-Z]/, "Deve conter uma letra maiúscula")
      .matches(/[0-9]/, "Deve conter um número")
      .matches(/\W/, "Deve conter um caractere especial")
      .required("Campo obrigatório!"),
    passworConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas aaaa")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>CADASTRO</h1>
            <p>
              Já tem uma conta? Faça seu <Link to="/login">login</Link>
            </p>
            <Input register={register("name")} placeholder="NOME DA EMPRESA" />
            <Input register={register("cnpj")} placeholder="CNPJ" />
            <Input register={register("email")} placeholder="EMAIL" />
            <Input
              register={register("password")}
              type="password"
              placeholder="SENHA"
            />
            <Input
              register={register("passworConfirm")}
              type="password"
              placeholder="CONFIRMAR SENHA"
            />
            <Button height="30px" type="submit">
              CADASTRAR
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
