const { getAllByYear, getByCompanyCode, getBySector } = require('./finantial-state');

describe('getAllByYear', () => {
  test('should return all company results by year', () => {
    const stocks = getAllByYear('2019');
  });
});

describe('getByCompanyCode', () => {
  test('should return company results by year', () => {
    const stocks = getByCompanyCode('IDR.MC', '2019');
  });
});

describe('getBySector', () => {
  test('should return sector company results by year', () => {
    const stocks = getBySector('TECHNOLOGY', '2019');
  });
});
