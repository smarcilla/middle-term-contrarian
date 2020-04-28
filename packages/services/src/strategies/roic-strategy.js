module.exports = () => {
  const orderStocksByRoicRatio = (stock1, stock2) =>
    stock2.roicRatio - stock1.roicRatio;

  /**
   *
   * @param {*} param0
   */
  const calcRoicRatio = ({
    currentAssets,
    currentLiabilities,
    totalLiabilities,
    totalAssets,
    ebit,
    ...other
  }) => ({
    ...other,
    roicRatio:
      ebit /
      (currentAssets - currentLiabilities + (totalAssets - totalLiabilities)),
  });

  const listStocksByRoicRatio = stocks =>
    stocks.map(calcRoicRatio).sort(orderStocksByRoicRatio);

  return { listStocksByRoicRatio };
};
