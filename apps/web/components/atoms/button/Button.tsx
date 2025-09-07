import Link, { LinkProps } from 'next/link';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

type GenericProps = {
  variant: 'primary' | 'outline';
};

export type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'> &
  GenericProps;

export type AnchorProps = {
  el: 'link';
  children?: ReactNode;
  className?: string;
} & LinkProps &
  GenericProps;

export function Button(props: ButtonProps | AnchorProps): React.JSX.Element {
  let variantStyle = '';

  if (props.variant === 'primary') {
    variantStyle =
      'border border-[var(--cream-700)] bg-[var(--cream-700)] text-white';
  } else {
    variantStyle = 'border border-[var(--cream-700)] text-[var(--cream-700)]';
  }

  if (props.el === 'link') {
    return (
      <Link
        className={`inline-block py-2 px-4 ${variantStyle} ${props.className}`}
        {...props}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={`inline-block py-2 px-4 cursor-pointer ${variantStyle} ${props.className}`}
    >
      {props.children}
    </button>
  );
}
