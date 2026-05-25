export const formatDate = (uploadAt: Date): { date: string; hour: string } => {
  const unformatDate: Date = new Date(uploadAt);

  const stringDate = unformatDate.toLocaleString();
  // console.log(stringDate);

  const date = stringDate.split(",")[0];
  const hour = stringDate.split(",")[1];

  return { date, hour };
};
