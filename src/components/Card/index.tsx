import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { CardBorda, LinkBotao } from "./styles";

const CardConteudo = () => (
  <CardBorda>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </CardBorda>
);

export default CardConteudo;
