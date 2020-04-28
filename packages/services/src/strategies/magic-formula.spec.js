const { calcMagicFormula } = require('./magic-formula');

describe('calcMagicFormula function', () => {
  describe('when calc formula by sector', () => {
    const sector = 'TECHNOLOGY';
    const year = '2019';

    test('should return sector stocks ordered', () => {
      const stocks = calcMagicFormula({ year, sector });

      //console.log(stocks);
    });
  });
  describe('when calc formula ', () => {
    const year = '2019';

    test('should return sector stocks ordered', () => {
      const stocks = calcMagicFormula({ year });

      //console.log(stocks);
    });
  });
});
