import * as S from "./style.js";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const MenuDesktop = ({ setCurrentState, setCurrentInput }) => {
  const history = useHistory();

  return (
    <S.DisplayMenuDesk>
      <Link to="/newEvent">NOVO EVENTO</Link>
      <Link to="/about">SOBRE</Link>
      <S.DivSelect>
        <select
          onChange={(event) => setCurrentState(event.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            ESTADO
          </option>
          <option value="Selecione seu Estado">TODOS</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
      </S.DivSelect>
      <S.DivInput>
        <FaSearch color="var(--darkblue)" />
        <input
          type="text"
          placeholder="EVENTO ou CIDADE"
          onChange={(event) => setCurrentInput(event.target.value)}
        />
      </S.DivInput>
      <S.DivButton>
        {localStorage.getItem("@borala:token") ? (
          <button
            onClick={() => {
              history.push("/login");
              localStorage.removeItem("@borala:token");
            }}
          >
            SAIR
          </button>
        ) : (
          <button
            onClick={() => {
              history.push("/login");
            }}
          >
            ENTRAR
          </button>
        )}
      </S.DivButton>
    </S.DisplayMenuDesk>
  );
};
