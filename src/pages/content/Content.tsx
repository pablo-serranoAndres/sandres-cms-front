import { Button, Table, Tabs, Text } from "@components";
import styles from "./Content.module.scss";
import { useState } from "react";
import { allContents, movies, series, diaries, type ItemSet } from "./dumpdata";

type ContentLibrary = {
  label: string;
  itemset: ItemSet;
};

interface ActiveItems {
  previousOrder: number;
  tabkey: string;
}

const CONTENT_CONFIG_MAP: Record<string, ContentLibrary> = {
  all_contents: { label: "Todo el contenido", itemset: allContents },
  movies: { label: "Películas", itemset: movies },
  series: { label: "Series", itemset: series },
  diaries: { label: "Diarios", itemset: diaries },
};

const TAB_KEYS = Object.keys(CONTENT_CONFIG_MAP);

export const Content = () => {
  const [activeItems, setActiveItems] = useState<ActiveItems>({
    previousOrder: 0,
    tabkey: "all_contents",
  });

  const handleTabChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setActiveItems({
      previousOrder: TAB_KEYS.indexOf(activeItems.tabkey),
      tabkey: e.currentTarget.dataset.id!,
    });
  };

  const currentData = CONTENT_CONFIG_MAP[activeItems.tabkey].itemset;
  const currentOrder: number = TAB_KEYS.indexOf(activeItems.tabkey);
  return (
    <section className={styles.contentLibrary}>
      <div className={styles.contentLibrary_intro}>
        <div>
          <Text tag={"h1"} text={"Biblioteca de contenido"} />
          <Text
            tag={"span"}
            text={
              "Gestiona y monitoriza todas las películas, series y diarios."
            }
          />
        </div>
        <div className={styles.contentLibrary_intro_btns}>
          <Button
            variant={"white"}
            size={"sm"}
            type={"button"}
            text={"Filtrar"}
            icon={{ variant: "filter", color: "grey", size: "sm" }}
          />
          <Button
            variant={"white"}
            size={"md"}
            type={"button"}
            text={"Recientes"}
            icon={{ variant: "sort", color: "grey", size: "sm" }}
          />
          <Button
            variant={"filled"}
            size={"md"}
            type={"button"}
            text={"Añadir contenido"}
            icon={{ variant: "add", color: "white", size: "md" }}
          />
        </div>
      </div>
      <Tabs
        tabs={Object.entries(CONTENT_CONFIG_MAP).map(([id, config]) => ({
          id,
          value: config.label,
        }))}
        focusTab={currentOrder}
        onChange={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
          handleTabChange(e)
        }
      >
        <Table
          key={activeItems.tabkey}
          animation={
            activeItems.previousOrder > currentOrder ? "left" : "right"
          }
          theadItems={currentData.theadItems}
          tbodyItems={currentData.tbodyItems}
        />
      </Tabs>
    </section>
  );
};
