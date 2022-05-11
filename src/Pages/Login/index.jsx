import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .min(
        8,
        "Minimo 8 caracters, ao menos uma letra maiúscula e minúscula, número e caracter especial)"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const btnRegister = () => {
    history.push("/register");
  };

  const btnLogin = (data) => {
    console.log("oi");
  };

  return (
    <div>
      <h1>LOGIN</h1>

      <span>
        Não tem uma conta? Faça seu <span onClick={btnRegister}>cadastro</span>
      </span>

      <form onSubmit={handleSubmit(btnLogin)}>
        <input type="text" placeholder="EMAIL" {...register("email")} />

        <span>{errors.email?.message}</span>

        <input type="password" placeholder="SENHA" {...register("password")} />

        <span>{errors.password?.message}</span>

        <div>
          <button>ENTRAR</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
