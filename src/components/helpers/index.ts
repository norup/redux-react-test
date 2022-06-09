export const convertDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours =
    date.getHours().toString().length > 1
      ? date.getHours()
      : "0" + date.getHours().toString();
  const minutes =
    date.getMinutes().toString().length > 1
      ? date.getMinutes()
      : "0" + date.getMinutes().toString();

  const day =
    date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate();

  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1).toString()
      : date.getMonth() + 1;

  return `${hours}:${minutes}/${day}.${month}.${date.getFullYear()}`;
};
