import classNames from 'classnames';
import React from 'react';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Footer = ({ children, className, ...props }: FooterProps) => {
  return (
    <div
      {...props}
      className={classNames([
        'flex w-full items-center justify-center bg-black py-5 text-white',
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Footer;
