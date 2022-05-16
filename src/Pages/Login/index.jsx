import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthenticated } from "../../Providers/authenticated";
import "./style";
import Button from "../../components/Button";
import BoraLaLogo from "../../assets/boralalogo.png"
import "./style.js";
import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Inputs,
  ButtonLogin
} from "./style";

const Login = () => {
  const { login } = useAuthenticated();

  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),

    password: yup.string().required("Senha obrigatória"),
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

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <div>
            <form onSubmit={handleSubmit(handleLogin)}>
              <h1>LOGIN</h1>
              <p>
                Não tem uma conta <img src={BoraLaLogo} alt="borala"></img> ? Faça seu <Link to="/signup">cadastro</Link>
              </p>
              <Inputs type="text" placeholder="EMAIL" {...register("email")} />

              <span>{errors.email?.message}</span>
              <Inputs
                type="password"
                placeholder="SENHA"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
              <ButtonLogin>
                <Button type="submit">ENTRAR</Button>
              </ButtonLogin>
            </form>
          </div>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;