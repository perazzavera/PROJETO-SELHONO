import Artigos from "./componentes/Artigos";
import BannerContato from "../../componenstes/BannerContato";
import BannerInicio from "./componentes/BannerInicio";
import Depoimentos from "./componentes/Depoimentos";
import Estimativa from "./componentes/Estimativa";
import Numeros from "./componentes/Numeros";
import Parceiros from "./componentes/Parceiros";
import Projetos from "./componentes/Projetos";
import Work from "../../componenstes/Work";

const Inicio = () => {
  return (
    <>
      <main style={{ margin: "0 200px" }}>
        <BannerInicio />
        <Work minWidth="358px" overflow="auto" flexWrap="nowrap" limit={3} />
        <Estimativa />
        <Depoimentos />
        <Parceiros />
        <Projetos />
        <Numeros />
        <Artigos />
      </main>
      <BannerContato />
    </>
  );
};

export default Inicio;
