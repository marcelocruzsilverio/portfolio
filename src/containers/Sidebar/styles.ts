import styled from "styled-components";
import { ParagrafoTextoCentralizado } from "../../components/Paragrafo/styles";

export const Imagem = styled.div`
  img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    img {
      width: 128px;
      display: block;
      margin: 8px auto;
    }
  }
`;

export const Descricao = styled(ParagrafoTextoCentralizado)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corTextoBotao};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  display: block;
  margin: 0 auto 16px;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
