import BannerPadrao from "../../componenstes/BannerPadrao";
import Depoimentos from "../../componenstes/Depoimentos";
import Comentario from "./componentes/Comentario";
import Sobre from "./componentes/Sobre";
import Contato from "./Contato";

const About = () => {
  return (
    <>
      <BannerPadrao titulo="About Us" imagem="about" />
      <main style={{ margin: "0 200px" }}>
        <Comentario />
        <Sobre />
        <Depoimentos />
        <Contato />
      </main>
    </>
  );
};

export default About;
