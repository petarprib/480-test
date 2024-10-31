export const formatDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);

  const day = String(date.getDate());
  const month = String(date.getMonth() + 1);

  return `${day}/${month}`;
};

export const formatTime = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
};
