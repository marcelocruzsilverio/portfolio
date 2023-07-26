import styled from "styled-components";

import { Props } from ".";

export const ParagrafoEstilizado = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  color: ${(props) =>
    props.tipo === "principal"
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-height: 22px;
  overflow-wrap: break-word;
`;

export const ParagrafoTextoCentralizado = styled(ParagrafoEstilizado)`
  text-align: center;
`;
