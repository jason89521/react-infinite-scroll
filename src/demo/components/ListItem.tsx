import React from 'react';

export interface ListItemProps {
  id: number;
  title: string;
  children: React.ReactNode;
}

function ListItem(props: ListItemProps, ref: React.ForwardedRef<HTMLLIElement>) {
  return (
    <li
      ref={ref}
      style={{
        minHeight: '3rem',
        backgroundColor: 'orange',
        listStyleType: 'none',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </li>
  );
}

export default ListItem;
