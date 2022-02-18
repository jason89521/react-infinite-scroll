import React, { useCallback, useRef } from 'react';

interface Data<T> {
  key?: string;
  props: T;
}

interface Props<T, P extends HTMLElement> {
  isLoading: boolean;
  hasMore: boolean;
  Item: React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;
  itemData: Data<T>[];
  next: () => unknown;
}

function InfiniteScroll<T, P extends HTMLElement>({
  isLoading,
  hasMore,
  Item,
  itemData,
  next,
}: Props<T, P>) {
  const observer = useRef<IntersectionObserver>();
  const lastRef = useCallback(
    (element: HTMLElement | null) => {
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

  const renderedItems = itemData.map((datum, idx) => {
    const isLast = itemData.length - 1 === idx;
    const key = datum.key !== undefined ? datum.key : idx;
    const ref = isLast ? lastRef : null;
    return <Item key={key} ref={ref} {...datum.props} />;
  });

  return <>{renderedItems}</>;
}

export default InfiniteScroll;
