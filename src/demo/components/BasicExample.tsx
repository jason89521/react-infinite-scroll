import fakeApi, { Data } from 'fakeApi';
import React, { useState, useEffect } from 'react';
import ListItem, { ListItemProps } from './ListItem';
import InfiniteScroll from 'InfiniteScroll';

const WithRef = React.forwardRef(ListItem);

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
    <ul style={{ listStyle: 'none', padding: '0' }}>
      <InfiniteScroll
        isLoading={isLoading}
        hasMore={page < 10}
        itemData={itemData}
        Item={WithRef}
        next={next}
      />
    </ul>
  );
}

export default BasicExample;
