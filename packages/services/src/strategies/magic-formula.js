const {
  Db: { FinancialState },
} = require('@middle-term-contrarian/core');

const getNetWorkingCapital = ({ currentAssets, currentLiabilities }) =>
  currentAssets - currentLiabilities;

const getNetFixedAssets = ({ totalLiabilities, totalAssets }) =>
  totalAssets - totalLiabilities;

const getEnterpriceValue = ({ marketCap, totalCash, totalLiabilities }) =>
  marketCap + totalLiabilities - totalCash;

const getCapitalReturns = ({ ebitda, netWorkingCapital, netFixedAssets }) => {
  const capitalReturns = ebitda / (netWorkingCapital + netFixedAssets);

  return ebitda < 0 && capitalReturns > 0 ? -capitalReturns : capitalReturns;
};

const getFreeCashFlowReturns = ({ freeCashFlow, enterpriceValue }) =>
  freeCashFlow / enterpriceValue;

const calcMagicFormula = ({ year, sector }) => {
  const stocks = sector
    ? FinancialState.getBySector(sector, year)
    : FinancialState.getAllByYear(year);

  //console.log(stocks);

  return stocks
    .map(
      ({
        companyName,
        companyCode,
        year,
        ebitda,
        marketCap,
        totalCash,
        totalLiabilities,
        totalAssets,
        currentAssets,
        currentLiabilities,
        freeCashFlow,
      }) => ({
        companyName,
        year,
        capitalReturns: getCapitalReturns({
          ebitda,
          netWorkingCapital: getNetWorkingCapital({
            currentAssets,
            currentLiabilities,
          }),
          netFixedAssets: getNetFixedAssets({ totalLiabilities, totalAssets }),
          companyCode,
        }),
        freeCashFlowReturns: getFreeCashFlowReturns({
          freeCashFlow,
          enterpriceValue: getEnterpriceValue({
            marketCap,
            totalCash,
            totalLiabilities,
          }),
        }),
      }),
    )
    .sort((stock1, stock2) => stock2.capitalReturns - stock1.capitalReturns)
    .map((stock, index) => ({ ...stock, capitalReturnsPosition: index + 1 }))
    .sort(
      (stock1, stock2) =>
        stock2.freeCashFlowReturns - stock1.freeCashFlowReturns,
    )
    .map((stock, index) => ({
      ...stock,
      freeCashFlowReturnsPosition: index + 1,
    }))
    .map(stock => ({
      ...stock,
      composePosition:
        stock.freeCashFlowReturnsPosition + stock.capitalReturnsPosition,
    }))
    .sort((stock1, stock2) => stock1.composePosition - stock2.composePosition);
};

module.exports = { calcMagicFormula };
