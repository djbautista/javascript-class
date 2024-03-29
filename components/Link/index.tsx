import classNames from 'classnames';
import NextLink, { LinkProps as NextInternalLinkProps } from 'next/link';

type NextLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextInternalLinkProps
> &
  NextInternalLinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

interface LinkProps extends NextLinkProps {
  variant?: 'primary' | 'secondary';
}

const variantsClasses = {
  primary: 'text-gray-300 hover:text-white',
  secondary: 'text-pink-500 hover:text-pink-700',
};

const Link = ({
  children,
  className,
  variant = 'primary',
  ...props
}: LinkProps) => {
  return (
    <NextLink
      {...props}
      className={classNames([
        ' transition transition-colors duration-150 ease-in-out',
        variantsClasses[variant],
        className,
      ])}
    >
      {children}
    </NextLink>
  );
};

export default Link;
