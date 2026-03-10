const isoTimeFormat = (isoString) => {
  const date = new Date(isoString);

  return date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export default isoTimeFormat;
