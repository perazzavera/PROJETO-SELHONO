import { Outlet } from "react-router-dom";
import BarraNavegacao from "../componenstes/BarraNavegacao";
import Rodape from "../componenstes/Rodape";

const PaginaPadrao = () => {
  return (
    <>
      <BarraNavegacao />
      <Outlet />
      <Rodape />
    </>
  );
};

export default PaginaPadrao;
