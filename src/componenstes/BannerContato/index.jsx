import Botao from "../Botao";
import styles from "./BannerContato.module.css";

const BannerContato = () => {
  return (
    <section className={styles.container}>
      <div className="d-flex flex-column align-items-center">
        <h2>Wanna join the interno?</h2>
        <p>It is a long established fact will be distracted.</p>
        <Botao boxShadow="1px 8px 20px rgba(0, 0, 0, 0.8)" borderRadius="18px">
          Contact With Us <i className="bi bi-arrow-right-short fs-4" />
        </Botao>
      </div>
    </section>
  );
};

export default BannerContato;
