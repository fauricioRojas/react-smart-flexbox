import React, { FC } from 'react';

import { FlexColumnPadding } from '../../shared/types/flex-children.interface';
import { useStyles } from './flex-column.style';
import { FlexColumnsAmount } from './interfaces/flex-column.interface';

export interface IFlexColumnProps {
  xs: FlexColumnsAmount;
  sm: FlexColumnsAmount;
  md: FlexColumnsAmount;
  lg: FlexColumnsAmount;
  xl: FlexColumnsAmount;
  padding?: FlexColumnPadding;
  className?: string;
  onClick?: () => void;
}

export const FlexColumn: FC<IFlexColumnProps> = ({ children, className, onClick, ...rest }) => {
  const { root } = useStyles(rest);

  return (
    <article className={`${root}${className ? ` ${className}` : ''}`} onClick={onClick}>
      {children}
    </article>
  );
};
