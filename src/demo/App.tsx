import './App.css';
import InfiniteScroll from 'lib/index';
import Foo from 'demo/Foo';

import React, { useState } from 'react';

interface ItemProps {
  foo: string;
  bar: number;
}

function Item(props: ItemProps, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div className="item" ref={ref}>
      {props.foo}, {props.bar}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadNext = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (page === 3) {
        setHasMore(false);
        return;
      }
      setPage(page + 1);
    }, 1000);
  };

  const createItemData = () => {
    const data = [];
    for (let i = 0; i < page * 10; i++) {
      data.push({
        key: i.toString(),
        props: {
          foo: 'hello',
          bar: i,
        },
      });
    }
    return data;
  };

  return (
    <div className="box">
      <Foo />
      <InfiniteScroll
        itemData={createItemData()}
        Item={React.forwardRef(Item)}
        isLoading={isLoading}
        hasMore={hasMore}
        next={loadNext}
      />
    </div>
  );
}

export default App;
