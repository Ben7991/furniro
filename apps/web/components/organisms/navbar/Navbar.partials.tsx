'use client';

import { FiSearch } from 'react-icons/fi';
import type { NavSearchProps, SearchModalProps } from './Navbar.types';
import { MdClose } from 'react-icons/md';

export function NavSearch({ className }: NavSearchProps): React.JSX.Element {
  return (
    <div className={className}>
      <div className="flex items-center border gap-2 border-gray-400 rounded-4xl py-2 px-4 lg:py-3 w-full">
        <FiSearch className="text-xl" />
        <input
          type="search"
          className="outline-none flex-grow w-full"
          placeholder="Search products, category"
        />
      </div>
    </div>
  );
}

export function SearchModal({
  onHideModal,
}: SearchModalProps): React.JSX.Element {
  return (
    <div className="fixed top-0 right-0 w-full h-screen bg-white">
      <div className="flex items-center gap-4 border-b border-b-gray-400 p-4">
        <NavSearch className="flex-grow" />
        <button onClick={onHideModal} className="cursor-pointer">
          <MdClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
