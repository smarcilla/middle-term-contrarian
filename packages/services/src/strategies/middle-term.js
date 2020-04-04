const {
  Db: { RoceRatio },
} = require('@middle-term-contrarian/core');

const getStocks = () =>
  RoceRatio.getAll()
    .filter(stock => stock.ratioValue >= 0)
    .sort((stock1, stock2) => (stock1.ratioValue > stock2.ratioValue ? -1 : 1))
    .slice(10, 15);

module.exports = { getStocks };
