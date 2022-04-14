import React, { useCallback, useRef, useMemo } from 'react';

interface Props {
  isLoading: boolean;
  hasMore: boolean;
  next: () => unknown;
  threshold?: number;
  root?: Element | Document | null;
  rootMargin?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

function InfiniteScroll({
  isLoading,
  hasMore,
  next,
  threshold = 0,
  root = null,
  rootMargin = '0px',
  reverse,
  children = [],
}: Props) {
  const observer = useRef<IntersectionObserver>();
  // This callback ref will be called when it is dispatched to an element or detached from an element,
  // or when the callback function changes.
  const observerRef = useCallback(
    (element: HTMLElement | null) => {
      // When isLoading is true, this callback will do nothing.
      // It means that the next function will never be called.
      // It is safe because the intersection observer has disconnected the previous element.
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();
      if (!element) return;

      // Create a new IntersectionObserver instance because hasMore or next may be changed.
      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && hasMore) {
            next();
          }
        },
        { threshold, root, rootMargin }
      );
      observer.current.observe(element);
    },
    [hasMore, isLoading, next, threshold, root, rootMargin]
  );

  const flattenChildren = useMemo(() => React.Children.toArray(children), [children]);

  return (
    <>
      {React.Children.map(flattenChildren, (child, index) => {
        if (!React.isValidElement(child)) {
          process.env.NODE_ENV === 'development' && console.warn('You should use a valid element with InfiniteScroll');
          return child;
        }

        const isObserveTarget = reverse ? index === 0 : flattenChildren.length - 1 === index;
        const ref = isObserveTarget ? observerRef : null;
        return React.cloneElement(child, { ref });
      })}
    </>
  );
}

export default InfiniteScroll;
