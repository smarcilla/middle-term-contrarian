const { getStocks } = require('./middle-term');

const expectedStocks = [
  { companyName: 'NATURGY', companyCode: '', ratioValue: 8.99 },
  { companyName: 'INDRA', companyCode: '', ratioValue: 8.86 },
  { companyName: 'ENAGAS', companyCode: '', ratioValue: 8.16 },
  { companyName: 'GRIFOLS', companyCode: '', ratioValue: 8.05 },
  { companyName: 'IBERDROLA', companyCode: '', ratioValue: 6.81 },
];

describe('getStocks', () => {
  test('should return five stocks with inter-middle roce', () => {
    const stocks = getStocks();

    expect(stocks).toEqual(expectedStocks);
  });
});
