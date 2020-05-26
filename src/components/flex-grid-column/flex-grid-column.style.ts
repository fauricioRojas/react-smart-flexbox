import { createUseStyles } from 'react-jss';

import { getFlexColumnPadding } from '../../shared/helpers/flex-children.helper';
import { LG, MD, SM, XL } from '../../shared/style/breakpoints';
import { IFlexColumnProps } from './flex-grid-column';
import { getFlexGridColumnValue } from './flex-grid-column.helper';

export const useStyles = createUseStyles({
  root: {
    flex: ({ columnsInXs = '1' }: IFlexColumnProps) => getFlexGridColumnValue(columnsInXs),
    padding: ({ padding = 'default' }: IFlexColumnProps) => getFlexColumnPadding(padding),
    [SM]: {
      flex: ({ columnsInSm = '2' }: IFlexColumnProps) => getFlexGridColumnValue(columnsInSm),
    },
    [MD]: {
      flex: ({ columnsInMd = '3' }: IFlexColumnProps) => getFlexGridColumnValue(columnsInMd),
    },
    [LG]: {
      flex: ({ columnsInLg = '4' }: IFlexColumnProps) => getFlexGridColumnValue(columnsInLg),
    },
    [XL]: {
      flex: ({ columnsInXl = '6' }: IFlexColumnProps) => getFlexGridColumnValue(columnsInXl),
    },
  },
});
