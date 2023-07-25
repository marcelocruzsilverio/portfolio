import styled from "styled-components";
import { Props } from ".";

export const TituloEstilizado = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  font-weght: bold;
  margin-bottom: 16px;
  text-align: ${(props) => (props.textalign ? "center" : "left")};
`;
