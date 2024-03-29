import React, { forwardRef } from 'react';
import classnames from 'classnames';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'transparent';
}

const variantClasses = {
  primary: 'bg-neutral-900 text-neutral-100',
  secondary: 'bg-neutral-100 text-neutral-900',
  transparent: 'bg-transparent text-neutral-100',
};

const Card = forwardRef(
  ({ className, children, variant = 'primary', ...props }: CardProps, ref) => {
    return (
      <div
        {...props}
        ref={ref as any}
        className={classnames(
          ['shadow-lg', 'rounded-lg', 'p-4 md:p-8'],
          variantClasses[variant],
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

export default Card;
