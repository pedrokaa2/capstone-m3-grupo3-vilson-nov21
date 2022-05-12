import GlobalStyle from "./global/global";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Login />
    </>
  );
}

export default App;
