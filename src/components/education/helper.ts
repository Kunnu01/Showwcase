const getYearOptions = (isStartOfRange: boolean) => {
  const startYear = 1900;
  const currentYear = new Date().getFullYear();

  let maxLimit = Number(currentYear);

  if (isStartOfRange) {
    maxLimit += 5;
  }

  const dates = [];
  while (startYear <= maxLimit) {
    dates.push({
      value: `${maxLimit}`,
      label: `${maxLimit}`,
    })
    maxLimit -= 1;
  }
  return dates;
};

export { getYearOptions }
