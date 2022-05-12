import styled from "styled-components";
import CoverImg from "../../assets/vectorcantoraevento.png";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  @media (min-width: 764px) {
    padding: 0 40px;
  }
`;

export const SpanNovoEvento = styled.span`
  color: var(--orange);
  font-weight: bold;
  font-size: 14px;

  @media (min-width: 764px) {
    font-size: 24px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 40px;
  @media (min-width: 764px) {
    width: 180px;
    height: 50px;
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${CoverImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  max-height: 500px;
  @media (min-width: 764px) {
    height: 500px;
  }
`;

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 764px) {
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const DivForm = styled.div`
  &:nth-child(odd) {
    margin-right: 10px;
  }
`;
// --orange: #FF5203;
// --blue: #27B5DD;
// --lightblue: #9ED9EA;
// --darkblue: #252642;
// --white: #FFFFFF;
