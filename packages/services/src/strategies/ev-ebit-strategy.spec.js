const EvEbitStrategy = require('./ev-ebit-strategy');

describe('Ev/Ebit ratio strategy', () => {
  const ONE_MILLION = 1000000;
  let evEbitStrategy;
  beforeAll(() => {
    evEbitStrategy = EvEbitStrategy();
  });

  describe('when order stocks ascending', () => {
    /**
     * Criterios
     * Excluimos bancos
     * EV/EBIT < 6
     * Capitalizacion > 50*1000000
     * EBIT > 1
     * Fecha 24 Abril 2020
     */
    const stocks = [
      {
        stockName: 'ACS, Actividades de Construccion y Servicios, S.A.',
        stockCode: 'ACS.MD',
        ev: 7.23 * 1000 * ONE_MILLION,
        ebit: 1577.21 * ONE_MILLION,
      },
      {
        stockName: 'International Consolidated Airlines Group, S.A.',
        stockCode: 'IAG.MD',
        ev: 12.78 * 1000 * ONE_MILLION,
        ebit: 2606 * ONE_MILLION,
      },
      {
        stockName: 'Compania de Distribucion Integral Logista Holdings, S.A.',
        stockCode: 'LOG.MD',
        ev: 542.4 * ONE_MILLION,
        ebit: 198.31 * ONE_MILLION,
      },
      {
        stockName: 'Mediaset Espana Comunicacion, S.A.',
        stockCode: 'TL5.MD',
        ev: 1.13 * 1000 * ONE_MILLION,
        ebit: 264.89 * ONE_MILLION,
      },
      {
        stockName: 'Tecnicas Reunidas, S.A.',
        stockCode: 'TRE.MD',
        ev: 354.67 * ONE_MILLION,
        ebit: 111.95 * ONE_MILLION,
      },
      {
        stockName: 'Atresmedia Corporacion de Medios de Comunicacion, S.A.',
        stockCode: 'A3M.MD',
        ev: 730.63 * ONE_MILLION,
        ebit: 164.35 * ONE_MILLION,
      },
      {
        stockName: 'eDreams ODIGEO S.A.',
        stockCode: 'EDR.MD',
        ev: 583.64 * ONE_MILLION,
        ebit: 94.84 * ONE_MILLION,
      },
      {
        stockName: 'Naturhouse Health, S.A.',
        stockCode: 'NTH.MD',
        ev: 81.31 * ONE_MILLION,
        ebit: 38.99 * ONE_MILLION,
      },
    ];

    test('should render ordered stocks', () => {
      const orderedStocks = evEbitStrategy.listStocksByEvEbitRatio(stocks);

      //console.info(orderedStocks);
    });
  });

  describe('when execute stocks with low EV/EBIT and low debt/EBITDA', () => {
    /**
     * Criterios
     * Excluimos bancos
     * EV/EBIT < 25
     * Capitalizacion > 1000000000
     * EBIT > 1
     * Total Debt/EBITDA < 2
     * Fecha 24 Abril 2020
     */
    const stocks = [
      {
        stockName: 'Industria de Diseno Textil, S.A.',
        stockCode: 'ITX.MD',
        ISIN: 'ES0148396007',
        ev: 71.79 * 1000 * ONE_MILLION,
        ebit: 4700 * ONE_MILLION,
      },
      {
        stockName: 'Endesa, S.A.',
        stockCode: 'ELE.MD',
        ISIN: 'ES0130670112',
        ev: 25.84 * 1000 * ONE_MILLION,
        ebit: 1724 * ONE_MILLION,
      },
      {
        stockName: 'Compania de Distribucion Integral Logista Holdings, S.A.',
        stockCode: 'LOG.MD',
        ISIN: 'ES0105027009',
        ev: 542.4 * ONE_MILLION,
        ebit: 198.31 * ONE_MILLION,
      },
      {
        stockName: 'Mediaset Espana Comunicacion, S.A.',
        stockCode: 'TL5.MD',
        ISIN: 'ES0152503035',
        ev: 1.13 * 1000 * ONE_MILLION,
        ebit: 264.89 * ONE_MILLION,
      },
      {
        stockName: 'Amadeus IT Group, S.A.',
        stockCode: 'AMS.MD',
        ISIN: 'ES0109067019',
        ev: 22.87 * 1000 * ONE_MILLION,
        ebit: 1475.4 * ONE_MILLION,
      },
      {
        stockName: 'Zardoya Otis, S.A. ',
        stockCode: 'ZOT.MD',
        ISIN: 'ES0184933812',
        ev: 2.79 * 1000 * ONE_MILLION,
        ebit: 185.06 * ONE_MILLION,
      },
      {
        stockName: 'Viscofan, S.A.',
        stockCode: 'VIS.MD',
        ISIN: 'ES0184262212',
        ev: 2.41 * 1000 * ONE_MILLION,
        ebit: 123.006 * ONE_MILLION,
      },
      {
        stockName: 'Vidrala, S.A.',
        stockCode: 'VID.MD',
        ISIN: 'ES0183746314',
        ev: 2.39 * 1000 * ONE_MILLION,
        ebit: 184.206 * ONE_MILLION,
      },
      {
        stockName: 'Almirall, S.A.',
        stockCode: 'ALM.MD',
        ISIN: 'ES0157097017',
        ev: 1.97 * 1000 * ONE_MILLION,
        ebit: 161.316 * ONE_MILLION,
      },
      {
        stockName: 'Aperam, S.A.',
        stockCode: 'APAM.MD',
        ISIN: 'LU0569974404',
        ev: 1.82 * 1000 * ONE_MILLION,
        ebit: 190 * ONE_MILLION,
      },
      {
        stockName: 'Faes Farma, S.A.',
        stockCode: 'FAE.MD',
        ISIN: 'ES0134950F36',
        ev: 1.04 * 1000 * ONE_MILLION,
        ebit: 79.44 * ONE_MILLION,
      },
    ];

    test('should render ordered stocks', () => {
      const orderedStocks = evEbitStrategy.listStocksByEvEbitRatio(stocks);

      //console.info(orderedStocks);
    });
  });
});
