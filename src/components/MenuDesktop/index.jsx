import * as S from "./style.js"
import { Link, useHistory } from "react-router-dom"
import { FaSearch } from "react-icons/fa";

export const MenuDesktop = ({setCurrentState}) => {

  const history = useHistory();

  return (
    <S.DisplayMenuDesk>
       <Link to="/newEvent">NOVO EVENTO</Link>
        <Link to="/about">SOBRE</Link>
        <S.DivSelect>
          <select
            onChange={(event) => setCurrentState(event.target.value)}
          >
            <option value="Selecione seu Estado">ESTADO</option>
            <option value="Acre">AC</option>
            <option value="Alagoas">AL</option>
            <option value="Amapá">AP</option>
            <option value="Amazonas">AM</option>
            <option value="Bahia">BA</option>
            <option value="Ceará">CE</option>
            <option value="Distrito Federal">DF</option>
            <option value="Espírito Santo">ES</option>
            <option value="Goiás">GO</option>
            <option value="Maranhão">MA</option>
            <option value="Mato Grosso">MT</option>
            <option value="Mato Grosso do Sul">MS</option>
            <option value="Minas Gerais">MG</option>
            <option value="Pará">PA</option>
            <option value="Paraíba">PB</option>
            <option value="Paraná">PR</option>
            <option value="Pernambuco">PE</option>
            <option value="Piauí">PI</option>
            <option value="Rio de Janeiro">RJ</option>
            <option value="Rio Grande do Norte">RN</option>
            <option value="Rio Grande do Sul">RS</option>
            <option value="Rondônia">RO</option>
            <option value="Roraima">RR</option>
            <option value="Santa Catarina">SC</option>
            <option value="São Paulo">SP</option>
            <option value="Sergipe">SE</option>
            <option value="Tocantins">TO</option>
          </select>
        </S.DivSelect>
        <S.DivInput>
          <FaSearch color="var(--darkblue)" />
          <input type="text" placeholder="EVENTO, CIDADE, CATEGORIA..." />
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
  )
}