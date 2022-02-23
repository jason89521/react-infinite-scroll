import React, { useCallback, useRef } from 'react';

interface Data<T> {
  key?: React.Key;
  props: T;
}

interface Props<T, P extends HTMLElement> {
  isLoading: boolean;
  hasMore: boolean;
  Item: React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;
  itemData: Data<T>[];
  next: () => unknown;
  threshold?: number;
}

function InfiniteScroll<T, P extends HTMLElement>({
  isLoading,
  hasMore,
  Item,
  itemData,
  next,
  threshold = 0,
}: Props<T, P>) {
  const observer = useRef<IntersectionObserver>();
  // This callback ref will be called when it is dispatched to an element or detached from an element,
  // or when the callback function changes.
  const lastRef = useCallback(
    (element: HTMLElement | null) => {
      // When isLoading is true, this callback will do nothing.
      // It means that the next function will never be called.
      // It is safe because the intersection observer has disconnected the previous element.
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();
      // Create a new IntersectionObserver instance because hasMore or next may be changed.
      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && hasMore) {
            next();
          }
        },
        { threshold: threshold }
      );
      if (element) observer.current.observe(element);
    },
    [hasMore, isLoading, next, threshold]
  );

  const renderedItems = itemData.map((datum, idx) => {
    const key = datum.key !== undefined ? datum.key : idx;
    const isLast = itemData.length - 1 === idx;
    const ref = isLast ? lastRef : null;
    return <Item key={key} ref={ref} {...datum.props} />;
  });

  return <>{renderedItems}</>;
}

export default InfiniteScroll;
