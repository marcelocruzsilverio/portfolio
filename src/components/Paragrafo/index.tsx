import { ParagrafoEstilizado } from "./styles";

export type Props = {
  children: string;
  tipo?: "principal" | "secundario";
  fontSize?: number;
};

const Paragrafo = ({ children, tipo = "principal", fontSize }: Props) => (
  <ParagrafoEstilizado fontSize={fontSize} tipo={tipo}>
    {children}
  </ParagrafoEstilizado>
);

export default Paragrafo;
