const RoicStrategy = require('./roic-strategy');

describe('ROIC ratio strategy', () => {
  const ONE_MILLION = 1000000;
  let roicStrategy;
  beforeAll(() => {
    roicStrategy = RoicStrategy();
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
        ebit: 4700 * ONE_MILLION,
        currentAssets: 11414 * ONE_MILLION,
        currentLiabilities: 7306 * ONE_MILLION,
        totalLiabilities: 13442 * ONE_MILLION,
        totalAssets: 28391 * ONE_MILLION,
      },
      {
        stockName: 'Endesa, S.A.',
        stockCode: 'ELE.MD',
        ISIN: 'ES0130670112',

        ebit: 1724 * ONE_MILLION,
        currentAssets: 6100 * ONE_MILLION,
        currentLiabilities: 8465 * ONE_MILLION,
        totalLiabilities: 24144 * ONE_MILLION,
        totalAssets: 31981 * ONE_MILLION,
      },
      {
        stockName: 'Compania de Distribucion Integral Logista Holdings, S.A.',
        stockCode: 'LOG.MD',
        ISIN: 'ES0105027009',

        ebit: 198.31 * ONE_MILLION,
        currentAssets: 5439.72 * ONE_MILLION,
        currentLiabilities: 6254.345 * ONE_MILLION,
        totalLiabilities: 6563.221 * ONE_MILLION,
        totalAssets: 7083.567 * ONE_MILLION,
      },
      {
        stockName: 'Mediaset Espana Comunicacion, S.A.',
        stockCode: 'TL5.MD',
        ISIN: 'ES0152503035',

        ebit: 264.89 * ONE_MILLION,
        currentAssets: 424.393 * ONE_MILLION,
        currentLiabilities: 271.298 * ONE_MILLION,
        totalLiabilities: 507.392 * ONE_MILLION,
        totalAssets: 1423.146 * ONE_MILLION,
      },
      {
        stockName: 'Amadeus IT Group, S.A.',
        stockCode: 'AMS.MD',
        ISIN: 'ES0109067019',

        ebit: 1475.4 * ONE_MILLION,
        currentAssets: 1443.1 * ONE_MILLION,
        currentLiabilities: 2970.3 * ONE_MILLION,
        totalLiabilities: 6604 * ONE_MILLION,
        totalAssets: 10401.1,
      },
      {
        stockName: 'Zardoya Otis, S.A. ',
        stockCode: 'ZOT.MD',
        ISIN: 'ES0184933812',

        ebit: 185.06 * ONE_MILLION,
        currentAssets: 281.876 * ONE_MILLION,
        currentLiabilities: 246.508 * ONE_MILLION,
        totalLiabilities: 285.946 * ONE_MILLION,
        totalAssets: 708.88 * ONE_MILLION,
      },
      {
        stockName: 'Viscofan, S.A.',
        stockCode: 'VIS.MD',
        ISIN: 'ES0184262212',

        ebit: 123.006 * ONE_MILLION,
        currentAssets: 520.144 * ONE_MILLION,
        currentLiabilities: 155.52 + ONE_MILLION,
        totalLiabilities: 300.643 * ONE_MILLION,
        totalAssets: 1085.009 * ONE_MILLION,
      },
      {
        stockName: 'Vidrala, S.A.',
        stockCode: 'VID.MD',
        ISIN: 'ES0183746314',

        ebit: 184.206 * ONE_MILLION,
        currentAssets: 488.828 * ONE_MILLION,
        currentLiabilities: 403.229 * ONE_MILLION,
        totalLiabilities: 734.502 * ONE_MILLION,
        totalAssets: 1457.861 * ONE_MILLION,
      },
      {
        stockName: 'Almirall, S.A.',
        stockCode: 'ALM.MD',
        ISIN: 'ES0157097017',

        ebit: 161.316 * ONE_MILLION,
        currentAssets: 476.614 * ONE_MILLION,
        currentLiabilities: 316.527 * ONE_MILLION,
        totalLiabilities: 1159.601 * ONE_MILLION,
        totalAssets: 2439.787 * ONE_MILLION,
      },
      {
        stockName: 'Aperam, S.A.',
        stockCode: 'APAM.MD',
        ISIN: 'LU0569974404',

        ebit: 190 * ONE_MILLION,
        currentAssets: 1914.0 * ONE_MILLION,
        currentLiabilities: 1148.0 * ONE_MILLION,
        totalLiabilities: 1841.0 * ONE_MILLION,
        totalAssets: 4259.0 * ONE_MILLION,
      },
      {
        stockName: 'Faes Farma, S.A.',
        stockCode: 'FAE.MD',
        ISIN: 'ES0134950F36',

        ebit: 79.44 * ONE_MILLION,
        currentAssets: 222.989 * ONE_MILLION,
        currentLiabilities: 72.279 * ONE_MILLION,
        totalLiabilities: 80.019 * ONE_MILLION,
        totalAssets: 493.673 * ONE_MILLION,
      },
    ];

    test('should render ordered stocks', () => {
      const orderedStocks = roicStrategy.listStocksByRoicRatio(stocks);

      // console.info(orderedStocks);
    });
  });
});
