import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthenticated } from "../../Providers/authenticated";

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
    <div>
      <h1>LOGIN</h1>

      <span>
        Não tem uma conta? Faça seu <Link to="/signup">cadastro</Link>
      </span>

      <form onSubmit={handleSubmit(handleLogin)}>
        <input type="text" placeholder="EMAIL" {...register("email")} />

        <span>{errors.email?.message}</span>

        <input type="password" placeholder="SENHA" {...register("password")} />

        <span>{errors.password?.message}</span>

        <div>
          <button type="submit">ENTRAR</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
