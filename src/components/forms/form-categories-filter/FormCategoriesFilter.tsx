import type { Category } from "@models";
import { Button } from "@components";
import styles from "./FormCategoriesFilter.module.scss";

export const FormCategoriesFilter = ({
  categories,
}: {
  categories: Category[];
}) => {
  return (
    <form className={styles.popOverForm}>
      <ul className={styles.popOverForm_labels}>
        {categories.map((category) => (
          <li key={category.key}>
            <label>
              <input
                type="checkbox"
                id={`cbx-${category.id}-${category.key}`}
              />
              {category.name}
            </label>
          </li>
        ))}
      </ul>
      <Button
        id={"form-category-filter-submit"}
        variant={"filled"}
        size={"md"}
        type={"submit"}
        text={"Filtrar por estos campos"}
      />
    </form>
  );
};
