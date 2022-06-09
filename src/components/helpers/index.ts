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

  return `${hours}:${minutes}/${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
