import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import InfiniteScroll from 'InfiniteScroll';
import fakeApi, { Data } from 'fakeApi';
import 'index.css';

function BasicExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data[]>([]);

  const next = async () => {
    setIsLoading(true);
    const newData = await fakeApi(page);
    setData(oldData => [...oldData, ...newData]);
    setPage(oldPage => oldPage + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    fakeApi(0).then(initData => {
      setData(initData);
    });
  }, []);

  return (
    <ul>
      <InfiniteScroll isLoading={isLoading} hasMore={page < 3} next={next}>
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

export default BasicExample;
