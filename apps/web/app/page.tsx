import { HomeLayout } from '@/components/layouts/home/HomeLayout';
import { Categories, Hero, Products, ShareSetup } from './page.partials';

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <Categories />
      <Products />
      <ShareSetup />
    </HomeLayout>
  );
}
