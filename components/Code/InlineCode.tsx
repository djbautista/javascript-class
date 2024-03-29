import classNames from 'classnames';
import React from 'react';

interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';
}

const variantsClasses = {
  primary: 'rounded px-2 py-1 bg-gray-800 text-pink-300',
  secondary: 'bg-transparent text-pink-500',
};

const InlineCode: React.FC<InlineCodeProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}: InlineCodeProps) => {
  return (
    <code
      {...props}
      className={classNames([
        'font-mono text-sm',
        variantsClasses[variant],
        className,
      ])}
    >
      {children}
    </code>
  );
};

export default InlineCode;
