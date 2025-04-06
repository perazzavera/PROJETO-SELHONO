import styles from "./Rodape.module.css";
import { Link } from "react-router-dom";
import Sociais from "./Sociais";
import { pages, services } from "../../mocks/links.json";

const Rodape = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.principal}>
        <div className={`${styles.brandInfo}`}>
          <div className="d-flex gap-2 align-items-center pb-3">
            <img src="/assets/favicon-logo.png" alt="Logo SELHONO" />
            <h2 className="m-0 fs-1 brand">SELHONO</h2>
          </div>
          <div className={`${styles.sociais}`}>
            <p className="pb-4">
              It is a long established fact that a reader <br /> will be
              distracted lookings.
            </p>
            <Sociais />
          </div>
        </div>
        <div>
          <h5 className="subtitle">Pages</h5>
          <nav className="d-flex flex-column">
            {pages.map((page) => (
              <Link key={page.nome} className={`${styles.link}`} to={page.url}>
                {page.nome}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h5 className="subtitle">Services</h5>
          <nav className="d-flex flex-column">
            {services.map((service) => (
              <Link
                key={service.nome}
                className={`${styles.link}`}
                to={service.url}
              >
                {service.nome}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.contato}>
          <h5 className="subtitle">Contact</h5>
          <p className={`${styles.link} m-0`}>
            55 East Birchwood Ave. Brooklyn, New York 11201
          </p>
          <p className={`${styles.link} m-0`}>contact@selhono.com</p>
          <p className={`${styles.link} m-0`}>(123) 465 - 7890</p>
        </div>
      </div>
      <p className={`${styles.link} text-center pt-5`}>
        Copyright <i className="bi bi-c-circle"></i> SELHONO{" "}
      </p>
    </footer>
  );
};

export default Rodape;
