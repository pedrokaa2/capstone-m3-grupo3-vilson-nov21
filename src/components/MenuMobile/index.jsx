import * as S from "./style.js";
import Menu from "../../img/menu3barras.png";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const MenuMobile = ({ setCurrentState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <S.DisplayMenuMob open={isOpen}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <figure>
          <img className="Menu" src={Menu} alt="Menu"></img>
        </figure>
      </div>
      <S.HandleMenu isOpen={isOpen}>
        <Link to="/newEvent">NOVO EVENTO</Link>
        <Link to="/about">SOBRE</Link>
        <S.DivSelect>
          <select
            onChange={(event) => setCurrentState(event.target.value)}
          >
            <option value="Selecione seu Estado">ESTADO</option>
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amapá">Amapá</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceará</option>
            <option value="Distrito Federal">Distrito Federal</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Goiás">Goiás</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Pará">Pará</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Paraná">Paraná</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piauí">Piauí</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
          </select>
        </S.DivSelect>
        <S.DivInput>
          <FaSearch color="var(--white)" />
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
            <button>ENTRAR</button>
          )}
        </S.DivButton>
      </S.HandleMenu>
    </S.DisplayMenuMob>
  );
};
