import './App.css';
import InfiniteScroll from '../src';

import React, { useState, useCallback } from 'react';

function Item(props: { bar: number }, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div className="item" ref={ref}>
      {props.bar}
    </div>
  );
}
const WithRef = React.forwardRef(Item);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadNext = useCallback(() => {
    console.log(`called in ${page}`);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (page === 3) {
        setHasMore(false);
        return;
      }
      setPage(page + 1);
    }, 1000);
  }, [page]);

  const createItemData = () => {
    const data = [];
    for (let i = 0; i < page * 10; i++) {
      data.push({
        key: i.toString(),
        props: {
          bar: i,
        },
      });
    }
    return data;
  };

  return (
    <div className="box">
      <InfiniteScroll
        itemData={createItemData()}
        Item={WithRef}
        isLoading={isLoading}
        hasMore={hasMore}
        next={loadNext}
      />
    </div>
  );
}

export default App;
