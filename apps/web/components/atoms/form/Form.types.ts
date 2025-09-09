import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type FormGroupProps = {
  children: ReactNode;
  isLastChild?: boolean;
};

export type FormControlProps = {
  children?: ReactNode;
  icon?: ReactNode;
} & ComponentPropsWithoutRef<'input'>;
