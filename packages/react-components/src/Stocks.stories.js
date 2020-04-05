import React from 'react';
import { object } from '@storybook/addon-knobs';
import Stocks from './Stocks';

export default {
  title: 'Stocks',
  component: Stocks,
};

const stocks = [
  { name: 'CIE AUTOMOTIVE', per: 5.83, roce: 12.73 },
  { name: 'IAG', per: 2.68, roce: 12.39 },
  { name: 'COLONIAL', per: 4.92, roce: 9.37 },
  { name: 'INDRA', per: 10.72, roce: 8.86 },
  { name: 'ENAGAS', per: 10.43, roce: 8.16 },
];

export const withStock = () => <Stocks stocks={stocks} />;
