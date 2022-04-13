export const convertQuotesForChart = (data, datetime, columns) => data.map((item) => {
  const valuesArray = [];
  Object.keys(item)
    .forEach((itemColumn) => {
      if (columns.includes(itemColumn)) {
        valuesArray.push(item[itemColumn]);
      }
    });

  return {
    x: new Date(item[datetime]),
    // y: [item.open, item.high, item.low, item.close],
    y: valuesArray,
  };
});

export const addLine = (data, datetime, value) => (
  data.map((item) => (
    {
      x: new Date(item[datetime]),
      y: value
    }
  ))
);
