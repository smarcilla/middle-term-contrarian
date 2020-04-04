const {
  Db: { RoceRatio, PerRatio },
} = require('@middle-term-contrarian/core');

const getStocks = () =>
  PerRatio.getAll()
    .filter(stock => stock.ratioValue >= 0)
    .sort((stock1, stock2) => (stock1.ratioValue > stock2.ratioValue ? 1 : -1))
    .slice(0, 10)
    .map(stock => ({
      name: stock.companyName,
      per: stock.ratioValue,
      roce: RoceRatio.getByName(stock.companyName).ratioValue,
    }))
    .sort((stock1, stock2) => (stock1.roce > stock2.roce ? -1 : 1))
    .slice(2, 7);

module.exports = { getStocks };
