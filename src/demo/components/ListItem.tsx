import React from 'react';

export interface ListItemProps {
  id: number;
  title: string;
  children: React.ReactNode;
}

function ListItem(props: ListItemProps, ref: React.ForwardedRef<HTMLLIElement>) {
  return (
    <li ref={ref}>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </li>
  );
}

export default React.forwardRef(ListItem);
