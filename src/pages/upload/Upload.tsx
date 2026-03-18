import { useModal } from "@hooks";
import { useParams } from "react-router-dom";

const uploables = new Map<string, string>([
  ["movie", "Película"],
  ["serie", "Serie"],
  ["diarie", "Diario"],
]);

export const Upload = () => {
  const { type } = useParams<{ type: string }>();
  const { openModal } = useModal();

  if (!type) openModal();

  return (
    <section>
      <h1>Upload! {type && uploables.get(type)}</h1>
    </section>
  );
};
