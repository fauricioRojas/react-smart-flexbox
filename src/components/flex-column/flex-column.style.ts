import { createUseStyles } from 'react-jss';

import { getFlexColumnPadding } from '../../shared/helpers/flex-children.helper';
import { LG, MD, SM, XL } from '../../shared/style/breakpoints';
import { IFlexColumnProps } from './flex-column';
import { getFlexColumnValue } from './flex-column.helper';

export const useStyles = createUseStyles({
  root: {
    flex: ({ xs }: IFlexColumnProps) => getFlexColumnValue(xs),
    padding: ({ padding = 'default' }: IFlexColumnProps) => getFlexColumnPadding(padding),
    [SM]: {
      flex: ({ sm }: IFlexColumnProps) => getFlexColumnValue(sm),
    },
    [MD]: {
      flex: ({ md }: IFlexColumnProps) => getFlexColumnValue(md),
    },
    [LG]: {
      flex: ({ lg }: IFlexColumnProps) => getFlexColumnValue(lg),
    },
    [XL]: {
      flex: ({ xl }: IFlexColumnProps) => getFlexColumnValue(xl),
    },
  },
});
