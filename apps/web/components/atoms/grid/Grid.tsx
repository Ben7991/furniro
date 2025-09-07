import { GridProps } from './Grid.types';

export function Container({
  children,
  className = '',
}: GridProps): React.JSX.Element {
  return (
    <div className={`${className} w-full px-4 xl:w-[1200px] xl:mx-auto`}>
      {children}
    </div>
  );
}

export function Row({
  children,
  className = '',
}: GridProps): React.JSX.Element {
  return <div className={`${className} w-full flex`}>{children}</div>;
}

export function Col({
  children,
  className = '',
}: GridProps): React.JSX.Element {
  return <div className={className}>{children}</div>;
}
