import styles from "./Botao.module.css";

const Botao = ({ children, borderRadius, boxShadow }) => {
  return (
    <button
      style={{ borderRadius: borderRadius, boxShadow: boxShadow }}
      className={`border-0 align-items-center d-flex gap-2 ${styles.botao}`}
    >
      {children}
    </button>
  );
};

export default Botao;
