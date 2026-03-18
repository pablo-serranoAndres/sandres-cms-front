import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import { RiHome2Line } from "react-icons/ri";
import styles from "./Sidebar.module.scss";
import { Button } from "@components";
import { IoMdAddCircle } from "react-icons/io";
import logoImg from "../../assets/logo.png";
import { useModal } from "@hooks";

export const Sidebar = () => {
  const { openModal } = useModal();

  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/">
          <img
            src={logoImg}
            alt="Logo de SandresTV CMS"
            className={styles.logoImage}
          />
        </Link>
        <ul className={styles.links}>
          <span className={styles.menu}>MENÚ PRINCIPAL</span>
          <li>
            <Link to="/">
              <RiHome2Line />
              Home
            </Link>
          </li>
          <li>
            <Link to="/content">
              <FaDatabase />
              Gestionar contenido
            </Link>
          </li>
        </ul>
        <ul>
          <span className={styles.menu}>MENÚ PRINCIPAL</span>
          <li>
            <Link to="/users">
              <HiMiniUsers />
              Usuarios
            </Link>
          </li>
          <li>
            <Link to="/config">
              <GrConfigure />
              Configuración
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.addNew}>
        <Button
          variant="filled"
          text="Añadir nuevo"
          size="bg"
          onclick={() => {
            openModal();
          }}
          icon={<IoMdAddCircle />}
        />
      </div>
    </nav>
  );
};
