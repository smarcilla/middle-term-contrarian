const { getAll, getByName } = require('./per-ratio');

const expectedStocks = [
  { companyName: 'ACCIONA', companyCode: '', ratioValue: 13.96 },
  { companyName: 'ACERINOX', companyCode: '', ratioValue: -1 },
  { companyName: 'ACS', companyCode: '', ratioValue: 5.4 },
  { companyName: 'AENA', companyCode: '', ratioValue: 10.67 },
  { companyName: 'AMADEUS', companyCode: '', ratioValue: 16.28 },
  { companyName: 'ARCELORMITTAL', companyCode: '', ratioValue: -1 },
  { companyName: 'CELLNEX ', companyCode: '', ratioValue: -1 },
  { companyName: 'CIE AUTOMOTIVE', companyCode: '', ratioValue: 5.83 },
  { companyName: 'COLONIAL', companyCode: '', ratioValue: 4.92 },
  { companyName: 'ENAGAS', companyCode: '', ratioValue: 10.43 },
  { companyName: 'ENCE', companyCode: '', ratioValue: 137 },
  { companyName: 'ENDESA', companyCode: '', ratioValue: 115.31 },
  { companyName: 'FERROVIAL', companyCode: '', ratioValue: 58.17 },
  { companyName: 'GRIFOLS', companyCode: '', ratioValue: 33.16 },
  { companyName: 'IAG', companyCode: '', ratioValue: 2.68 },
  { companyName: 'IBERDROLA', companyCode: '', ratioValue: 16.98 },
  { companyName: 'INDITEX', companyCode: '', ratioValue: 18.82 },
  { companyName: 'INDRA', companyCode: '', ratioValue: 10.72 },
  { companyName: 'MASMOVIL', companyCode: '', ratioValue: 19.88 },
  { companyName: 'MEDIASET', companyCode: '', ratioValue: 4.72 },
  { companyName: 'MELIA', companyCode: '', ratioValue: 7.57 },
  { companyName: 'MERLIN', companyCode: '', ratioValue: 5.92 },
  { companyName: 'NATURGY', companyCode: '', ratioValue: 11 },
  { companyName: 'REE', companyCode: '', ratioValue: 11.78 },
  { companyName: 'REPSOL', companyCode: '', ratioValue: -1 },
  { companyName: 'SIEMENS GAMESA', companyCode: '', ratioValue: 64.29 },
  { companyName: 'TELEFÓNICA', companyCode: '', ratioValue: 23.82 },
  { companyName: 'VISCOFAN', companyCode: '', ratioValue: 21.81 },
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

    expect(stock).toEqual({ companyName: 'IAG', companyCode: '', ratioValue: 2.68 });
  });
});
