import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import links from "../../../mocks/menu.json";
import styles from "./Menu.module.css";

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    const input = searchInputRef.current;
    if (input) {
      input.classList.toggle("d-none");
      input.focus();
    }
  };

  return (
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  m-0 d-flex gap-3">
        {links.map((link) => (
          <li key={link.nome} className="nav-item">
            <Link
              className={`fw-medium fs-5 nav-link ${
                currentPath === link.url ? "active" : ""
              }`}
              aria-current="page"
              to={link.url}
            >
              {link.nome}
            </Link>
          </li>
        ))}
      </ul>
      <div className="d-flex align-items-center position-relative ps-2">
        <i
          onClick={handleSearchClick}
          className="bi bi-search fs-4"
          role="button"
          id="btn-search"
        ></i>
        <input
          type="search"
          className={`form-control position-absolute d-none ${styles.customSearchInput}`}
          id="search-input"
          placeholder="Buscar..."
          ref={searchInputRef}
        />
      </div>
    </div>
  );
};

export default Menu;
