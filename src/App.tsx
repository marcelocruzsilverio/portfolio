/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeProvider } from "styled-components";
import Projetos from "./containers/Projetos";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import EstiloGlobal, { Container } from "./styles";
import temaLight from "./themes/light";
import temaDark from "./themes/dark";
import { useState } from "react";

function App() {
  const [estaUsandoTemaDark, setEstaUsansoTemaDark] = useState(false);

  function trocaTema() {
    setEstaUsansoTemaDark(!estaUsandoTemaDark);
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
