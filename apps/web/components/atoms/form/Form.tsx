import React, { ComponentPropsWithoutRef } from 'react';

import { FormControlProps, FormGroupProps } from './Form.types';
import css from './Form.module.css';

export function FormGroup({
  children,
  isLastChild,
}: FormGroupProps): React.JSX.Element {
  return <div className={`${isLastChild ? 'mb-7' : 'mb-4'}`}>{children}</div>;
}

export function Label(
  props: ComponentPropsWithoutRef<'label'>,
): React.JSX.Element {
  return (
    <label {...props} className="inline-block mb-1">
      {props.children}
    </label>
  );
}

export function FormControl({
  children,
  icon,
  className,
  ...props
}: FormControlProps): React.JSX.Element {
  return (
    <div
      className={`flex items-center gap-2 border border-gray-200 py-2 px-3 rounded-md ${css['form-control']} ${className}`}
    >
      {icon}
      <input {...props} className="grow outline-none border-none" />
      {children}
    </div>
  );
}
