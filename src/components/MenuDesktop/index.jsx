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
            <option value="Acre">ACRE</option>
            <option value="Alagoas">ALAGOAS</option>
            <option value="Amapá">AMAPÁ</option>
            <option value="Amazonas">AMAZONAS</option>
            <option value="Bahia">BAHIA</option>
            <option value="Ceará">CEARÁ</option>
            <option value="Distrito Federal">DISTRITO FEDERAL</option>
            <option value="Espírito Santo">ESPÍRITO SANTO</option>
            <option value="Goiás">GOIÁS</option>
            <option value="Maranhão">MARANHÃO</option>
            <option value="Mato Grosso">MATO GROSSO</option>
            <option value="Mato Grosso do Sul">MATO GROSSO DO SUL</option>
            <option value="Minas Gerais">MINAS GERAIS</option>
            <option value="Pará">PARÁ</option>
            <option value="Paraíba">PARAÍBA</option>
            <option value="Paraná">PARANÁ</option>
            <option value="Pernambuco">PERNAMBUCO</option>
            <option value="Piauí">PIAUÍ</option>
            <option value="Rio de Janeiro">RIO DE JANEIRO</option>
            <option value="Rio Grande do Norte">RIO GRANDE DO NORTE</option>
            <option value="Rio Grande do Sul">RIO GRANDE DO SUL</option>
            <option value="Rondônia">RONDÔNIA</option>
            <option value="Roraima">RORAIMA</option>
            <option value="Santa Catarina">SANTA CATARINA</option>
            <option value="São Paulo">SÃO PAULO</option>
            <option value="Sergipe">SERGIPE</option>
            <option value="Tocantins">TOCANTINS</option>
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