import { Link } from "react-router-dom";
import Menu from "./Menu";
import styles from "./BarraNavegacao.module.css";

const BarraNavegacao = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-white align-items-center py-5 ${styles.container}`}
    >
      <div className="container-fluid p-0 justify-content-start">
        <img
          className="pe-2"
          src="/assets/favicon-logo.png"
          alt="logo SELHONO"
        />
        <Link to="/" className="navbar-brand brand p-0 m-0">
          <h1 className="m-0">SELHONO</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <Menu />
    </nav>
  );
};

export default BarraNavegacao;
