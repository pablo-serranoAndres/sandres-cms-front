import type { Category } from "@models";
import { useEffect, useState } from "react";
import type { ActiveItemsProps } from "./Content.types";
import {
  CONTENT_SERVICE_MAP,
  getAllCategories,
  getContentCount,
} from "@services";
import type { ContentTabType } from "@types";

const getFirstSet = (contentCount: number): number[] => {
  if (contentCount < 3) {
    return Array.from({ length: contentCount }, (_, i) => i + 1);
  }
  return [1, 2, 3];
};

const getLastSet = (contentCount: number) => {
  const sets = contentCount / 3;
  const fe = Math.trunc(sets) * 3;
  const lastSet: number[] = [];

  for (let i = fe + 1; i <= contentCount; i++) {
    lastSet.push(i);
  }

  return lastSet;
};

export const useContent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<ActiveItemsProps>({
    id: "all_contents",
    dataset: [
      {
        img: {
          src: "",
          alt: "",
        },
        title: "",
        type: "movie",
        state: "published",
        uploadAt: {
          date: "",
          hour: "",
        },
      },
    ],
    previousOrder: 0,
    currentOrder: 0,
    pagination: {
      currentSet: [1, 2, 3],
      totalPages: 1,
      currentPage: 1,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const categories = await getAllCategories();
        const service = CONTENT_SERVICE_MAP[activeTab.id];
        const values = await service();

        setCategories(categories);

        const contentCount = getContentCount(activeTab.id);

        setActiveTab({
          ...activeTab,
          dataset: values,
          pagination: {
            totalPages: contentCount,
            currentSet: getFirstSet(contentCount),
            currentPage: 1,
            onClick: handlePaginationClick,
          },
        });
      } catch (error) {
        alert(`Error cargando datos: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [activeTab.id]);

  const newCurrentSet = (
    currentSet: number[],
    variant: "add" | "substract",
    totalPages?: number,
  ) => {
    const newCurrentSet = [];

    switch (variant) {
      case "add":
        for (let i = 0; i < 3; i++) {
          if (currentSet[i] + 3 <= totalPages!) {
            newCurrentSet.push(currentSet[i] + 3);
          }
        }
        break;

      case "substract":
        for (let i = 0; i < 3; i++) {
          if (currentSet[i]) {
            newCurrentSet.push(currentSet[i] - 3);
          } else {
            newCurrentSet.push(currentSet[i - 1] - 2);
          }
        }

        break;

      default:
        break;
    }

    return newCurrentSet;
  };

  const handlePaginationClick = (newPage: number) => {
    let newIndex = activeTab.pagination.currentPage;
    let uploadedCurrentSet: number[] = activeTab.pagination.currentSet;

    if (newPage == 9999) {
      const lastIndex =
        activeTab.pagination.currentSet[
          activeTab.pagination.currentSet.length - 1
        ];

      newIndex = activeTab.pagination.currentPage + 1;

      if (newIndex === lastIndex + 1) {
        uploadedCurrentSet = newCurrentSet(
          activeTab.pagination.currentSet,
          "add",
          activeTab.pagination.totalPages,
        );
      }

      if (newIndex > activeTab.pagination.totalPages) {
        newIndex = 1;
        uploadedCurrentSet = getFirstSet(activeTab.pagination.totalPages);
        console.log(uploadedCurrentSet);
      }
    }

    if (newPage == 8888) {
      if (activeTab.pagination.currentPage === 1) {
        uploadedCurrentSet = getLastSet(activeTab.pagination.totalPages);
        newIndex = uploadedCurrentSet[uploadedCurrentSet.length - 1];
      } else if (
        activeTab.pagination.currentPage === activeTab.pagination.currentSet[0]
      ) {
        uploadedCurrentSet = newCurrentSet(
          activeTab.pagination.currentSet,
          "substract",
        );
        newIndex = uploadedCurrentSet[uploadedCurrentSet.length - 1];
      } else {
        newIndex = activeTab.pagination.currentPage - 1;
      }
    }

    setActiveTab({
      ...activeTab,
      pagination: {
        currentPage: newIndex,
        currentSet: uploadedCurrentSet,
        totalPages: activeTab.pagination.totalPages,
        onClick: activeTab.pagination.onClick,
      },
    });
  };

  const handleTabChange = (id: string, index: number) => {
    setActiveTab({
      ...activeTab,
      id: id as ContentTabType,
      previousOrder: activeTab.currentOrder,
      currentOrder: index,
    });
  };

  return {
    handleTabChange,
    handlePaginationClick,
    isLoading,
    categories,
    activeTab,
  };
};
