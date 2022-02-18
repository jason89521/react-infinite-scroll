import React, { useCallback, useRef } from 'react';

interface Props<T, P> {
  isLoading: boolean;
  hasMore: boolean;
  next: () => unknown;
  loader?: React.ReactNode;
  itemsProps: T[];
  Item: React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;
}
function InfiniteScroll<T, P>({ isLoading, hasMore, Item, next, itemsProps }: Props<T, P>) {
  const observer = useRef<IntersectionObserver>();
  const lastRef = useCallback(
    element => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          next();
        }
      });
      if (element) observer.current.observe(element);
    },
    [hasMore, isLoading, next]
  );

  const renderedItems = itemsProps.map((props, idx) => {
    const isLast = itemsProps.length - 1 === idx;
    const ref = isLast ? lastRef : null;
    return <Item key={idx} ref={ref} {...props} />;
  });

  return <>{renderedItems}</>;
}

export default InfiniteScroll;
