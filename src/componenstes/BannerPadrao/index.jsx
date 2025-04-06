import styles from "./BannerPadrao.module.css";

const BannerPadrao = ({ titulo, imagem }) => {
  return (
    <section
      style={{ backgroundImage: `url("/assets/banner-${imagem}.png")` }}
      className={styles.container}
    >
      <h2>{titulo}</h2>
    </section>
  );
};

export default BannerPadrao;
