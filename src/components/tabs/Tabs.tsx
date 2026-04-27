import styles from "./Tabs.module.scss";
import type { TabsProps } from "./Tabs.types";

export const Tabs = ({ tabs, focusTab, children, onClick }: TabsProps) => {
  return (
    <div>
      <ul className={styles.tabs}>
        {tabs.map((tab, index) => (
          <li
            key={`key_${index}`}
            data-index={index}
            data-id={tab.id}
            className={styles[`tab_active_${index === focusTab}`]}
            onClick={() => onClick(tab.id, index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
};
