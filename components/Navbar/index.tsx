import Image from 'next/image';

import React from 'react';

import Link from '@/components/Link';
import classNames from 'classnames';

type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(['bg-black p-8 text-white', className])}>
      <div className="flex items-center justify-between">
        <div className="">
          <Image
            className="h-8 w-fit object-contain md:h-12"
            src="/kodemia-logo.svg"
            alt="Kodemia Logo"
            width={300}
            height={83}
          />
        </div>
        <div className="flex gap-4">
          <Link href="/">Ir al Inicio |</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
