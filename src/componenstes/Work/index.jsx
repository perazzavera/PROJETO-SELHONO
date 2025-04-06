import { Link } from "react-router-dom";
import works from "../../mocks/work.json";
import styles from "./Work.module.css";

const Work = ({ overflow, minWidth = "300px", flexWrap = "wrap", limit }) => {
  // Aplica o limit se for passado
  const worksToShow = limit ? works.slice(0, limit) : works;

  return (
    <section style={{ overflow: overflow }} className={styles.container}>
      <div
        className="d-flex gap-4 justify-content-between px-5"
        style={{
          flexWrap: flexWrap,
        }}
      >
        {worksToShow.map((work) => (
          <div
            key={work.id}
            className={`px-2 text-center ${styles.item}`}
            style={{
              minWidth: minWidth,
              flex: "1 1 30%",
              maxWidth: "32%",
            }}
          >
            <h5 className="subtitle">{work.titulo}</h5>
            <h6>{work.texto}</h6>
            <div>
              <Link className={styles.link}>
                <p className="m-0">Read More</p>
                <i className="bi bi-arrow-right-short fs-3"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
