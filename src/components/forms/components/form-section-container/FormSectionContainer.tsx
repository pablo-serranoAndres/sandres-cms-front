import type React from "react";
import styles from "./FormSectionContainer.module.scss";
import { Text, Icon, ICON_MAP } from "@components";

export const FormSectionContainer = ({
  children,
  sectionTitle,
  iconVariant,
}: {
  sectionTitle: string;
  iconVariant: keyof typeof ICON_MAP;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.form_container}>
      <span className={styles.form_section_header}>
        <Icon variant={iconVariant} />
        <Text tag={"h2"} text={sectionTitle} icon={""} />
      </span>
      {children}
    </div>
  );
};
