import { TituloEstilizado } from "./styles";

export type Props = {
  children: string;
  fontSize?: number;
  textalign?: string;
};

const Titulo = (props: Props) => (
  <TituloEstilizado fontSize={props.fontSize} textalign={props.textalign}>
    {props.children}
  </TituloEstilizado>
);

export default Titulo;
