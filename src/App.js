import GlobalStyle from "./global/global";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <>
      <GlobalStyle />
      <Input placeholder="CNPJ" />
      <Input placeholder="EMPRESA" />
      <Button>CADASTRAR</Button>
    </>
  );
}

export default App;
