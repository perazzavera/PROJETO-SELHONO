import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <section className={styles.container}>
      <h3>Creative project? Let's have a productive talk.</h3>
      <form>
        <div className={styles.inputs}>
          <div className={`form-floating mb-3 ${styles.item}`}>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className={`form-floating mb-3 ${styles.item}`}>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email</label>
          </div>
        </div>
        <div className={`form-floating ${styles.item}`}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label for="floatingTextarea2">Message</label>
        </div>
        <div className="d-flex justify-content-center">
          <button>
            Send Now <i class="bi bi-arrow-right-short fs-4 pt-1" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contato;
