import { ParagrafoTextoCentralizado } from "../../components/Paragrafo/styles";
import Titulo from "../../components/Titulo";
import { BotaoTema, Descricao, Imagem, SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Imagem>
        <img src="https://github.com/marcelocruzsilverio.png" alt="" />
      </Imagem>
      <Titulo fontSize={20} textalign="center">
        Marcelo Cruz
      </Titulo>
      <ParagrafoTextoCentralizado tipo="secundario" fontSize={18}>
        marcelocruzsilverio
      </ParagrafoTextoCentralizado>
      <Descricao fontSize={12} tipo="principal">
        Aluno Ebac - Curso Desenvolvedor Full Stack Python
      </Descricao>
      <BotaoTema>Trocar de Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
