import styles from "./Modal.module.scss";
import { Button } from "../button";
import { useModal } from "@hooks";
import { CiMonitor } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { MdMenuBook, MdOutlineMovieCreation } from "react-icons/md";

export const Modal = () => {
  const navigate = useNavigate();
  const { isOpen, closeModal } = useModal();

  return isOpen ? (
    <div className={styles.modalBackGround}>
      <div className={styles.modalContent}>
        <h1>Crear nuevo contenido</h1>
        <p>
          Selecciona el tipo de contenido que deseas agregar a la plataforma
        </p>
        <div className={styles.contentOptions}>
          <ul>
            <li
              onClick={() => {
                closeModal();
                navigate("/upload/movie");
              }}
            >
              <span>
                <MdOutlineMovieCreation />
              </span>
              <p>Nueva Película</p>
            </li>
            <li
              onClick={() => {
                closeModal();
                navigate("/upload/serie");
              }}
            >
              {" "}
              <span>
                <CiMonitor />
              </span>
              <p>Nueva serie</p>
            </li>
            <li
              onClick={() => {
                closeModal();
                navigate("/upload/diarie");
              }}
            >
              {" "}
              <span>
                <MdMenuBook />
              </span>
              <p>Nuevo diario</p>
            </li>
          </ul>
        </div>
        <Button
          variant={"transparent"}
          size={"md"}
          text={"Cancelar y volver al dashboard"}
          onclick={() => {
            closeModal();
            navigate("/");
          }}
        />
      </div>
    </div>
  ) : null;
};
