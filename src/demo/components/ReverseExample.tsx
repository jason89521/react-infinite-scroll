import React, { useState, useEffect, useRef } from 'react';
import ListItem from './ListItem';
import InfiniteScroll, { useScrollToOld } from 'InfiniteScroll';
import fakeApi, { Data } from 'fakeApi';
import 'index.css';

function ReverseExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const [scrollToOld, recordScroll] = useScrollToOld(containerRef);

  const next = async () => {
    setIsLoading(true);
    const newData = await fakeApi(page);
    const reverseData = [...newData].reverse();
    recordScroll(); // record old scroll position
    setData(oldData => [...reverseData, ...oldData]);
    setPage(oldPage => oldPage + 1);
    setIsLoading(false);
    scrollToOld(); // scroll to old position
  };

  useEffect(() => {
    fakeApi(0).then(initData => {
      setData([...initData].reverse());
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      containerRef.current?.scrollTo({ top: scrollTop });
    });
  }, []);

  return (
    <ul ref={containerRef}>
      <InfiniteScroll isLoading={isLoading} hasMore={true} next={next} threshold={1} reverse>
        {data.map(datum => {
          return (
            <ListItem key={datum.id} title={datum.title} id={datum.id}>
              <div>I am a JSX element</div>
            </ListItem>
          );
        })}
      </InfiniteScroll>
    </ul>
  );
}

export default ReverseExample;
