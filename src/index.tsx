import React, { useCallback, useRef } from 'react';

interface Props<T, P extends HTMLElement> {
  isLoading: boolean;
  hasMore: boolean;
  loader?: React.ReactNode;
  Item: React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;
  itemsProps: T[];
  next: () => unknown;
}
function InfiniteScroll<T, P extends HTMLElement>({
  isLoading,
  hasMore,
  loader,
  Item,
  itemsProps,
  next,
}: Props<T, P>) {
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

  return (
    <>
      {renderedItems}
      {isLoading && loader}
    </>
  );
}

export default InfiniteScroll;
