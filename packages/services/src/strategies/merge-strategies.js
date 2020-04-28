const EvEbitStrategy = require('./ev-ebit-strategy');
const RoicStrategy = require('./roic-strategy');

module.exports = () => {
  const evEbitStrategy = EvEbitStrategy();
  const roicStrategy = RoicStrategy();

  const calcMagicaFormulaRatio = ({ stockCode, evEbitList, roicList }) => {
    const evEbitPosition = evEbitList.findIndex(
      searchedStock => searchedStock.stockCode === stockCode,
    );

    const roicPosition = roicList.findIndex(
      searchedStock => searchedStock.stockCode === stockCode,
    );

    const magicPosition = evEbitPosition + roicPosition;

    console.info(`${evEbitPosition} + ${roicPosition} = ${magicPosition}`);

    return magicPosition;
  };

  const orderStocks = (stock1, stock2) => stock1.ranking - stock2.ranking;

  const calcMagicFormula = stocks => {
    const evEbitList = evEbitStrategy.listStocksByEvEbitRatio(stocks);
    const roicList = roicStrategy.listStocksByRoicRatio(stocks);

    return stocks
      .map(({ stockCode, ...stock }) => ({
        ...stock,
        ranking: calcMagicaFormulaRatio({ stockCode, evEbitList, roicList }),
      }))
      .sort(orderStocks);
  };

  return { calcMagicFormula };
};
