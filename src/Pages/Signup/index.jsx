import {
  AnimationContainer,
  Background,
  Container,
  Content,
  ErrorSpan,
  DivInputs,
  AiEye,
  AiEyeInvisible,
} from "./style";

import BoraLaLogo from "../../assets/boralalogo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../service/api";

import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useState } from "react";

const Signup = () => {
  const [visible, setVisible] = useState(true);

  const passwordVisible = () => {
    setVisible(!visible);
  };

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
      .matches(/^(?!.*\s).{0,}$/, "Não pode conter espaços")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const history = useHistory();

  const onSubmitFunction = ({ name, cnpj, email, password }) => {
    const user = { name, cnpj, email, password };
    api
      .post("/register", user)
      .then((_) => {
        toast.success("Conta criada com sucesso! ");
        return history.push("/login");
      })
      .catch((err) =>
        toast.error("Erro ao criar a conta, verifique os campos!")
      );
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>CADASTRO</h1>
            <p>
              Já tem uma conta <img src={BoraLaLogo} alt="borala"></img> ? Faça
              seu <Link to="/login">login</Link>
            </p>
            <DivInputs>
              <Input
                register={register("name")}
                name="name"
                placeholder="NOME DA EMPRESA"
                errorMsg={errors.name?.message}
              />
              {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
              <Input
                register={register("cnpj")}
                name="cnpj"
                placeholder="CNPJ"
                errorMsg={errors.cnpj?.message}
              />
              {errors.cnpj && <ErrorSpan>{errors.cnpj.message}</ErrorSpan>}
              <Input
                register={register("email")}
                name="email"
                placeholder="EMAIL"
                errorMsg={errors.email?.message}
              />
              {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
              <Input
                register={register("password")}
                name="password"
                type={visible ? "password" : "text"}
                placeholder="SENHA"
                errorMsg={errors.password?.message}
              />
              {errors.password && (
                <ErrorSpan>{errors.password.message}</ErrorSpan>
              )}
              {visible ? (
                <AiEye onClick={passwordVisible} />
              ) : (
                <AiEyeInvisible onClick={passwordVisible} />
              )}
              <Input
                register={register("passwordConfirm")}
                name="passwordConfirm"
                type={visible ? "password" : "text"}
                placeholder="CONFIRMAR SENHA"
                errorMsg={errors.passwordConfirm?.message}
              />
              {errors.passwordConfirm && (
                <ErrorSpan>{errors.passwordConfirm.message}</ErrorSpan>
              )}
            </DivInputs>
            <div>
              <Button type="submit">ENTRAR</Button>
            </div>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
