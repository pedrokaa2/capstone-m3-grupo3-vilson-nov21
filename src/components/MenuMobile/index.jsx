import * as S from "./style.js";
import Menu from "../../img/menu3barras.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.DisplayMenuMob>
      <div onClick={() => setIsOpen(!isOpen)}>
        <figure>
          <img className="Menu" src={Menu} alt="Menu"></img>
        </figure>
      </div>
      <S.HandleMenu isOpen={isOpen}>
        <Link to="/newEvent">NOVO EVENTO</Link>
        <Link to="/about">SOBRE</Link>
        <select defaultValue="">
          <option value="">ESTADO</option>
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
      </S.HandleMenu>
    </S.DisplayMenuMob>
  );
};
