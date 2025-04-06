import styles from "./Depoimentos.module.css";
import depoimentos from "../../../../mocks/depoimentos.json";

const Depoimentos = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2 className="text-center">
          What the People Thinks <br /> About Us
        </h2>
        <div className="d-flex gap-3">
          {depoimentos.map((depoimento) => (
            <div className={styles.item} key={depoimento.id}>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center gap-3 pb-3">
                  <img src={depoimento.imagem} alt={depoimento.nome} />
                  <span>
                    <h5 className="m-0">{depoimento.nome}</h5>
                    <p className="m-0">{depoimento.lugar}</p>
                  </span>
                </div>
                <h6>{depoimento.texto}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
