import {
  Button,
  FilterPopOver,
  Table,
  TableSkeleton,
  Tabs,
  Text,
} from "@components";
import { getTabKeys } from "@services";
import { useContent } from "./useContent";
import styles from "./Content.module.scss";
import { FormCategoriesFilter } from "@forms";

export const Content = () => {
  const {
    handleTabChange,
    handlePaginationClick,
    isLoading,
    categories,
    activeTab,
  } = useContent();
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
          <FilterPopOver
            button={{
              id: "",
              variant: "white",
              size: "md",
              type: "button",
              text: "Buscar",
              icon: { variant: "search", color: "grey", size: "sm" },
            }}
          >
            <p>Formulario avanzado</p>
          </FilterPopOver>
          <FilterPopOver
            button={{
              id: "",
              variant: "white",
              size: "md",
              type: "button",
              text: "Filtrar",
              icon: { variant: "filter", color: "grey", size: "sm" },
            }}
          >
            <FormCategoriesFilter categories={categories} />
          </FilterPopOver>
          <Button
            variant={"filled"}
            size={"md"}
            type={"button"}
            text={"Guardar contenido"}
            icon={{ variant: "save", color: "white", size: "md" }}
            id={""}
          />
        </div>
      </div>
      <Tabs
        tabs={getTabKeys()}
        focusTab={activeTab.currentOrder}
        onClick={handleTabChange}
      >
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <Table
            key={activeTab.id}
            animation={
              activeTab.previousOrder > activeTab.currentOrder
                ? "left"
                : "right"
            }
            theadItems={[
              "Portada",
              "Título",
              "Tipo",
              "Estado",
              "Fecha de creación",
              "Acciones",
            ]}
            tbodyItems={activeTab.dataset}
            pagination={{
              ...activeTab.pagination,
              onClick: handlePaginationClick,
            }}
          />
        )}
      </Tabs>
    </section>
  );
};
