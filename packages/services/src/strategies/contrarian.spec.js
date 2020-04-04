const { getStocks } = require('./contrarian');

const expectedStocks = [
  { companyName: 'IAG', companyCode: '', ratioValue: 2.68 },
  { companyName: 'MEDIASET', companyCode: '', ratioValue: 4.72 },
  { companyName: 'COLONIAL', companyCode: '', ratioValue: 4.92 },
  { companyName: 'ACS', companyCode: '', ratioValue: 5.4 },
  { companyName: 'CIE AUTOMOTIVE', companyCode: '', ratioValue: 5.83 },
];

describe('getStocks', () => {
  test('should return five stocks with lowest per', () => {
    const stocks = getStocks();

    expect(stocks).toEqual(expectedStocks);
  });
});
