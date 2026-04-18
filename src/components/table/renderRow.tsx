import { Badge, Button, type ContentSummaryType } from "@components";
import styles from "./Table.module.scss";

export const renderRow = (tr: ContentSummaryType, index: number) => {
  return (
    <tr key={`table_tr_${index}`}>
      <td className={styles.dataTable_body_rowImage}>
        <img src={tr.img.src} alt={tr.img.alt} />
      </td>
      <td>{tr.title}</td>
      <td>
        <Badge value={tr.type} />
      </td>
      <td>
        <Badge value={tr.state} />
      </td>
      <td className={styles.dataTable_body_uploadAt}>{tr.uploadAt}</td>
      <td className={styles.dataTable_icons}>
        <span>
          <Button
            variant={"unstyled"}
            size={"sm"}
            type={"button"}
            text={""}
            icon={{
              variant:
                tr.state.key === "published" || tr.state.key === "featured"
                  ? "unpublish"
                  : "publish",
              color: "primary",
              size: "sm",
            }}
          />

          <Button
            variant={"unstyled"}
            size={"sm"}
            type={"button"}
            text={""}
            icon={{
              variant:
                tr.state.key === "featured" ? "featured" : "not_featured",
              color: "primary",
              size: "sm",
            }}
          />

          <Button
            variant={"unstyled"}
            size={"sm"}
            type={"button"}
            text={""}
            icon={{ variant: "edit", color: "primary", size: "sm" }}
          />
          <Button
            variant={"unstyled"}
            size={"sm"}
            type={"button"}
            text={""}
            icon={{ variant: "delete", color: "primary", size: "sm" }}
          />
        </span>
      </td>
    </tr>
  );
};
