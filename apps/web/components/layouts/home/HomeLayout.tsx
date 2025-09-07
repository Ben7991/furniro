import { ReactNode } from 'react';

import { Navbar } from '@/components/organisms/navbar/Navbar';
import { Footer } from '@/components/organisms/footer/Footer';

type HomeLayoutProps = {
  children: ReactNode;
};

export function HomeLayout({ children }: HomeLayoutProps): React.JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
