const { getAll, getByName } = require('./roce-ratio');

const expectedStocks = [
  { companyName: 'ACCIONA', companyCode: '', ratioValue: 6.48 },
  { companyName: 'ACERINOX', companyCode: '', ratioValue: 0.68 },
  { companyName: 'ACS', companyCode: '', ratioValue: 5.88 },
  { companyName: 'AENA', companyCode: '', ratioValue: 14.87 },
  { companyName: 'AMADEUS', companyCode: '', ratioValue: 19.22 },
  { companyName: 'ARCELORMITTAL', companyCode: '', ratioValue: -1 },
  { companyName: 'CELLNEX ', companyCode: '', ratioValue: 1.26 },
  { companyName: 'CIE AUTOMOTIVE', companyCode: '', ratioValue: 12.73 },
  { companyName: 'COLONIAL', companyCode: '', ratioValue: 9.37 },
  { companyName: 'ENAGAS', companyCode: '', ratioValue: 8.16 },
  { companyName: 'ENCE', companyCode: '', ratioValue: 2.3 },
  { companyName: 'ENDESA', companyCode: '', ratioValue: 2.97 },
  { companyName: 'FERROVIAL', companyCode: '', ratioValue: 2.93 },
  { companyName: 'GRIFOLS', companyCode: '', ratioValue: 8.05 },
  { companyName: 'IAG', companyCode: '', ratioValue: 12.39 },
  { companyName: 'IBERDROLA', companyCode: '', ratioValue: 6.81 },
  { companyName: 'INDITEX', companyCode: '', ratioValue: 31.78 },
  { companyName: 'INDRA', companyCode: '', ratioValue: 8.86 },
  { companyName: 'MASMOVIL', companyCode: '', ratioValue: 15.85 },
  { companyName: 'MEDIASET', companyCode: '', ratioValue: 24.01 },
  { companyName: 'MELIA', companyCode: '', ratioValue: 6 },
  { companyName: 'MERLIN', companyCode: '', ratioValue: 5.73 },
  { companyName: 'NATURGY', companyCode: '', ratioValue: 8.99 },
  { companyName: 'REE', companyCode: '', ratioValue: 10.03 },
  { companyName: 'REPSOL', companyCode: '', ratioValue: -1 },
  { companyName: 'SIEMENS GAMESA', companyCode: '', ratioValue: 3.49 },
  { companyName: 'TELEFÓNICA', companyCode: '', ratioValue: 6.05 },
  { companyName: 'VISCOFAN', companyCode: '', ratioValue: 14.07 },
];

describe('getAll', () => {
  test('should return all companies', () => {
    const stocks = getAll();

    expect(stocks).toEqual(expectedStocks);
  });
});

describe('getByName', () => {
  test('should return company', () => {
    const stock = getByName('IAG');

    expect(stock).toEqual({ companyName: 'IAG', companyCode: '', ratioValue: 12.39 });
  });
});
