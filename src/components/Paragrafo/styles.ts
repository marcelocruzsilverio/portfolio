import styled from "styled-components";

import { Props } from ".";

export const ParagrafoEstilizado = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  color: ${(props) => (props.tipo === "principal" ? "#282a35" : "#949494")};
  line-height: 22px;
`;