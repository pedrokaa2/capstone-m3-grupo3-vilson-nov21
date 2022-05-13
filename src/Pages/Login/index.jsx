import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthenticated } from "../../Providers/authenticated";
import "./styled";
import Button from "../../components/Button";
import "./styled.js";
import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Inputs,
} from "./styled";

const Login = () => {
  const { authenticated, login } = useAuthenticated();

  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Deve conter ao menos 8 dígitos")
      .matches(/[a-z]/, "Deve conter uma letra minúscula")
      .matches(/[A-Z]/, "Deve conter uma letra maiúscula")
      .matches(/[0-9]/, "Deve conter um número")
      .matches(/\W/, "Deve conter símbolos")
      .matches(/^(?!.*\s).{0,}$/, "Não pode conter espaços"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = (data) => {
    login(data, history);
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <div>
            <form onSubmit={handleSubmit(handleLogin)}>
              <h1>LOGIN</h1>

              <p>
                Não tem uma conta? Faça seu <Link to="/signup">cadastro</Link>
              </p>
              <Inputs type="text" placeholder="EMAIL" {...register("email")} />

              <span>{errors.email?.message}</span>
              <Inputs
                type="password"
                placeholder="SENHA"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
              <div>
                <Button type="submit">ENTRAR</Button>
              </div>
            </form>
          </div>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
