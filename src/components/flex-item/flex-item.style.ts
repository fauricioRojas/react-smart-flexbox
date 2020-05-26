import { createUseStyles } from 'react-jss';

import { getFlexColumnPadding } from '../../shared/helpers/flex-children.helper';
import { IFlexItemProps } from './flex-item';

export const useStyles = createUseStyles({
  root: {
    flex: ({ flexGrow, flexShrink, flexBasis }: IFlexItemProps) =>
      `${flexGrow} ${flexShrink} ${flexBasis}`,
    order: ({ order }: IFlexItemProps) => order,
    alignSelf: ({ alignSelf }: IFlexItemProps) => alignSelf,
    padding: ({ padding = 'default' }: IFlexItemProps) => getFlexColumnPadding(padding),
  },
});
