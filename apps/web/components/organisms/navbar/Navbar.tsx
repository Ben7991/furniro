'use client';

import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

import { Container } from '@/components/atoms/grid/Grid';
import { AppLogo } from '@/components/molecules/appLogo/AppLogo';
import { SearchModal, NavSearch } from './Navbar.partials';

export function Navbar(): React.JSX.Element {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const toggleSearchModal = (): void => {
    setShowSearchModal((prevState) => !prevState);
  };

  return (
    <nav className="bg-white py-5 lg:py-7">
      <Container className="flex items-center justify-between">
        <AppLogo />
        <div className="flex items-center justify-end basis-1/2 md:basis-2/3 md:justify-between ">
          <NavSearch className="hidden md:block md:basis-2/3" />
          <div className="flex items-center gap-4">
            <button
              className="cursor-pointer md:hidden"
              onClick={toggleSearchModal}
            >
              <FiSearch className="text-xl" />
            </button>
            <button className="cursor-pointer hover:text-[var(--cream-700)]">
              <FiUser className="text-xl xl:text-2xl" />
            </button>
            <button className="relative block cursor-pointer hover:text-[var(--cream-700)]">
              <span className="bg-red-500 text-white absolute -top-3 -right-3 inline-block text-[0.75em] py-0.5 px-2 rounded-md">
                0
              </span>
              <FiShoppingCart className="text-xl xl:text-2xl" />
            </button>
          </div>
        </div>
      </Container>
      {showSearchModal ? <SearchModal onHideModal={toggleSearchModal} /> : null}
    </nav>
  );
}
