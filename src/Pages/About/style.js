import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
  flex-wrap: 
  justify-content: center;
  text-align: center;
  padding-top: 20px;
`;

export const ContainerPeople = styled.div`
  display: flex;
  justify-content:
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
`;

export const ContainerMain = styled.main`
width: 100%;
`;

export const ContainerBox = styled.div`
width: 100%;
background: var(--white);
height: 200px;
border-radius: 10px;
padding: 10px 20px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 100px;
display: flex;
justify-content: center;
align-items: center;
img {
  height: 160px;
  border-radius: 75px;
}
> strong {
  font-size: 20px;
}
> div {
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 70%;
  
}

@media only screen and (max-width: 425px) {
  flex-direction: column;
  width: 285px;
  height: 335px;
  padding-top: 20px;
  padding-bottom: 0px;
  > div {
    justify-content: space-evenly;
  }
}
`;
export const ContainerBoxColorSpan = styled.span`
color:#27B5DD
`;

export const ContainerBoxH2 = styled.h2`
color:#27B5DD;
position: absolute;
width: 176px;
height: 49px;
left: 1350px;
top: 35px;
`;


export const ContainerBoxH1 = styled.h1`
padding: 0px 41px;
`;

export const ContainerBoxColorP = styled.p`
color: #FF5203

`;


export const ContainerBoxSecond = styled.div`
  width: 100%;
  background: var(--white);
  height: 200px;
  border-radius: 10px;
  padding: 10px 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 160px;
    border-radius: 75px;
  }
  > strong {
    font-size: 20px;
  }
  > div {
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    width: 70%;
  }
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    width: 285px;
    height: 335px;
    padding-top: 20px;
    padding-bottom: 0px;
    > strong {
      margin-top: 10px;
    }
    > div {
      justify-content: space-evenly;
    }
  }
  
`;