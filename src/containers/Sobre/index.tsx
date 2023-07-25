import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { SobreMim } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
      consequuntur at modi perferendis blanditiis, accusantium nesciunt amet
      laboriosam temporibus, porro officiis quas voluptate explicabo repellat
      vel ipsum unde maiores. Expedita.
    </Paragrafo>
    <SobreMim>
      <img src="https://github-readme-stats.vercel.app/api?username=marcelocruzsilverio&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=marcelocruzsilverio&layout=compact&langs_count=7&theme=dracula" />
    </SobreMim>
  </section>
);

export default Sobre;
