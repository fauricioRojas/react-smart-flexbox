import { FlexColumnsAmount } from './interfaces/flex-column.interface';

const MAX_WIDTH = 100;
const MAX_COLUMNS = 12;

export const getFlexColumnValue = (dividend: FlexColumnsAmount) =>
  `0 0 ${(MAX_WIDTH / MAX_COLUMNS) * parseInt(dividend, 10)}%`;
