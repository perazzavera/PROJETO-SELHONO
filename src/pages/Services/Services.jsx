import BannerContato from "../../componenstes/BannerContato";
import BannerPadrao from "../../componenstes/BannerPadrao";
import Work from "../../componenstes/Work";
import ComoTrabalhamos from "./componentes/ComoTrabalhamos";

const Services = () => {
  return (
    <>
      <BannerPadrao titulo="Services" imagem="service" />
      <main style={{ margin: "0 200px" }}>
        <Work flexWrap="wrap" overflow="visible" />
        <ComoTrabalhamos />
      </main>
      <BannerContato />
    </>
  );
};

export default Services;
