import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Logo from "../../img/boralalogo.png";
import Equipe from "../../img/pageabout.png";
import {
  ContainerAll,
  ContainerPeople,
  ContainerBox,
  ContainerBoxSecond,
  ContainerMain,
  ContainerBoxColorP,
  ContainerBoxColorSpan,
  ContainerBoxH2,
  ContainerBoxH1,
} from "./style";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
      <ContainerAll>
        <ContainerPeople>
          <header>
            <ContainerBoxH1>
              <img src={Logo} alt="Logo" width="181" height="49"></img>
              </ContainerBoxH1>
            <ContainerBoxH2>SOBRE</ContainerBoxH2>
          </header>
          <ContainerMain>
            <main>
              <img src={Equipe} alt="About us" width="100%" height="291"></img>
            </main>
          </ContainerMain>
          <ContainerBox>
            <div className="cardOne">
              <figure>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02FJF4TBFX-1e469393a2ba-512"
                  alt=""
                ></img>
                <h3>Pedro Yvo Lucas</h3>
                <ContainerBoxColorP>
                  Tech Leader<ContainerBoxColorSpan>(TL)</ContainerBoxColorSpan>
                </ContainerBoxColorP>

                <a
                  type="button"
                  href="https://www.linkedin.com/in/pedro-yvo-lucas-98a6a11b0/?trk=public_profile_browsemaporiginalSubdomain=br"
                >
                  {" "}
                  <FaLinkedin />
                </a>
                <a
                  type="button"
                  href="https://github.com/pedrokaa2"
                >
                  {" "}
                  <FaGithub />
                </a>
              </figure>
              <figure>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02LSDTA61M-fb3fc13059c3-512"
                  alt=""
                ></img>
                <h3>William Hans</h3>
                <ContainerBoxColorP>
                  Scrum Master
                  <ContainerBoxColorSpan>(SM)</ContainerBoxColorSpan>
                </ContainerBoxColorP>
                <a
                  type="button"
                  href="https://www.linkedin.com/in/william-damasio-62a6841a2/"
                >
                  {" "}
                  <FaLinkedin />
                </a>
                <a
                  type="button"
                  href="https://github.com/WHansD"
                >
                  {" "}
                  <FaGithub />
                </a>
              </figure>
              <figure>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02LFB1TUET-6088027bf5f8-512"
                  alt=""
                ></img>
                <h3>Rafael Halquema</h3>
                <ContainerBoxColorP>
                  Product Owner
                  <ContainerBoxColorSpan>(PO)</ContainerBoxColorSpan>
                </ContainerBoxColorP>
                <a
                  type="button"
                  href="https://www.linkedin.com/in/rafael-halquema-398443137/"
                >
                  {" "}
                  <FaLinkedin />
                </a>
                <a
                  type="button"
                  href="https://github.com/rafaelfhsantos"
                >
                  {" "}
                  <FaGithub />
                </a>
              </figure>
            </div>
          </ContainerBox>
          <ContainerBoxSecond>
            <div className="cardSecond">
              <figure>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02N88F8NU8-ddfe17f67038-512"
                  alt=""
                ></img>
                <h3>Suélly Araújo</h3>
                <ContainerBoxColorP>
                  Quality Assurance
                  <ContainerBoxColorSpan>(QA)</ContainerBoxColorSpan>
                </ContainerBoxColorP>
                <a
                  type="button"
                  href="https://www.linkedin.com/in/su%C3%A9lly-araujo-532409b9"
                >
                  {" "}
                  <FaLinkedin />
                </a>
                <a
                  type="button"
                  href="https://github.com/suellykarine"
                >
                  {" "}
                  <FaGithub />
                </a>
              </figure>
              <figure>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02FTMDCABE-d62ae21856ef-512"
                  alt=""
                ></img>
                <h3>Vinicius Nunes</h3>
                <ContainerBoxColorP>
                  Quality Assurance
                  <ContainerBoxColorSpan>(QA)</ContainerBoxColorSpan>
                </ContainerBoxColorP>
                <a
                  type="button"
                  href="https://www.linkedin.com/in/pedro-yvo-lucas-98a6a11b0/?trk=public_profile_browsemaporiginalSubdomain=br"
                >
                  {" "}
                  <FaLinkedin />
                </a>
                <a
                  type="button"
                  href="https://www.linkedin.com/in/pedro-yvo-lucas-98a6a11b0/?trk=public_profile_browsemaporiginalSubdomain=br"
                >
                  {" "}
                  <FaGithub />
                </a>
              </figure>
              <figure>
                <img
                  src="https://ca.slack-edge.com/TQZR39SET-U02A15HQQB1-29781156b668-72"
                  alt=""
                ></img>
                <h3>Lucas Corrêa</h3>
                <ContainerBoxColorP>
                  Quality Assurance
                  <ContainerBoxColorSpan>(QA)</ContainerBoxColorSpan>
                </ContainerBoxColorP>
                <a
                  type="button"
                  href="https://www.linkedin.com/in/lucas-corr%C3%AAa-de-oliveira-a28789214/"
                >
                  {" "}
                  <FaLinkedin />
                </a>
                <a
                  type="button"
                  href="https://github.com/lucascorreaog"
                >
                  {" "}
                  <FaGithub />
                </a>
              </figure>
            </div>
          </ContainerBoxSecond>
        </ContainerPeople>
      </ContainerAll>
    </>
  );
};

export default About;
