import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./pages/PaginaPadrao";
import "./App.css";
import Services from "./pages/Services/Services";
import Inicio from "./pages/Inicio/Inicio";
import About from "./pages/AboutUs/About";
import NaoEncontrada from "./pages/NaoEncontrada";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
          </Route>
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
