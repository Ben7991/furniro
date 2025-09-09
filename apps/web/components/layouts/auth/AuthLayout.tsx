import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Headline } from '@/components/atoms/headline/Headline';
import { Copyright } from '@/components/atoms/copyright/Copyright';

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  subline: string;
};

export function AuthLayout({
  title,
  subline,
  children,
}: AuthLayoutProps): React.JSX.Element {
  return (
    <main className="w-full md:h-screen lg:h-auto xl:h-screen py-10 md:py-0 flex md:items-center justify-center">
      <section className="basis-[90%] md:basis-[450px]">
        <div className="md:border md:border-gray-200 w-full md:py-8 px-5 md:px-8 md:rounded-lg md:shadow-md">
          <div className="w-[75px] h-[75px] rounded-full bg-gray-300 flex items-center justify-center mx-auto">
            <Link href="/" className="inline-block">
              <Image alt="App Logo" src="/logo.svg" width={50} height={50} />
            </Link>
          </div>
          <div className="text-center my-4">
            <Headline tag="h3">{title}</Headline>
            <p>{subline}</p>
          </div>
          {children}
        </div>
        <div className="text-center pt-5">
          <Copyright />
        </div>
      </section>
    </main>
  );
}
