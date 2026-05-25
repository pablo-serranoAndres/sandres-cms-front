import { useEffect, useRef, useState } from "react";
import { Text, Button, type ButtonProps } from "@components";
import styles from "./FilterPopOver.module.scss";

interface FilterPopOver {
  button: ButtonProps;
  children: React.ReactNode;
  title?: string;
}

export const FilterPopOver = ({ button, title, children }: FilterPopOver) => {
  const [visible, setVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [visible]);

  return (
    <div className={styles.filterPopover} ref={containerRef}>
      <Button
        {...button}
        onClick={() => {
          setVisible(!visible);
        }}
      />
      {visible && (
        <div
          id={`popover-container-${button.id}`}
          className={styles[`popover_${visible}`]}
        >
          <Button
            id="content-popover-close-btn"
            variant={"unstyled"}
            size={"bg"}
            type={"button"}
            text={""}
            onClick={() => setVisible(!visible)}
            icon={{ variant: "close", color: "black", size: "md" }}
          />
          {title && <Text tag={"h3"} text={title} />}
          {children}
        </div>
      )}
    </div>
  );
};
