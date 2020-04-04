const { getStocks } = require('./middle-term-contrarian');

const expectedStocks = [
  { name: 'CIE AUTOMOTIVE', per: 5.83, roce: 12.73 },
  { name: 'IAG', per: 2.68, roce: 12.39 },
  { name: 'COLONIAL', per: 4.92, roce: 9.37 },
  { name: 'INDRA', per: 10.72, roce: 8.86 },
  { name: 'ENAGAS', per: 10.43, roce: 8.16 },
];

describe('getStocks', () => {
  test('should return five stocks mixing middle-term and contrarian strategies', () => {
    const stocks = getStocks();

    expect(stocks).toEqual(expectedStocks);
  });
});
