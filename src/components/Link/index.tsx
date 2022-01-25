import React, { ComponentProps, memo } from 'react';

type AnchorProps = {
  children: string;
};

type Props = AnchorProps & Omit<ComponentProps<'a'>, keyof AnchorProps>;

const Link = ({ children, ...props }: Props) => {
  return (
    <div className="text-sm">
      <a
        className="font-medium text-indigo-600 hover:text-indigo-500"
        {...props}
      >
        {children}
      </a>
    </div>
  );
};

export default memo(Link);
