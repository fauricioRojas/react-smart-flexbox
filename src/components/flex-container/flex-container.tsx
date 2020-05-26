import React, { FC } from 'react';

import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from '../../shared/types/flex-parent.interface';
import { useStyles } from './flex-container.style';

export interface IFlexContainerProps {
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  className?: string;
}

export const FlexContainer: FC<IFlexContainerProps> = ({
  children,
  flexDirection = 'row',
  flexWrap = 'wrap',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  alignContent = 'stretch',
  className,
}) => {
  const { root } = useStyles({
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
  });

  return <section className={`${root}${className ? ` ${className}` : ''}`}>{children}</section>;
};
