import React, { FC } from 'react';

import { FlexColumnPadding } from '../../shared/types/flex-children.interface';
import { useStyles } from './flex-item.style';
import { AlignSelf } from './interfaces/flex-item.interface';

export interface IFlexItemProps {
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  order?: number;
  alignSelf?: AlignSelf;
  padding?: FlexColumnPadding;
  className?: string;
  onClick?: () => void;
}

export const FlexItem: FC<IFlexItemProps> = ({
  children,
  flexGrow = 0,
  flexShrink = 1,
  flexBasis = 'auto',
  order = 0,
  alignSelf = 'stretch',
  padding = 'default',
  className,
  onClick,
}) => {
  const { root } = useStyles({ flexGrow, flexShrink, flexBasis, order, alignSelf, padding });

  return (
    <article className={`${root}${className ? ` ${className}` : ''}`} onClick={onClick}>
      {children}
    </article>
  );
};
