module.exports = () => {
  const orderStocksByEvEbitRatio = (stock1, stock2) =>
    stock1.evEbitRatio - stock2.evEbitRatio;

  const calcEvEbitRatio = ({ ev, ebit, ...other }) => ({
    ...other,
    evEbitRatio: ev / ebit,
  });

  const listStocksByEvEbitRatio = stocks =>
    stocks.map(calcEvEbitRatio).sort(orderStocksByEvEbitRatio);

  return { listStocksByEvEbitRatio };
};
