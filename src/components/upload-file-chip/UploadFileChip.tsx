import { Icon, type IconProps } from "@components";
import styles from "./UploadFileChip.module.scss";

export const UploadFileChip = ({
  violetText,
  greyText,
  icon,
}: {
  violetText: string;
  greyText: string;
  icon: IconProps;
}) => {
  return (
    <div className={styles.uploadChip}>
      <input type="file" />
      <Icon
        variant={icon.variant}
        background={icon.background}
        size={icon.size}
      />
      <div className={styles.uploadChip_text}>
        <p className={styles.uploadChip_text_violet}>{violetText}</p>
        <p className={styles.uploadChip_text_grey}>{greyText}</p>
        <p className={styles.uploadChip_text_uploadRoute}>
          /src/uploads/archivo
        </p>
      </div>
    </div>
  );
};
