import { Icon } from "@components";
import styles from "./Text.module.scss";
import type { TextProps } from "./Text.types";

export const Text = ({ tag, text, icon }: TextProps) => {
  const Tag = tag;

  if (!Tag) return null;

  return (
    <Tag className={styles[tag]}>
      {icon && (
        <Icon variant={icon.variant} color={icon.color} size={icon.size} />
      )}
      {text}
    </Tag>
  );
};
