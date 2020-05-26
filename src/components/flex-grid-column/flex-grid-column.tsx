import React, { FC } from 'react';

import { FlexColumnPadding } from '../../shared/types/flex-children.interface';
import { useStyles } from './flex-grid-column.style';
import { FlexGridColumnsAmount } from './interfaces/flex-grid-column.interface';

export interface IFlexColumnProps {
  columnsInXs?: FlexGridColumnsAmount;
  columnsInSm?: FlexGridColumnsAmount;
  columnsInMd?: FlexGridColumnsAmount;
  columnsInLg?: FlexGridColumnsAmount;
  columnsInXl?: FlexGridColumnsAmount;
  padding?: FlexColumnPadding;
  className?: string;
  onClick?: () => void;
}

export const FlexGridColumn: FC<IFlexColumnProps> = ({ children, className, onClick, ...rest }) => {
  const { root } = useStyles(rest);

  return (
    <article className={`${root}${className ? ` ${className}` : ''}`} onClick={onClick}>
      {children}
    </article>
  );
};
