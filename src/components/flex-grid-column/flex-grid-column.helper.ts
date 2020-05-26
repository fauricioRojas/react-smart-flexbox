import { FlexGridColumnsAmount } from './interfaces/flex-grid-column.interface';

const MAX_WIDTH = 100;

export const getFlexGridColumnValue = (dividend: FlexGridColumnsAmount) =>
  `0 0 ${MAX_WIDTH / parseInt(dividend, 10)}%`;
