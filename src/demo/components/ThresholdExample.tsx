import React, { useState, useEffect } from 'react';
import ListItem, { ListItemProps } from './ListItem';
import InfiniteScroll from 'InfiniteScroll';
import fakeApi, { Data } from 'fakeApi';
import 'index.css';

interface Props {
  threshold: number;
}

function ThresholdExample({ threshold }: Props) {
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

  const itemData = data.map(datum => {
    const key = datum.id;
    const props: ListItemProps = {
      id: datum.id,
      title: datum.title,
      children: <div>I am a JSX element</div>,
    };
    return { key, props };
  });

  return (
    <ul>
      <InfiniteScroll
        isLoading={isLoading}
        hasMore={page < 3}
        itemData={itemData}
        Item={ListItem}
        next={next}
        threshold={threshold}
      />
    </ul>
  );
}

export default ThresholdExample;
