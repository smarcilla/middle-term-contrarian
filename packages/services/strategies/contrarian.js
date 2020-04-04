const {
  Db: { PerRatio },
} = require('@middle-term-contrarian/core');

const getStocks = () =>
  PerRatio.getAll()
    .filter(stock => stock.ratioValue >= 0)
    .sort((stock1, stock2) => (stock1.ratioValue > stock2.ratioValue ? 1 : -1))
    .slice(0, 5);

module.exports = { getStocks };
