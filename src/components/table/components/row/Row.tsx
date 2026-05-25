import { Badge, Button } from "@components";
import type { ContentSummaryType } from "@types";
import styles from "./Row.module.scss";

export const Row = ({ tr }: { tr: ContentSummaryType }) => {
  return (
    <tr className={styles.row} key={`table_tr_${tr.title}`}>
      <td className={styles.row_image}>
        <img src={tr.img.src} alt={tr.img.alt} />
      </td>
      <td className={styles.row_title}>{tr.title}</td>
      <td className={styles.row_type}>
        <Badge value={tr.type} />
      </td>
      <td className={styles.row_state}>
        <Badge value={tr.state} />
      </td>
      <td className={styles.row_uploadAt}>
        <div>
          <span>{tr.uploadAt.date}</span>
          <span>{tr.uploadAt.hour}</span>
        </div>
      </td>
      <td className={styles.row_icons}>
        <Button
          id={"render-row-actions-publishing"}
          variant={"unstyled"}
          size={"sm"}
          type={"button"}
          text={""}
          icon={{
            variant:
              tr.state === "published" || tr.state === "featured"
                ? "unpublish"
                : "publish",
            color: "grey",
            size: "sm",
          }}
        />

        <Button
          id={"render-row-actions-featuring"}
          variant={"unstyled"}
          size={"sm"}
          type={"button"}
          text={""}
          icon={{
            variant: tr.state === "featured" ? "featured" : "not_featured",
            color: tr.state === "featured" ? "primary" : "grey",
            size: "sm",
          }}
        />

        <Button
          id={"render-row-actions-edit"}
          variant={"unstyled"}
          size={"sm"}
          type={"button"}
          text={""}
          icon={{ variant: "edit", color: "grey", size: "sm" }}
        />
        <Button
          id={"render-row-actions-delete"}
          variant={"unstyled"}
          size={"sm"}
          type={"button"}
          text={""}
          icon={{ variant: "delete", color: "grey", size: "sm" }}
        />
      </td>
    </tr>
  );
};
