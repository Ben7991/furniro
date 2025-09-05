import { ReactNode } from 'react';

type HeadlineProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
};

export function Headline({
  tag,
  className,
  children,
}: HeadlineProps): React.JSX.Element {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={`${className} text-[2rem] text-black font-bold`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`${className} text-[1.75rem] text-black font-bold`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={`${className} text-[1.5rem] text-black font-bold`}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={`${className} text-[1.25rem] text-black font-bold`}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={`${className} text-[1rem] text-black font-bold`}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={`${className} text-[0.75rem] text-black font-bold`}>
          {children}
        </h6>
      );
  }
}
