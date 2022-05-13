import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AnimationContainer, Background, Container, Content } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

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
              Já tem uma conta? Faça seu <Link to="/login">login</Link>
            </p>
            <Input
              register={register}
              name="name"
              placeholder="NOME DA EMPRESA"
              error={errors.name?.message}
            />
            <Input
              register={register}
              name="cnpj"
              placeholder="CNPJ"
              error={errors.cnpj?.message}
            />
            <Input
              register={register}
              name="email"
              placeholder="EMAIL"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              type="password"
              placeholder="SENHA"
              error={errors.password?.message}
            />
            <Input
              register={register}
              name="passwordConfirm"
              type="password"
              placeholder="CONFIRMAR SENHA"
              error={errors.passwordConfirm?.message}
            />
            <Button height="50px" width="350px" type="submit">
              CADASTRAR
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
