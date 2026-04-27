import { Link } from "react-router-dom";
import { Button, Icon } from "@components";
import logoImg from "../../assets/logo.png";
import { useModal } from "@hooks";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const { openModal } = useModal();

  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/" className={styles.logo}>
          <img src={logoImg} />
        </Link>
        <ul className={styles.links}>
          <span className={styles.menu}>MENÚ PRINCIPAL</span>
          <li>
            <Link to="/">
              <Icon variant={"home"} color={"grey"} size={"sm"} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/content">
              <Icon variant={"database"} color={"grey"} size={"sm"} />
              Gestionar contenido
            </Link>
          </li>
        </ul>
        <ul>
          <span className={styles.menu}>MENÚ PRINCIPAL</span>
          <li>
            <Link to="/users">
              <Icon variant={"users"} color={"grey"} size={"sm"} />
              Usuarios
            </Link>
          </li>
          <li>
            <Link to="/config">
              <Icon variant={"config"} color={"grey"} size={"sm"} />
              Configuración
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.addNew}>
        <Button
          type="button"
          variant="filled"
          text="Añadir nuevo"
          size="bg"
          onClick={() => openModal()}
          icon={{ color: "white", variant: "add", size: "bg" }}
        />
      </div>
    </nav>
  );
};
