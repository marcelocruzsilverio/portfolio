import styled from "styled-components";
import { ParagrafoEstilizado } from "../../components/Paragrafo/styles";

export const Imagem = styled.div`
  img {
    max-width: 100%;
    border-radius: 50%;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
      display: block;
      margin: 8px auto;
    }
  }
`;

export const Descricao = styled(ParagrafoEstilizado)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
