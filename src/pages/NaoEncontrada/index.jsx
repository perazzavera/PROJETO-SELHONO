import { Link } from "react-router-dom";
import BarraNavegacao from "../../componenstes/BarraNavegacao";
import styles from "./NaoEncontrada.module.css";

const NaoEncontrada = () => {
  return (
    <>
      <BarraNavegacao />
      <main style={{ margin: "0 200px" }}>
        <section className={styles.container}>
          <div>
            <img
              src="/assets/not-found.png"
              alt="foto de um cachorrinho usando óculos em frente a um tablet"
            />
          </div>
          <div className={styles.conteudo}>
            <h2>404</h2>
            <h3>We are sorry, but the page you requested was not found! :( </h3>
            <Link className={styles.link} to="/">
              <p className="m-0">Back To Home</p>{" "}
              <i className="bi bi-arrow-right-short fs-3 pt-1" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default NaoEncontrada;
