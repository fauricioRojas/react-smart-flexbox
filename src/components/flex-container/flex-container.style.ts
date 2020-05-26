import { createUseStyles } from 'react-jss';

import { IFlexContainerProps } from './flex-container';

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexFlow: ({ flexDirection, flexWrap }: IFlexContainerProps) => `${flexDirection} ${flexWrap}`,
    justifyContent: ({ justifyContent }: IFlexContainerProps) => justifyContent,
    alignItems: ({ alignItems }: IFlexContainerProps) => alignItems,
    alignContent: ({ alignContent }: IFlexContainerProps) => alignContent,
  },
});
