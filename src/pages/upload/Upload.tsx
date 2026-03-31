import { NewMovieForm } from "@components";
import { useModal } from "@hooks";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

const UPLOABLES = new Map<string, React.ReactNode>([
  ["movie", <NewMovieForm />],
  // ["serie", <NewSerieForm />],
  // ["diarie", <NewDiarieForm />],
]);

export const Upload = () => {
  const { type } = useParams<{ type: string }>();
  const { openModal } = useModal();

  const isValid = type && UPLOABLES.has(type);

  useEffect(() => {
    if (!isValid) {
      openModal();
    }
  }, [isValid, openModal]);

  if (type && UPLOABLES.has(type)) {
    return UPLOABLES.get(type);
  } else {
    return <Navigate to="/" replace />;
  }
};
