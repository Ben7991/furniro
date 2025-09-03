import Image from 'next/image';
import Link from 'next/link';

export type AppLogoProps = {
  className?: string;
  path?: string;
};

export function AppLogo({
  className = '',
  path = '/',
}: AppLogoProps): React.JSX.Element {
  return (
    <Link href={path} className={`${className} flex items-center gap-1`}>
      <Image src="/logo.svg" alt="Furniro Logo" width={50} height={32} />
      <strong className="text-2xl lg:text-3xl">Furniro</strong>
    </Link>
  );
}
