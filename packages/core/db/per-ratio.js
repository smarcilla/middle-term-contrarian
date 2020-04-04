const NEGATIVE_PER = -1;

const createValue = (companyName, companyCode, ratioValue) => ({
  companyName,
  companyCode,
  ratioValue,
});

/**
 * https://invesgrama.com/ibex-35/ratios-empresas-ibex/per-ibex/
 */
const ibex35 = [
  createValue('ACCIONA', '', 13.96),
  createValue('ACERINOX', '', NEGATIVE_PER),
  createValue('ACS', '', 5.4),
  createValue('AENA', '', 10.67),
  createValue('AMADEUS', '', 16.28),
  createValue('ARCELORMITTAL', '', NEGATIVE_PER),
  createValue('CELLNEX ', '', NEGATIVE_PER),
  createValue('CIE AUTOMOTIVE', '', 5.83),
  createValue('COLONIAL', '', 4.92),
  createValue('ENAGAS', '', 10.43),
  createValue('ENCE', '', 137),
  createValue('ENDESA', '', 115.31),
  createValue('FERROVIAL', '', 58.17),
  createValue('GRIFOLS', '', 33.16),
  createValue('IAG', '', 2.68),
  createValue('IBERDROLA', '', 16.98),
  createValue('INDITEX', '', 18.82),
  createValue('INDRA', '', 10.72),
  createValue('MASMOVIL', '', 19.88),
  createValue('MEDIASET', '', 4.72),
  createValue('MELIA', '', 7.57),
  createValue('MERLIN', '', 5.92),
  createValue('NATURGY', '', 11),
  createValue('REE', '', 11.78),
  createValue('REPSOL', '', NEGATIVE_PER),
  createValue('SIEMENS GAMESA', '', 64.29),
  createValue('TELEFÓNICA', '', 23.82),
  createValue('VISCOFAN', '', 21.81),
];

const PerRatio = {
  getAll: () => ibex35,
  getByName: name => ibex35.find(({ companyName }) => companyName === name),
};
module.exports = PerRatio;
