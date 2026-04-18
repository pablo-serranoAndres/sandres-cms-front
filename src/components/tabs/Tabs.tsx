import styles from "./Tabs.module.scss";
import type { TabsProps } from "./Tabs.types";

export const Tabs = ({ tabs, focusTab, children, onChange }: TabsProps) => {
  return (
    <div>
      <ul className={styles.tabs}>
        {tabs.map((tab, index) => (
          <li
            key={`key_${index}`}
            data-index={index}
            data-id={tab.id}
            className={styles[`tab_active_${index === focusTab}`]}
            onClick={(e) => onChange(e)}
          >
            {tab.value}
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
};
