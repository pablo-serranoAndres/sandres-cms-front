import type React from "react";
import styles from "./FormSectionContainer.module.scss";
import { Heading, Icon, type IconProps } from "@components";

export const FormSectionContainer = ({
  children,
  sectionTitle,
  iconVariant,
}: {
  sectionTitle: string;
  iconVariant: IconProps["variant"];
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.form_container}>
      <span className={styles.form_section_header}>
        <Icon
          variant={iconVariant}
          background={false}
          size={"bg"}
          color={"primary"}
        />
        <Heading tag={"h2"} text={sectionTitle} />
      </span>
      {children}
    </div>
  );
};
